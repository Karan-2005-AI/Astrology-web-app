import { Link } from "react-router-dom";

const GlowButton = ({
  to,
  children,
}) => {
  return (
    <Link
      to={to}
      className="
        inline-block
        px-8
        py-4
        rounded-xl
        bg-purple-600
        hover:bg-purple-700
        font-semibold
        transition
        shadow-lg
        hover:shadow-purple-500/40
      "
    >
      {children}
    </Link>
  );
};

export default GlowButton;