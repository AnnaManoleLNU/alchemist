export interface IngredientType {
  name: string;
  sweetness: number;
  bitterness: number;
  acidity: number;
  poisonous: boolean;
}

interface Flower extends IngredientType { 
  
}

interface Herb extends IngredientType { }

interface Mushroom extends IngredientType {
  umami: number;
}

export const flowers: Flower[] = [
  { name: "rose", sweetness: 5, bitterness: 5, acidity: 1, poisonous: false },
  { name: "camomile", sweetness: 5, bitterness: 5, acidity: 1, poisonous: false },
  { name: "pansy", sweetness: 5, bitterness: 5, acidity: 1, poisonous: false }
]

export const herbs: Herb[] = [
  { name: "mint", sweetness: 5, bitterness: 5, acidity: 1, poisonous: false },
  { name: "rosemary", sweetness: 5, bitterness: 5, acidity: 1, poisonous: false },
  { name: "thyme", sweetness: 5, bitterness: 5, acidity: 1, poisonous: false }
]

export const mushrooms: Mushroom[] = [
  { name: "chanterelle", sweetness: 5, bitterness: 5, acidity: 1, poisonous: false, umami: 5 },
  { name: "porcini", sweetness: 5, bitterness: 5, acidity: 1, poisonous: false, umami: 5 },
  { name: "morel", sweetness: 5, bitterness: 5, acidity: 1, poisonous: false, umami: 5 }
]