import { motion } from "framer-motion";

export const ESADHero = () => {
  return (
    <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat" 
        style={{ 
          backgroundImage: "url('/lovable-uploads/54856a56-0cfc-4d02-b8cd-e872c6cce609.png')",
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
          <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight text-white">
            Équipe Spécialisée Alzheimer
          </h1>
          <p className="text-lg md:text-xl text-gray-100 mb-8 max-w-2xl mx-auto">
            Maintenir l'indépendance et l'autonomie à domicile
          </p>
        </motion.div>
      </div>
    </section>
  );
};