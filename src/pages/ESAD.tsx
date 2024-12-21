import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ESADHero } from "@/components/esad/ESADHero";
import { ESADServices } from "@/components/esad/ESADServices";
import { ESADContent } from "@/components/esad/ESADContent";

const ESAD = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <ESADHero />
      <ESADServices />
      <ESADContent />
      <Footer />
    </div>
  );
};

export default ESAD;