import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat" 
        style={{ 
          backgroundImage: "url('/lovable-uploads/ea229b57-ec57-4a23-b9ce-4fbc56b80606.png')",
        }} 
      />
      <div className="absolute inset-0 bg-black/10" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <span className="inline-block px-4 py-1 mb-6 text-sm font-medium rounded-full bg-primary/10 text-primary">
            Votre mutuelle de confiance à Oyonnax
          </span>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight text-white">
            Service de soins et d'accompagnement à domicile
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Depuis plus de 50 ans, nous accompagnons nos adhérents avec des solutions personnalisées et un service de proximité.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;