import Image from "next/image";
import { getMeal } from "../../../lib/meals";
import classes from "./page.module.css";

export default async function MealDetailsPage({ params }) {
  const meal = getMeal(params.slug);

  if (!meal) {
    return <p className={classes.notFound}>Meal not found.</p>;
  }

  return (
    <article className={classes.meal}>
      <header className={classes.header}>
        <div className={classes.image}>
          <Image
            src={meal.image}
            alt={meal.title}
            fill
          />
        </div>
        <div className={classes.headerText}>
          <h1>{meal.title}</h1>
          <p className={classes.creator}>by {meal.creator}</p>
        </div>
      </header>

      <section className={classes.details}>
        <p className={classes.summary}>{meal.summary}</p>
        <p className={classes.instructions}>{meal.instructions}</p>
      </section>
    </article>
  );
}
