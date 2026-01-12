# GreenLevel Food (Next.js LAB10–13)

*(https://yunayana.github.io/JWPwAI_2025_Lab7/)*

Prosty projekt typu **food blog / recipe sharing** zbudowany w ramach laboratoriów z Next.js (część 1–4). Aplikacja pozwala przeglądać wegańskie posiłki, oglądać szczegóły przepisu, dodawać własne dania i obsługuje podstawowe ekrany błędów. [file:25][file:28][file:37]

---

## Funkcje

- Strona główna z hero, slideshow i sekcjami „How it works” oraz „Why GreenLevel Food?”. [file:25]  
- Lista posiłków na `/meals` z danymi z bazy SQLite (better‑sqlite3) i komponentem `MealsGrid`. [file:28]  
- Strona szczegółów posiłku `/meals/[slug]` z obrazkiem, podsumowaniem, instrukcjami oraz obsługą „meal not found” przez `notFound()`. [file:28][file:37]  
- Formularz **Share Meal** na `/meals/share` z walidacją po stronie serwera i zapisem nowego przepisu do bazy. [file:37]  
- Upload obrazu z urządzenia: plik trafia do `public/uploads`, a ścieżka do kolumny `image` w tabeli `meals`. [file:28][file:37]  
- Globalny ekran błędu (`app/error.js`) oraz globalna strona `not-found` dla błędnych adresów. [file:37]  
- Lokalny `not-found` w katalogu `meals` wyświetlany, gdy `getMeal(slug)` nie znajduje rekordu. [file:37]  
- Prosta strona **Foodies / Vegan Community** na `/community` jako statyczna podstrona informacyjna. [file:25][file:37]

---

## Technologia

- **Next.js (App Router)** – komponenty serwerowe, dynamic routing (`/meals/[slug]`), specjalne pliki `error.js` i `not-found.js`. [file:25][file:37]  
- **React 18** – `Suspense` do obsługi stanu ładowania listy posiłków. [file:28]  
- **better-sqlite3 + SQLite** – lokalna baza `meals.db` inicjalizowana skryptem `initdb.js` z przykładowymi danymi. [file:28]  
- **CSS Modules** – osobne pliki `*.module.css` dla layoutu, komponentów i podstron (hero, header, formularz share, strony błędów). [file:25][file:28][file:37]  
- **Server Actions** – obsługa formularzy (`shareMeal`, opcjonalnie `deleteMealAction`) bez dodatkowego API. [file:37]

---

## Struktura katalogów (skrót)

- `app/`  
  - `layout.js` – układ globalny z nagłówkiem i gradientowym tłem. [file:25]  
  - `page.js` – strona główna (slideshow + sekcje informacyjne). [file:25]  
  - `error.js` – globalna obsługa wyjątków z przyciskiem „Try again”. [file:37]  
  - `not-found.js` – globalna strona „Page not found”. [file:37]  
  - `meals/`  
    - `page.js` – lista posiłków + `Suspense` i `MealsLoader`. [file:28]  
    - `[mealSlug]/page.js` – strona szczegółów przepisu, używa `getMeal(slug)`. [file:28]  
    - `not-found.js` – komunikat dla brakującego posiłku. [file:37]  
    - `share/page.js` – formularz dodawania przepisu z uploadem obrazu. [file:37]  
  - `community/page.js` – strona Foodies / Vegan Community. [file:25][file:37]  
- `components/`  
  - `main-header` + `nav-link` – top navigation z logo i linkami. [file:25]  
  - `images/image-slideshow` – animowany pokaz zdjęć na stronie głównej. [file:25]  
  - `meals/meal-item`, `meals/meals-grid` – kafelki i siatka posiłków. [file:28]  
- `lib/meals.js` – połączenie z bazą i funkcje `getMeals`, `getMeal`, `createMeal`, (opcjonalnie `deleteMeal`). [file:28]

---

## Jak uruchomić lokalnie

1. **Instalacja zależności**

   ```bash
   npm install
