import { motion } from "framer-motion";
import { Brain, Users, Clock, Heart } from "lucide-react";

export const ESADContent = () => {
  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-6 text-secondary">Notre Service ESAD</h2>
          <p className="text-lg text-muted-foreground mb-4">
            L'ESAD propose une prise en charge adaptée aux personnes atteintes de la maladie d'Alzheimer ou de troubles apparentés, à un stade léger ou modéré.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-accent rounded-2xl p-8"
          >
            <h3 className="text-xl font-semibold mb-4">Pour qui ?</h3>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start">
                <Brain className="w-5 h-5 mr-2 mt-1 text-primary" />
                <span>Personnes atteintes de la maladie d'Alzheimer</span>
              </li>
              <li className="flex items-start">
                <Users className="w-5 h-5 mr-2 mt-1 text-primary" />
                <span>Personnes souffrant de troubles apparentés</span>
              </li>
              <li className="flex items-start">
                <Heart className="w-5 h-5 mr-2 mt-1 text-primary" />
                <span>À un stade léger ou modéré de la maladie</span>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-accent rounded-2xl p-8"
          >
            <h3 className="text-xl font-semibold mb-4">Nos prestations</h3>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start">
                <Clock className="w-5 h-5 mr-2 mt-1 text-primary" />
                <span>12 à 15 séances de réhabilitation</span>
              </li>
              <li className="flex items-start">
                <Heart className="w-5 h-5 mr-2 mt-1 text-primary" />
                <span>Stimulation cognitive et sensorielle</span>
              </li>
              <li className="flex items-start">
                <Users className="w-5 h-5 mr-2 mt-1 text-primary" />
                <span>Accompagnement des aidants</span>
              </li>
            </ul>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto bg-muted rounded-2xl p-8"
        >
          <h3 className="text-xl font-semibold mb-4 text-center">Fonctionnement du service</h3>
          <div className="space-y-4 text-muted-foreground">
            <p>
              L'équipe est composée d'une ergothérapeute et d'assistants de soins en gérontologie qui interviennent à domicile.
            </p>
            <p>
              Les séances sont prises en charge à 100% par l'Assurance Maladie sur prescription médicale.
            </p>
            <p>
              Le service intervient sur les communes d'Oyonnax et ses environs.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};