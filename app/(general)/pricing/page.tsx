import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricung Page",
  description: "Esta es la pagina de nuestros precios",
  keywords: ["Paquete basico", "Paquete Popular"],
};
export default function PricingPage() {
  return (
    <>
      <span className="text-7xl">Pricing Page</span>
    </>
  );
}
