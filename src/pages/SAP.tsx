import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SAPHero } from "@/components/sap/SAPHero";
import { SAPServices } from "@/components/sap/SAPServices";
import { SAPInfo } from "@/components/sap/SAPInfo";

const SAP = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <SAPHero />
      <SAPServices />
      <SAPInfo />
      <Footer />
    </div>
  );
};

export default SAP;