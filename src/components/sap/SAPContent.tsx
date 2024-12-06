import { motion } from "framer-motion";
import { Home, ShoppingBag, Utensils, Clock } from "lucide-react";

export const SAPContent = () => {
  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-6 text-secondary">Notre Service d'Aide à la Personne</h2>
          <p className="text-lg text-muted-foreground mb-4">
            Le SAP propose des prestations d'aide à domicile pour vous accompagner dans votre vie quotidienne et maintenir votre autonomie.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-accent rounded-2xl p-8"
          >
            <h3 className="text-xl font-semibold mb-4">Nos services</h3>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start">
                <Home className="w-5 h-5 mr-2 mt-1 text-primary" />
                <span>Entretien du logement et du linge</span>
              </li>
              <li className="flex items-start">
                <ShoppingBag className="w-5 h-5 mr-2 mt-1 text-primary" />
                <span>Courses et préparation des repas</span>
              </li>
              <li className="flex items-start">
                <Clock className="w-5 h-5 mr-2 mt-1 text-primary" />
                <span>Aide aux actes essentiels de la vie</span>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-accent rounded-2xl p-8"
          >
            <h3 className="text-xl font-semibold mb-4">Avantages</h3>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start">
                <Clock className="w-5 h-5 mr-2 mt-1 text-primary" />
                <span>Interventions 7j/7 selon vos besoins</span>
              </li>
              <li className="flex items-start">
                <Utensils className="w-5 h-5 mr-2 mt-1 text-primary" />
                <span>Personnel qualifié et expérimenté</span>
              </li>
              <li className="flex items-start">
                <Home className="w-5 h-5 mr-2 mt-1 text-primary" />
                <span>Maintien à domicile facilité</span>
              </li>
            </ul>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto bg-muted rounded-2xl p-8"
        >
          <h3 className="text-xl font-semibold mb-4 text-center">Informations pratiques</h3>
          <div className="space-y-4 text-muted-foreground">
            <p>
              Nos services sont éligibles aux aides financières (APA, PCH, caisses de retraite).
            </p>
            <p>
              Nous intervenons sur Oyonnax et les communes environnantes.
            </p>
            <p>
              50% de réduction d'impôt sur les prestations réalisées.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};