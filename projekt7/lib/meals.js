import sql from 'better-sqlite3';


const db = sql('meals.db');

export function getMeals() {
  const stmt = db.prepare('SELECT * FROM meals');
  const meals = stmt.all();
  return meals;
}
import { notFound } from "next/navigation";

export function getMeal(slug) {
  const stmt = db.prepare("SELECT * FROM meals WHERE slug = ?");
  const meal = stmt.get(slug);

  if (!meal) {
    notFound();
  }

  return meal;
}

//throw new Error("Simulated database error");

export function createMeal(meal) {
  const slug =
    meal.title.toLowerCase().replace(/\s+/g, "-") + "-" + Date.now();

  const stmt = db.prepare(`
    INSERT INTO meals (
      slug, title, image, summary, instructions, creator, creator_email
    )
    VALUES (
      @slug, @title, @image, @summary, @instructions, @creator, @creator_email
    )
  `);

  stmt.run({
    slug,
    title: meal.title,
    image: meal.image,
    summary: meal.summary,
    instructions: meal.instructions,
    creator: meal.creator,
    creator_email: meal.creator_email,
  });

  return slug;
}

export function deleteMeal(slug) {
  const stmt = db.prepare("DELETE FROM meals WHERE slug = ?");
  stmt.run(slug);
}