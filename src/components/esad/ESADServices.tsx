import { motion } from "framer-motion";
import { Brain, Heart, Users } from "lucide-react";

export const ESADServices = () => {
  return (
    <div className="py-16 bg-[#fe9849]/5">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-6 text-secondary">Nos services</h2>
          <p className="text-lg text-muted-foreground">
            Une prise en charge personnalisée pour maintenir l'autonomie et améliorer la qualité de vie.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-white rounded-2xl p-8 shadow-sm"
          >
            <Brain className="w-12 h-12 text-[#fe9849] mb-6" />
            <h3 className="text-xl font-semibold mb-4">Stimulation cognitive</h3>
            <p className="text-muted-foreground">
              Exercices adaptés pour maintenir les capacités intellectuelles et la mémoire.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-2xl p-8 shadow-sm"
          >
            <Heart className="w-12 h-12 text-[#fe9849] mb-6" />
            <h3 className="text-xl font-semibold mb-4">Activités thérapeutiques</h3>
            <p className="text-muted-foreground">
              Activités adaptées pour maintenir l'autonomie dans les gestes du quotidien.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-white rounded-2xl p-8 shadow-sm"
          >
            <Users className="w-12 h-12 text-[#fe9849] mb-6" />
            <h3 className="text-xl font-semibold mb-4">Soutien aux aidants</h3>
            <p className="text-muted-foreground">
              Accompagnement et conseils pour les proches aidants.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};