// Usuwamy nawiasy klamrowe i nadajemy importowi dowolną nazwę, np. LandingPage
import LandingPage from "@/components/landing-page";

export default function Home() {
  return (
    <main>
      {/* Używamy tej samej nazwy, której użyliśmy w imporcie */}
      <LandingPage />
    </main>
  );
}