import Link from "next/link";
import classes from "./page.module.css";
import ImageSlideshow from "@/components/images/image-slideshow";


export default function HomePage() {
  return (
    <>
      <header className={classes.header}>
        <div className={classes.slideshow}>
          <ImageSlideshow />
        </div>

        <div>
          <div className={classes.hero}>
            <h1>GreenLevel Food for Plant Lovers</h1>
            <p>Discover colorful vegan dishes packed with flavor and energy.</p>
          </div>
          <div className={classes.cta}>
            <Link href="/community">Join Vegan Community</Link>
            <Link href="/meals">Explore Vegan Meals</Link>
          </div>
        </div>
      </header>

      <main>
        <section className={classes.section}>
          <h2>How it works</h2>
          <p>
            GreenLevel Food lets you browse and share your favorite plant-based
            recipes with other vegans.
          </p>
          <p>
            Save ideas for later, cook at home and rate meals from the community.
          </p>
        </section>

        <section className={classes.section}>
          <h2>Why GreenLevel Food?</h2>
          <p>
            All recipes are 100% vegan, focused on seasonal ingredients and simple
            preparation.
          </p>
          <p>
            Build your own cookbook and inspire others with your broccoli-powered
            creations.
          </p>
        </section>

      </main>
    </>
  );
}
