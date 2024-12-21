import { motion } from "framer-motion";

interface KeyFigureProps {
  value: number;
  label: string;
  delay: number;
}

const KeyFigure = ({ value, label, delay }: KeyFigureProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      className="text-center"
    >
      <div className="text-6xl font-bold text-white mb-2">{value}</div>
      <p className="text-white/90">{label}</p>
    </motion.div>
  );
};

export default KeyFigure;