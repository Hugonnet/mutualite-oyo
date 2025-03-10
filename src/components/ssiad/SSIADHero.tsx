import { motion } from "framer-motion";

export const SSIADHero = () => {
  return (
    <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat" 
        style={{ 
          backgroundImage: "url('/lovable-uploads/824d7ea1-a1a1-4590-972e-0115fd5d568c.png')",
        }} 
      />
      <div className="absolute inset-0 bg-[#f596c7]/80" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight text-white">
            Service de Soins Infirmiers À Domicile
          </h1>
          <p className="text-lg md:text-xl text-gray-100 mb-8 max-w-2xl mx-auto">
            Une équipe de professionnels à votre écoute pour des soins personnalisés
          </p>
        </motion.div>
      </div>
    </section>
  );
};