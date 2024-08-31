import Chip from "@mui/material/Chip";

type IngredientProps = {
  name: string;
  color: string;
};

const colorClasses: {[key: string]: string} = {
  red: "bg-red-400",
  yellow: "bg-yellow-400",
  purple: "bg-purple-400",
  green: "bg-green-400",
  brown: "bg-orange-800",
}

export default function Ingredient({ name, color }: IngredientProps) {
  const chipClass = colorClasses[color] || "bg-gray-400";
  return <Chip label={name} className={chipClass} />;
}
