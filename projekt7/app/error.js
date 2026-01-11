"use client";

import classes from "./error.module.css";

export default function GlobalError({ error, reset }) {
  return (
    <main className={classes.body}>
      <div className={classes.box}>
        <h1>Something went wrong</h1>
        <p>{error.message}</p>
        <button onClick={reset}>Try again</button>
      </div>
    </main>
  );
}
