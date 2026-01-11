import Link from "next/link";
import classes from "./not-found.module.css";

export default function RootNotFoundPage() {
  return (
    <main className={classes.main}>
      <h1>Page not found</h1>
      <p>The page you are looking for does not exist.</p>
      <Link href="/">Go back home</Link>
    </main>
  );
}
