import Link from 'next/link';
import MealsGrid from '../../components/meals/meals-grid';
import { getMeals } from '../../lib/meals';
import layoutClasses from "../page.module.css";
import headerClasses from "./header.module.css";
import { Suspense } from "react";
import MealsLoader from "./MealsLoader";


export default function MealsPage() {
  return (
    <>
      <header className={headerClasses.header}>
        <div className={headerClasses.headerLeft}>
          <h1>
            Delicious vegan meals, created{" "}
            <span className={headerClasses.highlight}>by you</span>
          </h1>
          <p>
            Choose your favorite recipe and cook it yourself. It is easy and fun!
          </p>
        </div>

        <p className={headerClasses.cta}>
          <Link href="/meals/share">Share Your Favorite Recipe</Link>
        </p>
      </header>

      <main className={layoutClasses.main}>
        <Suspense
          fallback={
            <p className={layoutClasses.loading}>Fetching meals...</p>
          }
        >
          <MealsLoader />
        </Suspense>
      </main>
    </>
  );
}


