import { useContext } from "react";
import { ScrapeContext } from "./ScrapeContext";

export default function Data() {
  const scrapeData = useContext(ScrapeContext);
  console.log(scrapeData);
  return (
    <div>
      <h2>The Data:</h2>
      {scrapeData.data}
    </div>
  );
}
