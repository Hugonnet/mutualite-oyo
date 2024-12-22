import { motion } from "framer-motion";

const ADJHero = () => {
  return (
    <section className="relative bg-[#5696d0] text-white pt-32 pb-16 md:pt-40 md:pb-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Accueil De Jour
          </h1>
          <p className="text-lg md:text-xl opacity-90 mb-8">
            Un lieu d'accueil chaleureux et stimulant pour les personnes âgées en perte d'autonomie
          </p>
        </motion.div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
};

export default ADJHero;