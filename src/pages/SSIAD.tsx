import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SSIADHero } from "@/components/ssiad/SSIADHero";
import { SSIADContent } from "@/components/ssiad/SSIADContent";
import { SSIADContact } from "@/components/ssiad/SSIADContact";

const SSIAD = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <SSIADHero />
      <SSIADContent />
      <SSIADContact />
      <Footer />
    </div>
  );
};

export default SSIAD;