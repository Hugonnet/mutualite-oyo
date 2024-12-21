import { motion } from "framer-motion";
import { Brain, Heart, Users, Clock } from "lucide-react";

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
          <h2 className="text-3xl font-bold mb-6 text-secondary">Notre Service E.S.A.D</h2>
          <p className="text-lg text-muted-foreground mb-4">
            L'ESAD propose des soins d'accompagnement et de réhabilitation à domicile pour les personnes atteintes de la maladie d'Alzheimer ou de troubles apparentés.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-[#fe9849]/10 rounded-2xl p-8"
          >
            <h3 className="text-xl font-semibold mb-4">Nos services</h3>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start">
                <Brain className="w-5 h-5 mr-2 mt-1 text-[#fe9849]" />
                <span>Stimulation cognitive et sensorielle</span>
              </li>
              <li className="flex items-start">
                <Heart className="w-5 h-5 mr-2 mt-1 text-[#fe9849]" />
                <span>Maintien de l'autonomie</span>
              </li>
              <li className="flex items-start">
                <Users className="w-5 h-5 mr-2 mt-1 text-[#fe9849]" />
                <span>Soutien aux aidants</span>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-[#fe9849]/10 rounded-2xl p-8"
          >
            <h3 className="text-xl font-semibold mb-4">Notre équipe</h3>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start">
                <Users className="w-5 h-5 mr-2 mt-1 text-[#fe9849]" />
                <span>Ergothérapeute et psychomotricien</span>
              </li>
              <li className="flex items-start">
                <Heart className="w-5 h-5 mr-2 mt-1 text-[#fe9849]" />
                <span>Assistant de soins en gérontologie</span>
              </li>
              <li className="flex items-start">
                <Brain className="w-5 h-5 mr-2 mt-1 text-[#fe9849]" />
                <span>Infirmière coordinatrice</span>
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
          <h3 className="text-xl font-semibold mb-4 text-center">Informations pratiques</h3>
          <div className="space-y-4 text-muted-foreground">
            <p>
              Les séances sont prises en charge à 100% par l'Assurance Maladie sur prescription médicale.
            </p>
            <p>
              15 séances sur 3 mois, renouvelables une fois par an.
            </p>
            <p>
              Intervention sur Oyonnax et les communes environnantes.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};