const sql = require('better-sqlite3');
const db = sql('meals.db');

const dummyMeals = [
  {
    title: 'Green Buddha Bowl',
    slug: 'green-buddha-bowl',
    image: '/images/buddha-bowl.jpg',
    summary:
      'Colorful vegan bowl with roasted vegetables, chickpeas and creamy tahini dressing.',
    instructions: `
      1. Cook the base:
         Prepare quinoa or brown rice according to package instructions.

      2. Roast the veggies:
         Toss broccoli, sweet potato and chickpeas with olive oil and spices. Roast until golden.

      3. Make the dressing:
         Mix tahini, lemon juice, garlic and water until smooth.

      4. Assemble the bowl:
         Add grains, roasted veggies and fresh greens to a bowl and drizzle with dressing.
    `,
    creator: 'GreenLevel Team',
    creator_email: 'team@greenlevel.example.com',
  },
  {
    title: 'Veggie Power Burger',
    slug: 'veggie-power-burger',
    image: '/images/veggie-burger.jpg',
    summary:
      'Juicy vegan burger made from beans and veggies, served with fresh salad and avocado.',
    instructions: `
      1. Prepare the patty:
         Mash cooked beans with grated carrot, oats and spices. Form into patties.

      2. Fry or bake:
         Cook patties in a pan with a little oil or bake in the oven until crispy.

      3. Assemble the burger:
         Toast the bun, add lettuce, tomato, avocado and the hot patty.

      4. Serve:
         Enjoy with sweet potato fries or a fresh salad.
    `,
    creator: 'GreenLevel Team',
    creator_email: 'team@greenlevel.example.com',
  },
  {
    title: 'Creamy Spinach Pasta',
    slug: 'creamy-spinach-pasta',
    image: '/images/green-pasta.jpg',
    summary:
      'Pasta in a creamy cashew-spinach sauce with lots of fresh herbs.',
    instructions: `
      1. Cook the pasta:
         Boil pasta until al dente and reserve some cooking water.

      2. Blend the sauce:
         Blend soaked cashews, spinach, garlic and plant milk until smooth.

      3. Combine:
         Heat the sauce in a pan, add pasta and a bit of cooking water, toss well.

      4. Serve:
         Top with toasted seeds and fresh basil.
    `,
    creator: 'GreenLevel Team',
    creator_email: 'team@greenlevel.example.com',
  },
  {
    title: 'Mediterranean Quinoa Salad',
    slug: 'mediterranean-quinoa-salad',
    image: '/images/quinoa-salad.jpg',
    summary:
      'Light quinoa salad with cucumber, tomatoes, olives and lemon dressing.',
    instructions: `
      1. Cook quinoa:
         Rinse quinoa and cook until fluffy, then let it cool.

      2. Chop veggies:
         Dice cucumber, tomatoes and bell pepper, slice olives.

      3. Mix dressing:
         Whisk olive oil, lemon juice, garlic, salt and pepper.

      4. Combine:
         Toss quinoa with vegetables and dressing, add fresh parsley.
    `,
    creator: 'GreenLevel Team',
    creator_email: 'team@greenlevel.example.com',
  },
  {
    title: 'Tofu Veggie Bowl',
    slug: 'tofu-veggie-bowl',
    image: '/images/tofu-bowl.jpg',
    summary:
      'Marinated tofu with stir-fried vegetables served over rice.',
    instructions: `
      1. Marinate tofu:
         Press tofu, cut into cubes and marinate in soy sauce, garlic and ginger.

      2. Cook tofu:
         Fry tofu cubes until golden and crispy.

      3. Stir-fry veggies:
         Quickly fry vegetables of your choice in a hot pan or wok.

      4. Serve:
         Add rice to a bowl, top with veggies and tofu, sprinkle with sesame seeds.
    `,
    creator: 'GreenLevel Team',
    creator_email: 'team@greenlevel.example.com',
  },
  {
    title: 'Hummus Party Plate',
    slug: 'hummus-party-plate',
    image: '/images/hummus-plate.jpg',
    summary:
      'Creamy hummus served with fresh veggies, olives and warm pita bread.',
    instructions: `
      1. Blend hummus:
         Mix chickpeas, tahini, lemon juice, garlic and water until creamy.

      2. Prepare veggies:
         Slice carrots, cucumber, peppers and other crunchy vegetables.

      3. Warm the pita:
         Heat pita bread in the oven or on a dry pan.

      4. Serve:
         Spread hummus on a plate, drizzle with olive oil and paprika, add veggies and pita.
    `,
    creator: 'GreenLevel Team',
    creator_email: 'team@greenlevel.example.com',
  },
  {
    title: 'Green Energy Smoothie',
    slug: 'green-energy-smoothie',
    image: '/images/green-smoothie.jpg',
    summary:
      'Refreshing smoothie with spinach, banana, kiwi and plant milk.',
    instructions: `
      1. Prepare ingredients:
         Peel banana and kiwi, wash spinach.

      2. Blend:
         Add fruit, spinach and plant milk to a blender, blend until smooth.

      3. Adjust:
         Add more milk for a thinner texture or some ice cubes for extra chill.

      4. Serve:
         Pour into a glass and drink immediately.
    `,
    creator: 'GreenLevel Team',
    creator_email: 'team@greenlevel.example.com',
  },
];


db.prepare(`
   CREATE TABLE IF NOT EXISTS meals (
       id INTEGER PRIMARY KEY AUTOINCREMENT,
       slug TEXT NOT NULL UNIQUE,
       title TEXT NOT NULL,
       image TEXT NOT NULL,
       summary TEXT NOT NULL,
       instructions TEXT NOT NULL,
       creator TEXT NOT NULL,
       creator_email TEXT NOT NULL
    )
`).run();

async function initData() {
  const stmt = db.prepare(`
      INSERT INTO meals VALUES (
         null,
         @slug,
         @title,
         @image,
         @summary,
         @instructions,
         @creator,
         @creator_email
      )
   `);

  for (const meal of dummyMeals) {
    stmt.run(meal);
  }
}

initData();
