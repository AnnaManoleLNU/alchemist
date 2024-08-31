import Chip from '@mui/material/Chip';

type IngredientProps = {
  name: string;
}

export default function Ingredient({name} : IngredientProps) {
  return (
    <Chip label={name} />
  )
}