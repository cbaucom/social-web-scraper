import express from "express";
import { getTwitterCount, getInstagramCount } from "./lib/scraper";
import db from "./lib/db";
import "./lib/cron";

const app = express();

app.get("/scrape", async (req, res, next) => {
  console.log("Scraping...!");
  const [instaCount, twitterCount] = await Promise.all([
    getInstagramCount(),
    getTwitterCount(),
  ]);

  res.json({ instaCount, twitterCount });
});

app.listen(8444, () => {
  console.log("Scrape app listening on port 8444");
});
