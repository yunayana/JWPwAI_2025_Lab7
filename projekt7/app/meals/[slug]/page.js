export default function MealDetailsPage({ params }) {
  const { slug } = params;

  return (
    <main>
      <h1>Meal details</h1>
      <p>Wybrany meal: {slug}</p>
    </main>
  );
}
