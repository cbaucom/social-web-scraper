import cron from "node-cron";
import { runCron } from "./scraper";

// Run cron job every 30 min
cron.schedule("0,30 * * * *", () => {
  console.log("Running the CRON");
  runCron();
});
