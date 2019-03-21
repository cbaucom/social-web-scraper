import { ScrapeProvider } from "./ScrapeContext";

export default function Page({ children }) {
  return (
    <ScrapeProvider
      value={{
        data: "this is context data. sweet!",
      }}
    >
      <div className="page">{children}</div>
    </ScrapeProvider>
  );
}
