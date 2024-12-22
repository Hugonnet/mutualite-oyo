import { motion } from "framer-motion";

export const MediationHero = () => {
  return (
    <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat" 
        style={{ 
          backgroundImage: "url('/lovable-uploads/6ffd97d7-394a-48c6-b163-161b739587a1.png')",
        }} 
      />
      <div className="absolute inset-0 bg-[#8CA892]/80" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight text-white">
            Médiation Animale
          </h1>
          <p className="text-lg md:text-xl text-gray-100 mb-8 max-w-2xl mx-auto">
            Une approche thérapeutique unique qui favorise le bien-être par l'interaction avec les animaux
          </p>
        </motion.div>
      </div>
    </section>
  );
};