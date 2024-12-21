import { motion } from "framer-motion";
import { Brain, Users, ClipboardCheck, Heart, HelpCircle, UserCheck, BadgeEuro, Home } from "lucide-react";

export const ESADContent = () => {
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
              Pour prodiguer des soins de réhabilitation aux personnes diagnostiquées atteintes d'une maladie d'Alzheimer ou d'une pathologie apparentée, à un stade léger à modéré de la maladie.
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
            <ul className="text-muted-foreground space-y-2">
              <li>• Deux infirmières coordinatrices (coordination et suivi des interventions)</li>
              <li>• Une psychomotricienne/ergothérapeute (élaboration du projet de soin et de sa mise en œuvre)</li>
              <li>• Plusieurs Assistants de Soins en Gérontologie (réalisation des soins d'accompagnement et de réhabilitation)</li>
            </ul>
          </motion.div>

          {/* Comment ? */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-accent rounded-2xl p-8"
          >
            <div className="flex items-center gap-3 mb-4">
              <ClipboardCheck className="w-6 h-6 text-[#f596c7]" />
              <h3 className="text-xl font-semibold">Comment ?</h3>
            </div>
            <p className="text-muted-foreground">
              Réalisation de 12 à 15 séances de soins personnalisés, déterminés suite à l'évaluation globale du patient à domicile par le biais d'activités thérapeutiques.
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
              <BadgeEuro className="w-6 h-6 text-[#f596c7]" />
              <h3 className="text-xl font-semibold">Aides financières</h3>
            </div>
            <p className="text-muted-foreground">
              Pris en charge intégralement par la sécurité sociale sur prescription médicale et avec une attestation de droits du régime obligatoire.
            </p>
          </motion.div>
        </div>

        {/* Services proposés */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-2xl font-bold mb-8">Services proposés</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <div className="p-4 rounded-lg bg-accent">
              <p className="text-sm text-muted-foreground">Stimulation des capacités cognitives, motrices et sensorielles</p>
            </div>
            <div className="p-4 rounded-lg bg-accent">
              <p className="text-sm text-muted-foreground">Réhabilitation sociale</p>
            </div>
            <div className="p-4 rounded-lg bg-accent">
              <p className="text-sm text-muted-foreground">Prévention des risques</p>
            </div>
            <div className="p-4 rounded-lg bg-accent">
              <p className="text-sm text-muted-foreground">Soutien et conseils aux aidants</p>
            </div>
            <div className="p-4 rounded-lg bg-accent">
              <p className="text-sm text-muted-foreground">Aménagement du logement</p>
            </div>
            <div className="p-4 rounded-lg bg-accent">
              <p className="text-sm text-muted-foreground">Relai avec les partenaires</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};