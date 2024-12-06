import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/home/HeroSection";
import ServicesSection from "@/components/home/ServicesSection";
import KeyFiguresSection from "@/components/home/KeyFiguresSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <ServicesSection />
      <KeyFiguresSection />
      <TestimonialsSection />
      <Footer />
    </div>
  );
};

export default Index;