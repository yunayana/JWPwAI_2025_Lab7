import Image from "next/image";
import { redirect } from "next/navigation";
import { getMeal, deleteMeal } from "../../../lib/meals";
import classes from "./page.module.css";

async function deleteMealAction(formData) {
  "use server";

  const slug = formData.get("slug");
  if (!slug) {
    throw new Error("Missing meal slug.");
  }

  deleteMeal(slug);
  redirect("/meals");
}

export default async function MealDetailsPage({ params }) {
  const meal = getMeal(params.mealSlug || params.slug);

  return (
    <main className={classes.main}>
      <header className={classes.header}>
        <div className={classes.image}>
          <Image src={meal.image} alt={meal.title} fill />
        </div>
        <div className={classes.headerText}>
          <h1>{meal.title}</h1>
          <p>by {meal.creator}</p>
          <p className={classes.summary}>{meal.summary}</p>
        </div>
      </header>

      <section className={classes.instructions}>
        <h2>Instructions</h2>
        <p>{meal.instructions}</p>
      </section>

      <form action={deleteMealAction} className={classes.deleteForm}>
        <input type="hidden" name="slug" value={meal.slug} />
        <button type="submit" className={classes.deleteButton}>
          Delete this meal
        </button>
      </form>
    </main>
  );
}
