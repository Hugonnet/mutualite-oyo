import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/home/HeroSection";
import ServicesSection from "@/components/home/ServicesSection";
import KeyFiguresSection from "@/components/home/KeyFiguresSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import { ContactForm } from "@/components/ContactForm";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <ServicesSection />
      <KeyFiguresSection />
      <TestimonialsSection />
      <section id="contact" className="py-20 bg-primary">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Nous contacter</h2>
            <p className="text-white/90">
              Nous sommes à votre écoute. N'hésitez pas à nous contacter pour toute question.
            </p>
          </div>
          <ContactForm />
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Index;