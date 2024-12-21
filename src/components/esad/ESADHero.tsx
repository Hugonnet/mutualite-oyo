import { motion } from "framer-motion";

export const ESADHero = () => {
  return (
    <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat" 
        style={{ 
          backgroundImage: "url('/lovable-uploads/824d7ea1-a1a1-4590-972e-0115fd5d568c.png')",
        }} 
      />
      <div className="absolute inset-0" style={{ backgroundColor: "rgba(254, 152, 73, 0.8)" }} />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <span className="inline-block px-4 py-1 mb-6 text-sm font-medium rounded-full bg-white/20 text-white">
            Équipe Spécialisée Alzheimer à Domicile
          </span>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight text-white">
            E.S.A.D
          </h1>
          <p className="text-lg md:text-xl text-white mb-8 max-w-2xl mx-auto">
            Un accompagnement spécialisé pour les personnes atteintes de la maladie d'Alzheimer
          </p>
        </motion.div>
      </div>
    </section>
  );
};