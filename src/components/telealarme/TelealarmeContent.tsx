import { motion } from "framer-motion";
import { Bell, Shield, Clock, Heart, Phone, Users } from "lucide-react";

export const TelealarmeContent = () => {
  return (
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Description Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-6 text-secondary">
            Votre sécurité, notre priorité
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Notre service de téléalarme vous permet de rester autonome chez vous tout en ayant l'assurance d'être secouru rapidement en cas de besoin.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {[
            {
              icon: Bell,
              title: "Alerte immédiate",
              description: "Un simple bouton pour déclencher l'alarme en cas de besoin"
            },
            {
              icon: Shield,
              title: "Protection 24/7",
              description: "Une surveillance continue, jour et nuit, pour votre tranquillité"
            },
            {
              icon: Clock,
              title: "Intervention rapide",
              description: "Une équipe d'intervention mobilisée rapidement"
            },
            {
              icon: Heart,
              title: "Suivi personnalisé",
              description: "Un accompagnement adapté à vos besoins spécifiques"
            },
            {
              icon: Phone,
              title: "Contact permanent",
              description: "Une liaison directe avec notre centrale d'écoute"
            },
            {
              icon: Users,
              title: "Réseau de confiance",
              description: "Des intervenants professionnels et qualifiés"
            }
          ].map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <feature.icon className="w-12 h-12 text-[#e82b19] mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-secondary">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-[#e82b19] text-white p-8 rounded-lg text-center"
        >
          <h3 className="text-2xl font-bold mb-4">
            Besoin d'informations supplémentaires ?
          </h3>
          <p className="mb-6">
            Nos conseillers sont à votre disposition pour répondre à toutes vos questions
          </p>
          <a
            href="tel:0474778419"
            className="inline-flex items-center gap-2 bg-white text-[#e82b19] px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors"
          >
            <Phone className="w-5 h-5" />
            04 74 77 84 19
          </a>
        </motion.div>
      </div>
    </div>
  );
};