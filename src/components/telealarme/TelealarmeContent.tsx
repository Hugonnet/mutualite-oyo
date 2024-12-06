import { motion } from "framer-motion";
import { Clock, Shield, Phone, Heart } from "lucide-react";

export const TelealarmeContent = () => {
  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-6 text-secondary">Notre Service de Téléalarme</h2>
          <p className="text-lg text-muted-foreground mb-4">
            La téléalarme est un service qui permet de rester à domicile en toute sécurité grâce à un système d'assistance disponible 24h/24 et 7j/7.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-accent rounded-2xl p-8"
          >
            <h3 className="text-xl font-semibold mb-4">Avantages</h3>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start">
                <Clock className="w-5 h-5 mr-2 mt-1 text-primary" />
                <span>Assistance 24h/24 et 7j/7</span>
              </li>
              <li className="flex items-start">
                <Shield className="w-5 h-5 mr-2 mt-1 text-primary" />
                <span>Sécurité et tranquillité d'esprit</span>
              </li>
              <li className="flex items-start">
                <Phone className="w-5 h-5 mr-2 mt-1 text-primary" />
                <span>Contact immédiat avec nos équipes</span>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-accent rounded-2xl p-8"
          >
            <h3 className="text-xl font-semibold mb-4">Fonctionnement</h3>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start">
                <Heart className="w-5 h-5 mr-2 mt-1 text-primary" />
                <span>Un médaillon ou bracelet d'alerte</span>
              </li>
              <li className="flex items-start">
                <Phone className="w-5 h-5 mr-2 mt-1 text-primary" />
                <span>Un transmetteur relié à une centrale d'écoute</span>
              </li>
              <li className="flex items-start">
                <Shield className="w-5 h-5 mr-2 mt-1 text-primary" />
                <span>Intervention rapide en cas de besoin</span>
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
          <h3 className="text-xl font-semibold mb-4 text-center">Installation et tarifs</h3>
          <div className="space-y-4 text-muted-foreground">
            <p>
              L'installation est simple et rapide, réalisée par nos techniciens qualifiés.
            </p>
            <p>
              Le service est disponible à partir de 30€ par mois, avec possibilité d'aide financière selon votre situation.
            </p>
            <p>
              Le service est disponible sur Oyonnax et les communes environnantes.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};