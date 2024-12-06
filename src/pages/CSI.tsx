import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { CSIHero } from "@/components/csi/CSIHero";
import { CSIContent } from "@/components/csi/CSIContent";

const CSI = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <CSIHero />
      <CSIContent />
      <Footer />
    </div>
  );
};

export default CSI;