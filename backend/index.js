import express from "express";
import cors from "cors";
import { getTwitterCount, getInstagramCount } from "./lib/scraper";
import db from "./lib/db";
import { uniqueCount } from "./lib/utils";
import "./lib/cron";

const app = express();
app.use(cors());

app.get(`/scrape`, async (req, res, next) => {
  console.log("Scraping...!");
  const [instaCount, twitterCount] = await Promise.all([
    getInstagramCount(),
    getTwitterCount(),
  ]);

  res.json({ instaCount, twitterCount });
});

app.get(`/data`, async (req, res, next) => {
  // get the scrape data
  const { instagram, twitter } = db.value();
  // filter for unique values
  const uniqueInstagram = uniqueCount(instagram);
  const uniqueTwitter = uniqueCount(twitter);
  // respond with json
  res.json({ instagram: uniqueInstagram, twitter: uniqueTwitter });
});

app.listen(8444, () => {
  console.log(`Scrape app listening on http://localhost:8444`);
});
