import { IngredientType } from "../data";
import Ingredient from "./Ingredient";

type IngredientListProps = {
  ingredientType: IngredientType[];
};

export default function IngredientList({
  ingredientType,
}: IngredientListProps) {
  return (
    <div className="space-x-4 mb-3">
      {ingredientType.map((ingredient: IngredientType, index: number) => (
        <Ingredient
          key={index}
          name={ingredient.name}
          color={ingredient.color}
        ></Ingredient>
      ))}
    </div>
  );
}
