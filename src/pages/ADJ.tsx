import { Helmet } from "react-helmet";
import ADJHero from "@/components/adj/ADJHero";
import ADJContent from "@/components/adj/ADJContent";
import ADJServices from "@/components/adj/ADJServices";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const ADJ = () => {
  return (
    <>
      <Helmet>
        <title>Accueil De Jour | Mutuelle Oyonnaxienne</title>
        <meta 
          name="description" 
          content="Notre service d'Accueil De Jour propose un accompagnement personnalisé pour les personnes âgées en perte d'autonomie, dans un cadre chaleureux et sécurisant." 
        />
      </Helmet>
      <Header />
      <main>
        <ADJHero />
        <ADJContent />
        <ADJServices />
      </main>
      <Footer />
    </>
  );
};

export default ADJ;