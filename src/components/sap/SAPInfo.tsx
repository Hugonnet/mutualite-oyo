import { motion } from "framer-motion";
import { Clock, Users, BadgeEuro } from "lucide-react";

export const SAPInfo = () => {
  return (
    <div className="py-16 bg-[#FEC438]/5">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl p-8 shadow-sm"
          >
            <Clock className="w-12 h-12 text-[#FEC438] mb-6" />
            <h3 className="text-xl font-semibold mb-4">Disponibilité</h3>
            <p className="text-muted-foreground">
              Interventions 7j/7 selon vos besoins, avec des horaires adaptés à votre rythme de vie.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl p-8 shadow-sm"
          >
            <Users className="w-12 h-12 text-[#FEC438] mb-6" />
            <h3 className="text-xl font-semibold mb-4">Personnel qualifié</h3>
            <p className="text-muted-foreground">
              Une équipe professionnelle, formée et expérimentée pour vous accompagner au quotidien.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl p-8 shadow-sm"
          >
            <BadgeEuro className="w-12 h-12 text-[#FEC438] mb-6" />
            <h3 className="text-xl font-semibold mb-4">Aides financières</h3>
            <p className="text-muted-foreground">
              Services éligibles aux aides (APA, PCH, caisses de retraite) et 50% de réduction d'impôt.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};