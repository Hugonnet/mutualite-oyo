import { motion } from "framer-motion";

export const SAPHero = () => {
  return (
    <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat" 
        style={{ 
          backgroundImage: "url('/lovable-uploads/ea229b57-ec57-4a23-b9ce-4fbc56b80606.png')",
        }} 
      />
      <div className="absolute inset-0 bg-black/60" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <span className="inline-block px-4 py-1 mb-6 text-sm font-medium rounded-full bg-primary/20 text-primary">
            Service d'Aide à la Personne
          </span>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight text-white">
            S.A.P
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Un accompagnement personnalisé pour votre quotidien
          </p>
        </motion.div>
      </div>
    </section>
  );
};