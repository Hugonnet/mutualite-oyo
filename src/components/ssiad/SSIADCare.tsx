import { motion } from "framer-motion";

export const SSIADCare = () => {
  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-6">Notre engagement</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Le SSIAD de la Mutuelle Oyonnaxienne intervient sur prescription médicale pour assurer des soins d'hygiène et de confort aux personnes âgées de plus de 60 ans et aux personnes en situation de handicap.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-[#f596c7]/5 p-6 rounded-2xl"
            >
              <h3 className="text-xl font-semibold mb-4">Notre mission</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li>• Maintenir l'autonomie à domicile</li>
                <li>• Prévenir la perte d'autonomie</li>
                <li>• Éviter l'hospitalisation</li>
                <li>• Faciliter le retour à domicile après une hospitalisation</li>
                <li>• Accompagner en fin de vie</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-[#f596c7]/5 p-6 rounded-2xl"
            >
              <h3 className="text-xl font-semibold mb-4">Notre équipe</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li>• Infirmières coordinatrices</li>
                <li>• Aides-soignant(e)s diplômé(e)s</li>
                <li>• Personnel administratif</li>
                <li>• Collaboration avec les professionnels de santé libéraux</li>
              </ul>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};