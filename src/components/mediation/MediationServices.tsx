import { motion } from "framer-motion";
import { Heart, Users, Smile, Star } from "lucide-react";

export const MediationServices = () => {
  const services = [
    {
      icon: Heart,
      title: "Bien-être émotionnel",
      description: "Réduction du stress et de l'anxiété grâce au contact apaisant avec les animaux"
    },
    {
      icon: Users,
      title: "Interaction sociale",
      description: "Développement des compétences sociales et de la communication"
    },
    {
      icon: Smile,
      title: "Stimulation sensorielle",
      description: "Expériences tactiles et sensorielles enrichissantes"
    },
    {
      icon: Star,
      title: "Motivation",
      description: "Encouragement à la participation et à l'engagement dans les activités"
    }
  ];

  return (
    <div className="py-16 bg-[#fdfcfb]">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-6 text-secondary">Nos prestations</h2>
          <p className="text-lg text-muted-foreground">
            La médiation animale propose des interventions thérapeutiques pour améliorer la qualité de vie et favoriser le développement personnel.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-8 shadow-sm"
            >
              <service.icon className="w-12 h-12 text-[#8CA892] mb-6" />
              <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
              <p className="text-muted-foreground">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};