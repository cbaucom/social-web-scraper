import { useContext } from "react";
import { ScrapeContext } from "./ScrapeContext";
import Table from "./Table";
import Chart from "./Chart";

export default function Data() {
  const { scrapes, fetchScrapes } = useContext(ScrapeContext);

  return (
    <div>
      <button type="button" onClick={fetchScrapes}>
        Refresh Data
      </button>
      <h2>The Data:</h2>
      <Chart scrapes={scrapes.instagram} />
      <Chart scrapes={scrapes.twitter} />
      <h4>Instagram</h4>
      <Table scrapes={scrapes.instagram} />
      <h4>Twitter</h4>
      <Table scrapes={scrapes.twitter} />
    </div>
  );
}
