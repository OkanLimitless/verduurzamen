export default function SchemaLocalBusiness() {
  const data = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Verduurzaam Nederland",
    telephone: "+3185XXXXXXX",
    areaServed: "NL",
    url: "https://www.verduurzaam-nederland.nl",
    sameAs: [],
    openingHours: "Mo-Fr 09:00-17:00",
    address: { "@type": "PostalAddress", addressCountry: "NL" },
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}