import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { TelealarmeHero } from "@/components/telealarme/TelealarmeHero";
import { TelealarmeContent } from "@/components/telealarme/TelealarmeContent";

const Telealarme = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <TelealarmeHero />
      <TelealarmeContent />
      <Footer />
    </div>
  );
};

export default Telealarme;