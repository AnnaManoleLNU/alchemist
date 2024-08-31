export interface IngredientType {
  name: string;
  sweetness: number;
  bitterness: number;
  acidity: number;
  poisonous: boolean;
  color: string;
}

interface Flower extends IngredientType {
}

interface Herb extends IngredientType {
}

interface Mushroom extends IngredientType {
  umami: number;
}

export const flowers: Flower[] = [
  { name: "rose", sweetness: 5, bitterness: 5, acidity: 1, poisonous: false, color: "red" },
  { name: "camomile", sweetness: 5, bitterness: 5, acidity: 1, poisonous: false, color: "yellow" },
  { name: "pansy", sweetness: 5, bitterness: 5, acidity: 1, poisonous: false, color: "purple" }
]

const defaultHerb: Omit<Herb, "name" | "bitterness" > = { sweetness: 5,  acidity: 1, poisonous: false, color: "green" }

export const herbs: Herb[] = [
  { ...defaultHerb, name: "basil", bitterness: 2 },
  { ...defaultHerb, name: "parsley", bitterness: 4 },
  { ...defaultHerb, name: "thyme", bitterness: 5 }
]

const defaultMushroom: Omit<Mushroom, "name"> = {
  sweetness: 5, bitterness: 5, acidity: 1, poisonous: false, color: "brown", umami: 5
}

export const mushrooms: Mushroom[] = [
  { name: "chanterelle", ...defaultMushroom },
  { name: "porcini", ...defaultMushroom },
  { name: "morel", ...defaultMushroom }
]