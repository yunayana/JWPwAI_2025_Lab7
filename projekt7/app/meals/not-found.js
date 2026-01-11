import Link from "next/link";
import classes from "./meals-not-found.module.css";

export default function MealsNotFoundPage() {
  return (
    <main className={classes.main}>
      <h1>Meal not found</h1>
      <p>We could not find the vegan meal you were looking for.</p>
      <div>
        <Link href="/meals">Back to all meals</Link>
      </div>
    </main>
  );
}
