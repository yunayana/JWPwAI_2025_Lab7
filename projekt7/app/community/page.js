import classes from "./page.module.css";

export default function CommunityPage() {
  return (
    <main className={classes.main}>
      <section className={classes.card}>
        <h1>Vegan Foodies Community</h1>
        <p>
          Connect with other plant lovers, share your favorite recipes and get
          inspired by new vegan ideas.
        </p>
        <p>
          This is a demo community space for GreenLevel Food – feel free to
          imagine your future broccoli-powered friends here.
        </p>
      </section>
    </main>
  );
}
