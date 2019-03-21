import { useContext } from "react";
import { ScrapeContext } from "./ScrapeContext";
import Table from "./Table";

export default function Data() {
  const { scrapes } = useContext(ScrapeContext);

  return (
    <div>
      <h2>The Data:</h2>
      <h4>Instagram</h4>
      <Table scrapes={scrapes.instagram} />
      <h4>Twitter</h4>
      <Table scrapes={scrapes.twitter} />
    </div>
  );
}
