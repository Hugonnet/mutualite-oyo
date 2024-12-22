import { motion } from "framer-motion";

export const MediationContent = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <div className="prose prose-lg mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">Notre approche</h2>
            <p className="text-muted-foreground mb-6">
              La médiation animale est une approche thérapeutique qui utilise la présence d'animaux spécialement sélectionnés et entraînés pour améliorer le bien-être physique, social, émotionnel et cognitif des personnes.
            </p>
            <p className="text-muted-foreground mb-6">
              Nos séances sont adaptées aux besoins spécifiques de chaque participant et peuvent être réalisées en individuel ou en groupe.
            </p>
            
            <div className="bg-[#fdfcfb] p-6 rounded-2xl mt-8">
              <h3 className="text-xl font-semibold mb-4">Bénéfices de la médiation animale</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li>• Réduction du stress et de l'anxiété</li>
                <li>• Amélioration de la motricité</li>
                <li>• Développement de la confiance en soi</li>
                <li>• Stimulation de la mémoire</li>
                <li>• Favorisation des interactions sociales</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};