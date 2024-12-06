import { motion } from "framer-motion";

const KeyFiguresSection = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Chiffres clés</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Notre impact en quelques chiffres
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">50+</div>
            <div className="text-muted-foreground">Années d'expérience</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">1000+</div>
            <div className="text-muted-foreground">Bénéficiaires accompagnés</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">80+</div>
            <div className="text-muted-foreground">Professionnels dévoués</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">24/7</div>
            <div className="text-muted-foreground">Service disponible</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KeyFiguresSection;