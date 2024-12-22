import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { MediationHero } from "@/components/mediation/MediationHero";
import { MediationServices } from "@/components/mediation/MediationServices";
import { MediationContent } from "@/components/mediation/MediationContent";

const MediationAnimale = () => {
  return (
    <>
      <Helmet>
        <title>Médiation Animale | Mutuelle Oyonnaxienne</title>
        <meta 
          name="description" 
          content="Découvrez notre service de médiation animale, une approche thérapeutique unique qui favorise le bien-être par l'interaction avec les animaux." 
        />
      </Helmet>
      <div className="min-h-screen bg-[#F2FCE2]">
        <Header />
        <main>
          <MediationHero />
          <MediationServices />
          <MediationContent />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default MediationAnimale;