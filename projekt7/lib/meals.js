import sql from 'better-sqlite3';

const db = sql('meals.db');

export function getMeals() {
  const stmt = db.prepare('SELECT * FROM meals');
  const meals = stmt.all();
  return meals;
}
export function getMeal(slug) {
  const stmt = db.prepare('SELECT * FROM meals WHERE slug = ?');
  const meal = stmt.get(slug);
  return meal;
}

