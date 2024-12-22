import { motion } from "framer-motion";
import { Calendar, Clock, Users, Heart } from "lucide-react";

const ADJContent = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Notre accueil de jour
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-[#5696d0]/10 flex items-center justify-center">
                  <Calendar className="w-6 h-6 text-[#5696d0]" />
                </div>
                <h3 className="text-xl font-semibold">Ouverture</h3>
              </div>
              <p className="text-gray-600">
                Du lundi au vendredi, de 9h à 17h
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-[#5696d0]/10 flex items-center justify-center">
                  <Users className="w-6 h-6 text-[#5696d0]" />
                </div>
                <h3 className="text-xl font-semibold">Capacité</h3>
              </div>
              <p className="text-gray-600">
                Accueil de 12 personnes par jour
              </p>
            </div>
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-6">
              Notre accueil de jour est un lieu de vie qui permet aux personnes âgées en perte d'autonomie de bénéficier d'un accompagnement personnalisé dans un cadre chaleureux et sécurisant.
            </p>
            <p className="text-gray-600 mb-6">
              Nous proposons des activités variées et adaptées aux capacités de chacun : ateliers mémoire, activités manuelles, gymnastique douce, sorties culturelles, etc.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ADJContent;