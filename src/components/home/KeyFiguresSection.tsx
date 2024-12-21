import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import KeyFigure from "./KeyFigure";

const KeyFiguresSection = () => {
  const [counts, setCounts] = useState({
    years: 0,
    beneficiaries: 0,
    employees: 0,
    satisfaction: 0,
  });

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const targetCounts = {
    years: 80,
    beneficiaries: 450,
    employees: 85,
    satisfaction: 98,
  };

  useEffect(() => {
    if (!isInView) return;

    const duration = 2000;
    const steps = 50;
    const interval = duration / steps;

    const incrementCounts = (step: number) => {
      setCounts({
        years: Math.min(Math.round((targetCounts.years * step) / steps), targetCounts.years),
        beneficiaries: Math.min(Math.round((targetCounts.beneficiaries * step) / steps), targetCounts.beneficiaries),
        employees: Math.min(Math.round((targetCounts.employees * step) / steps), targetCounts.employees),
        satisfaction: Math.min(Math.round((targetCounts.satisfaction * step) / steps), targetCounts.satisfaction),
      });
    };

    let currentStep = 0;
    const timer = setInterval(() => {
      currentStep++;
      incrementCounts(currentStep);
      if (currentStep >= steps) {
        clearInterval(timer);
      }
    }, interval);

    return () => clearInterval(timer);
  }, [isInView]);

  return (
    <section ref={ref} className="py-24 bg-primary">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Nos chiffres clés</h2>
          <p className="text-lg text-white/90 max-w-2xl mx-auto">
            La Mutualité Oyonnaxienne en quelques chiffres
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <KeyFigure value={counts.years} label="années d'expérience" delay={0.2} />
          <KeyFigure value={counts.beneficiaries} label="bénéficiaires" delay={0.4} />
          <KeyFigure value={counts.employees} label="salariés" delay={0.6} />
          <KeyFigure value={counts.satisfaction} label="de satisfaction" delay={0.8} />
        </div>
      </div>
    </section>
  );
};

export default KeyFiguresSection;