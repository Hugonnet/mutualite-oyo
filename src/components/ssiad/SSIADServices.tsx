import { motion } from "framer-motion";
import { Heart, Users, Clock, Shield } from "lucide-react";

export const SSIADServices = () => {
  return (
    <div className="py-16 bg-[#f596c7]/5">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-6">Nos services</h2>
          <p className="text-lg text-muted-foreground">
            Des soins adaptés à vos besoins, dispensés par une équipe qualifiée
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              icon: Heart,
              title: "Soins d'hygiène",
              description: "Toilette, habillage, aide à la mobilité"
            },
            {
              icon: Users,
              title: "Accompagnement",
              description: "Soutien psychologique et relationnel"
            },
            {
              icon: Clock,
              title: "Soins infirmiers",
              description: "Pansements, injections, surveillance"
            },
            {
              icon: Shield,
              title: "Prévention",
              description: "Évaluation et suivi personnalisé"
            }
          ].map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white p-6 rounded-2xl shadow-sm"
            >
              <service.icon className="w-12 h-12 text-[#f596c7] mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-center">{service.title}</h3>
              <p className="text-muted-foreground text-center">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};