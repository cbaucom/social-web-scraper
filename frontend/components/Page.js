import { useEffect, useState } from "react";

import { ScrapeProvider } from "./ScrapeContext";

// Custom hook
function useScrapes() {
  const [scrapes, setScrapes] = useState({
    instagram: [],
    twitter: [],
  });

  useEffect(function() {
    (async () => {
      console.log("Mounting or Updating");
      const res = await fetch("http://localhost:8444/data");
      const data = await res.json();
      console.log(data);
      setScrapes(data);
    })();
  }, []);
  return scrapes;
}

export default function Page({ children }) {
  const scrapes = useScrapes();

  return (
    <ScrapeProvider
      value={{
        scrapes,
      }}
    >
      <div className="page">{children}</div>
    </ScrapeProvider>
  );
}
