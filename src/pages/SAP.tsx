import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SAPHero } from "@/components/sap/SAPHero";
import { SAPContent } from "@/components/sap/SAPContent";

const SAP = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <SAPHero />
      <SAPContent />
      <Footer />
    </div>
  );
};

export default SAP;