import { motion } from "framer-motion";

const GlassCard = ({ children, className = "" }) => {
  return (
    <motion.div
      whileHover={{
        y: -8,
        scale: 1.02,
      }}
      transition={{ duration: 0.25 }}
      className={`
        rounded-2xl
        border
        border-white/10
        bg-white/5
        backdrop-blur-xl
        shadow-lg
        hover:border-purple-500
        hover:shadow-purple-500/20
        transition-all
        duration-300
        ${className}
      `}
    >
      {children}
    </motion.div>
  );
};

export default GlassCard;