import { useContext } from "react";
import { distanceInWords } from "date-fns";
import { ScrapeContext } from "./ScrapeContext";

export default function Data() {
  const { scrapes } = useContext(ScrapeContext);

  return (
    <div>
      <h2>The Data:</h2>
      <h4>Instagram</h4>
      <ul>
        {scrapes.instagram.map(scrape => (
          <li key={scrape.date}>
            {scrape.count} followers -
            {distanceInWords(new Date(scrape.date), new Date())}
          </li>
        ))}
      </ul>
      <h4>Twitter</h4>
      <ul>
        {scrapes.twitter.map(scrape => (
          <li key={scrape.date}>
            {scrape.count} followers -
            {distanceInWords(new Date(scrape.date), new Date())}
          </li>
        ))}
      </ul>
    </div>
  );
}
