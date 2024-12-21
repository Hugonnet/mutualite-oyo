import { motion } from "framer-motion";
import { Users, ClipboardCheck, Heart, HelpCircle, UserCheck, Stethoscope, BadgeEuro } from "lucide-react";

export const SSIADContent = () => {
  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Pourquoi ? */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-accent rounded-2xl p-8"
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
            className="bg-accent rounded-2xl p-8"
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
            className="bg-accent rounded-2xl p-8"
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
            className="bg-accent rounded-2xl p-8"
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

        {/* Aides financières */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto bg-accent rounded-2xl p-8 mb-16"
        >
          <div className="flex items-center gap-3 mb-4">
            <BadgeEuro className="w-6 h-6 text-[#f596c7]" />
            <h3 className="text-xl font-semibold">Aides financières</h3>
          </div>
          <p className="text-muted-foreground">
            Prise en charge intégrale par la sécurité sociale.
          </p>
        </motion.div>

        {/* Accompagnement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-2xl font-bold mb-8">Accompagnement aux gestes de la vie quotidienne</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="p-4 rounded-lg bg-accent">
              <p className="text-sm text-muted-foreground">Encourage l'autonomie</p>
            </div>
            <div className="p-4 rounded-lg bg-accent">
              <p className="text-sm text-muted-foreground">Aide à la prise de traitement</p>
            </div>
            <div className="p-4 rounded-lg bg-accent">
              <p className="text-sm text-muted-foreground">Écoute et soutiens</p>
            </div>
            <div className="p-4 rounded-lg bg-accent">
              <p className="text-sm text-muted-foreground">Aide au lever/coucher</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};