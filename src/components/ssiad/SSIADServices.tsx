import { motion } from "framer-motion";
import { Users, ClipboardCheck, Heart, HelpCircle, UserCheck, Stethoscope } from "lucide-react";

export const SSIADServices = () => {
  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Pourquoi ? */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-[#f596c7]/10 rounded-2xl p-8"
          >
            <div className="flex items-center gap-3 mb-4">
              <HelpCircle className="w-6 h-6 text-[#f596c7]" />
              <h3 className="text-xl font-semibold">Pourquoi ?</h3>
            </div>
            <p className="text-muted-foreground">
              Prodiguer aux patients âgés de plus de 60 ans et/ou en situation de handicap, des soins d'hygiène et de confort nécessaires au mieux-être à domicile.
            </p>
          </motion.div>

          {/* Par qui ? */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-[#f596c7]/10 rounded-2xl p-8"
          >
            <div className="flex items-center gap-3 mb-4">
              <UserCheck className="w-6 h-6 text-[#f596c7]" />
              <h3 className="text-xl font-semibold">Par qui ?</h3>
            </div>
            <p className="text-muted-foreground">
              Une évaluation des besoins est réalisée à domicile par une infirmière coordinatrice afin d'établir un plan de soins personnalisé.
            </p>
          </motion.div>

          {/* Comment ? */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-[#f596c7]/10 rounded-2xl p-8"
          >
            <div className="flex items-center gap-3 mb-4">
              <Stethoscope className="w-6 h-6 text-[#f596c7]" />
              <h3 className="text-xl font-semibold">Comment ?</h3>
            </div>
            <p className="text-muted-foreground">
              Les interventions sont réalisées par une équipe d'aides-soignants supervisés par des infirmières coordinatrices.
            </p>
          </motion.div>

          {/* Conditions */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-[#f596c7]/10 rounded-2xl p-8"
          >
            <div className="flex items-center gap-3 mb-4">
              <ClipboardCheck className="w-6 h-6 text-[#f596c7]" />
              <h3 className="text-xl font-semibold">Conditions</h3>
            </div>
            <p className="text-muted-foreground">
              Sur prescription médicale et avec une attestation de droits du régime obligatoire à jour.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};