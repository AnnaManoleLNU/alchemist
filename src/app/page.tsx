import IngredientList from "./components/IngredientList";
import { flowers, herbs, mushrooms } from "./data";

export default function Home() {
  return (
    <div>
      <IngredientList ingredientType={flowers} />
      <IngredientList ingredientType={herbs} />
      <IngredientList ingredientType={mushrooms} />
    </div>
  );
}
