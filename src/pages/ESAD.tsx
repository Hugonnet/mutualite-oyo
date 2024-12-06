import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ESADHero } from "@/components/esad/ESADHero";
import { ESADContent } from "@/components/esad/ESADContent";

const ESAD = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <ESADHero />
      <ESADContent />
      <Footer />
    </div>
  );
};

export default ESAD;