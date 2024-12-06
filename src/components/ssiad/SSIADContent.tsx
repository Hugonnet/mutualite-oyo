import { motion } from "framer-motion";
import { Clock, Users, ClipboardCheck, Heart } from "lucide-react";

export const SSIADContent = () => {
  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Introduction */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-6 text-secondary">Notre Service de Soins Infirmiers À Domicile</h2>
          <p className="text-lg text-muted-foreground mb-4">
            Le SSIAD de la Mutuelle Oyonnaxienne assure, sur prescription médicale, des prestations de soins infirmiers sous la forme de soins techniques ou de soins de base et relationnels.
          </p>
        </motion.div>

        {/* Services Grid */}
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
                <Users className="w-5 h-5 mr-2 mt-1 text-primary" />
                <span>Personnes âgées de 60 ans et plus, malades ou dépendantes</span>
              </li>
              <li className="flex items-start">
                <Heart className="w-5 h-5 mr-2 mt-1 text-primary" />
                <span>Personnes adultes de moins de 60 ans présentant un handicap</span>
              </li>
              <li className="flex items-start">
                <ClipboardCheck className="w-5 h-5 mr-2 mt-1 text-primary" />
                <span>Personnes adultes de moins de 60 ans atteintes de pathologies chroniques</span>
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
                <span>Soins d'hygiène et de confort</span>
              </li>
              <li className="flex items-start">
                <Heart className="w-5 h-5 mr-2 mt-1 text-primary" />
                <span>Aide à l'habillage et au déshabillage</span>
              </li>
              <li className="flex items-start">
                <ClipboardCheck className="w-5 h-5 mr-2 mt-1 text-primary" />
                <span>Prévention des risques (escarres, chutes, déshydratation)</span>
              </li>
              <li className="flex items-start">
                <Users className="w-5 h-5 mr-2 mt-1 text-primary" />
                <span>Surveillance de l'état général et coordination avec les autres intervenants</span>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Additional Information */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto bg-muted rounded-2xl p-8"
        >
          <h3 className="text-xl font-semibold mb-4 text-center">Fonctionnement du service</h3>
          <div className="space-y-4 text-muted-foreground">
            <p>
              Les interventions sont assurées par une équipe d'aides-soignants(es) diplômés(es) sous la responsabilité d'infirmiers(es) coordinateurs(trices).
            </p>
            <p>
              Les soins sont pris en charge à 100% par l'Assurance Maladie, sur prescription médicale.
            </p>
            <p>
              Le service intervient 7 jours sur 7, y compris les jours fériés, sur les communes d'Oyonnax, Arbent, Bellignat, Dortan, Géovreisset, Groissiat, Martignat et Montréal-La-Cluse.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};