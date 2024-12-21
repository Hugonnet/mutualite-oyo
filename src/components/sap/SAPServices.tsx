import { motion } from "framer-motion";
import { Home, ShoppingBag, Clock } from "lucide-react";

export const SAPServices = () => {
  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-6 text-secondary">Nos prestations</h2>
          <p className="text-lg text-muted-foreground">
            Le SAP propose des prestations d'aide à domicile pour vous accompagner dans votre vie quotidienne et maintenir votre autonomie.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-[#FEC438]/10 rounded-2xl p-8"
          >
            <Home className="w-12 h-12 text-[#FEC438] mb-6" />
            <h3 className="text-xl font-semibold mb-4">Entretien du logement</h3>
            <p className="text-muted-foreground">
              Entretien courant du logement et du linge pour maintenir un environnement propre et agréable.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-[#FEC438]/10 rounded-2xl p-8"
          >
            <ShoppingBag className="w-12 h-12 text-[#FEC438] mb-6" />
            <h3 className="text-xl font-semibold mb-4">Courses et repas</h3>
            <p className="text-muted-foreground">
              Aide aux courses et à la préparation des repas selon vos habitudes alimentaires.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-[#FEC438]/10 rounded-2xl p-8"
          >
            <Clock className="w-12 h-12 text-[#FEC438] mb-6" />
            <h3 className="text-xl font-semibold mb-4">Aide quotidienne</h3>
            <p className="text-muted-foreground">
              Accompagnement dans les actes essentiels de la vie quotidienne.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};