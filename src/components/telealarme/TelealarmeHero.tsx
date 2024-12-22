import { motion } from "framer-motion";
import { Bell } from "lucide-react";

export const TelealarmeHero = () => {
  return (
    <section className="relative bg-[#e82b19] text-white py-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex-1"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Service de Téléalarme
            </h1>
            <p className="text-lg md:text-xl mb-8 text-white/90">
              Une solution de sécurité et d'assistance 24h/24 et 7j/7 pour le maintien à domicile en toute sérénité.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex-1 flex justify-center"
          >
            <div className="w-32 h-32 md:w-48 md:h-48 bg-white rounded-full flex items-center justify-center">
              <Bell className="w-16 h-16 md:w-24 md:h-24 text-[#e82b19]" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};