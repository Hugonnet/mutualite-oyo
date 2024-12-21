import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SSIADHero } from "@/components/ssiad/SSIADHero";
import { SSIADServices } from "@/components/ssiad/SSIADServices";
import { SSIADCare } from "@/components/ssiad/SSIADCare";
import { SSIADContact } from "@/components/ssiad/SSIADContact";

const SSIAD = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <SSIADHero />
      <SSIADServices />
      <SSIADCare />
      <SSIADContact />
      <Footer />
    </div>
  );
};

export default SSIAD;