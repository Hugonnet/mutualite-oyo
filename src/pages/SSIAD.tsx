import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SSIADHero } from "@/components/ssiad/SSIADHero";
import { SSIADContent } from "@/components/ssiad/SSIADContent";

const SSIAD = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <SSIADHero />
      <SSIADContent />
      <Footer />
    </div>
  );
};

export default SSIAD;