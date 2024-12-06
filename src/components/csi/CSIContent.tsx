import { motion } from "framer-motion";
import { Syringe, Stethoscope, Clock, Heart } from "lucide-react";

export const CSIContent = () => {
  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-6 text-secondary">Notre Centre de Soins Infirmiers</h2>
          <p className="text-lg text-muted-foreground mb-4">
            Le CSI assure des soins infirmiers sur prescription médicale, à domicile ou au centre, 7 jours sur 7.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-accent rounded-2xl p-8"
          >
            <h3 className="text-xl font-semibold mb-4">Nos soins</h3>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start">
                <Syringe className="w-5 h-5 mr-2 mt-1 text-primary" />
                <span>Injections et prélèvements</span>
              </li>
              <li className="flex items-start">
                <Heart className="w-5 h-5 mr-2 mt-1 text-primary" />
                <span>Pansements et soins post-opératoires</span>
              </li>
              <li className="flex items-start">
                <Stethoscope className="w-5 h-5 mr-2 mt-1 text-primary" />
                <span>Surveillance et suivi médical</span>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-accent rounded-2xl p-8"
          >
            <h3 className="text-xl font-semibold mb-4">Nos services</h3>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start">
                <Clock className="w-5 h-5 mr-2 mt-1 text-primary" />
                <span>Soins 7j/7 à domicile ou au centre</span>
              </li>
              <li className="flex items-start">
                <Heart className="w-5 h-5 mr-2 mt-1 text-primary" />
                <span>Équipe d'infirmiers diplômés</span>
              </li>
              <li className="flex items-start">
                <Stethoscope className="w-5 h-5 mr-2 mt-1 text-primary" />
                <span>Coordination avec les médecins traitants</span>
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
              Les soins sont pris en charge à 100% par l'Assurance Maladie sur prescription médicale.
            </p>
            <p>
              Le centre est ouvert du lundi au vendredi de 8h à 12h et de 14h à 18h.
            </p>
            <p>
              Les soins à domicile sont assurés 7j/7 sur Oyonnax et les communes environnantes.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};