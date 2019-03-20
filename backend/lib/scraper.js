import axios from "axios";
import cheerio from "cheerio";
import db from "./db";

export async function getHTML(url) {
  const { data: html } = await axios.get(url);
  return html;
}

// Scrape Twitter for followers count
export async function getTwitterFollowers(html) {
  // load cheerio
  const $ = cheerio.load(html);
  const span = $('[data-nav="followers"] .ProfileNav-value');
  return span.data("count");
}

// Scrape Instagram for followers count
export async function getInstagramFollowers(html) {
  const $ = cheerio.load(html);
  const dataInString = $('script[type="application/ld+json"]').html();
  const pageObject = JSON.parse(dataInString);

  return parseInt(
    pageObject.mainEntityofPage.interactionStatistic.userInteractionCount
  );
}

export async function getInstagramCount() {
  const html = await getHTML("https://instagram.com/chrisbaucom");
  const instaCount = await getInstagramFollowers(html);
  return instaCount;
}

export async function getTwitterCount() {
  const html = await getHTML("https://www.twitter.com/chris__baucom/");
  const twitterCount = await getTwitterFollowers(html);
  return twitterCount;
}

export async function runCron() {
  const [instaCount, twitterCount] = await Promise.all([
    getInstagramCount(),
    getTwitterCount(),
  ]);

  console.log(
    `You have ${twitterCount} Twitter followers, ${instaCount} Instagram followers.`
  );

  db.get("instagram")
    .push({
      date: Date.now(),
      count: instaCount,
    })
    .write();

  db.get("twitter")
    .push({
      date: Date.now(),
      count: twitterCount,
    })
    .write();
  console.log("cron complete!");
}
