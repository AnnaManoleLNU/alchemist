import { flowers, herbs, mushrooms } from "../data";
import Ingredient from "./Ingredient";

export default function IngredientList() {
  return (
    <div >
      <div className="space-x-4 mb-3">
        {flowers.map((flower, index) => (
          <Ingredient key={index} name={flower.name}></Ingredient>
        ))}
      </div>

      <div className="space-x-4 mb-3">
        {mushrooms.map((mushroom, index) => (
          <Ingredient key={index} name={mushroom.name}></Ingredient>
        ))}
      </div>

      <div className="space-x-4 mb-3">
        {herbs.map((herb, index) => (<Ingredient key={index} name={herb.name}></Ingredient>))}
      </div>
    </div>
  );
}
