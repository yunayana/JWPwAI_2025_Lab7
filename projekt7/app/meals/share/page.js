import { redirect } from "next/navigation";
import classes from "./page.module.css";
import { createMeal } from "../../../lib/meals";

async function shareMeal(formData) {
  "use server";

  const creator = formData.get("name");
  const creatorEmail = formData.get("email");
  const title = formData.get("title");
  const summary = formData.get("summary");
  const instructions = formData.get("instructions");
  const file = formData.get("image"); 

  if (!creator || !creatorEmail || !title || !summary || !instructions) {
    throw new Error("Please fill in all fields.");
  }

  let imagePath = "/images/buddha-bowl.jpg";

  if (file && typeof file === "object") {
    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);
    const filename = `${Date.now()}-${file.name}`;

    const fs = await import("fs");
    const path = await import("path");

    const uploadDir = path.join(process.cwd(), "public", "uploads");
    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir, { recursive: true });
    }

    const filePath = path.join(uploadDir, filename);
    fs.writeFileSync(filePath, buffer);

    imagePath = `/uploads/${filename}`;
  }

  const slug = createMeal({
    title,
    summary,
    instructions,
    creator,
    creator_email: creatorEmail,
    image: imagePath,
  });

  redirect(`/meals/${slug}`);
}

export default function ShareMealPage() {
  return (
    <>
      <header className={classes.header}>
        <h1>
          Share your <span className={classes.highlight}>favorite meal</span>
        </h1>
        <p>Or any other meal you feel needs sharing!</p>
      </header>
      <main className={classes.main}>
        <form
          className={classes.form}
          action={shareMeal}
        >
          <div className={classes.row}>
            <p>
              <label htmlFor="name">Your name</label>
              <input type="text" id="name" name="name" required />
            </p>
            <p>
              <label htmlFor="email">Your email</label>
              <input type="email" id="email" name="email" required />
            </p>
          </div>
          <p>
            <label htmlFor="title">Title</label>
            <input type="text" id="title" name="title" required />
          </p>
          <p>
            <label htmlFor="summary">Short Summary</label>
            <input type="text" id="summary" name="summary" required />
          </p>
          <p>
            <label htmlFor="image">Meal image</label>
            <input
              type="file"
              id="image"
              name="image"
              accept="image/*"
            />
          </p>
          <p>
            <label htmlFor="instructions">Instructions</label>
            <textarea
              id="instructions"
              name="instructions"
              rows={10}
              required
            ></textarea>
          </p>
          <p className={classes.actions}>
            <button type="submit">Share Meal</button>
          </p>
        </form>
      </main>
    </>
  );
}
