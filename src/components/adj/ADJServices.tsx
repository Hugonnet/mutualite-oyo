import { motion } from "framer-motion";
import { Brain, Heart, Users, Coffee, Music, Utensils } from "lucide-react";

const services = [
  {
    icon: Brain,
    title: "Stimulation cognitive",
    description: "Ateliers mémoire et jeux de société pour maintenir les capacités intellectuelles"
  },
  {
    icon: Heart,
    title: "Activités physiques",
    description: "Gymnastique douce et exercices adaptés pour maintenir l'autonomie"
  },
  {
    icon: Music,
    title: "Activités créatives",
    description: "Ateliers artistiques, musicaux et manuels pour favoriser l'expression"
  },
  {
    icon: Coffee,
    title: "Moments conviviaux",
    description: "Temps d'échange et de partage autour d'activités communes"
  },
  {
    icon: Users,
    title: "Lien social",
    description: "Activités de groupe pour maintenir les relations sociales"
  },
  {
    icon: Utensils,
    title: "Repas thérapeutiques",
    description: "Repas équilibrés pris en commun dans une ambiance conviviale"
  }
];

const ADJServices = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Nos prestations
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Des activités variées et adaptées pour maintenir l'autonomie et le bien-être
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-lg p-6"
            >
              <div className="w-12 h-12 rounded-full bg-[#5696d0]/10 flex items-center justify-center mb-4 mx-auto">
                <service.icon className="w-6 h-6 text-[#5696d0]" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ADJServices;