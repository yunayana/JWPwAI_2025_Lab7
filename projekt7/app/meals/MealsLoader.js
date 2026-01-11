import MealsGrid from "../../components/meals/meals-grid";
import { getMeals } from "../../lib/meals";

export default async function MealsLoader() {
  await new Promise((resolve) => setTimeout(resolve, 2000));

  const meals = getMeals();

  return <MealsGrid meals={meals} />;
}
