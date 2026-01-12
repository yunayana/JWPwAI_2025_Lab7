# GreenLevel Food (Next.js LAB10–13)

*(https://yunayana.github.io/JWPwAI_2025_Lab7/)*

Prosty projekt typu **food blog / recipe sharing** zbudowany w ramach laboratoriów z Next.js (część 1–4). Aplikacja pozwala przeglądać wegańskie posiłki, oglądać szczegóły przepisu, dodawać własne dania i obsługuje podstawowe ekrany błędów. 

---

## Funkcje

- Strona główna z hero, slideshow i sekcjami „How it works” oraz „Why GreenLevel Food?”.
- Lista posiłków na `/meals` z danymi z bazy SQLite (better‑sqlite3) i komponentem `MealsGrid`. 
- Strona szczegółów posiłku `/meals/[slug]` z obrazkiem, podsumowaniem, instrukcjami oraz obsługą „meal not found” przez `notFound()`.   
- Formularz **Share Meal** na `/meals/share` z walidacją po stronie serwera i zapisem nowego przepisu do bazy. 
- Upload obrazu z urządzenia: plik trafia do `public/uploads`, a ścieżka do kolumny `image` w tabeli `meals`. 
- Globalny ekran błędu (`app/error.js`) oraz globalna strona `not-found` dla błędnych adresów. 
- Lokalny `not-found` w katalogu `meals` wyświetlany, gdy `getMeal(slug)` nie znajduje rekordu. 
- Prosta strona **Foodies / Vegan Community** na `/community` jako statyczna podstrona informacyjna. 

---

## Technologia

- **Next.js (App Router)** – komponenty serwerowe, dynamic routing (`/meals/[slug]`), specjalne pliki `error.js` i `not-found.js`. 
- **React 18** – `Suspense` do obsługi stanu ładowania listy posiłków. 
- **better-sqlite3 + SQLite** – lokalna baza `meals.db` inicjalizowana skryptem `initdb.js` z przykładowymi danymi.
- **CSS Modules** – osobne pliki `*.module.css` dla layoutu, komponentów i podstron (hero, header, formularz share, strony błędów).  
- **Server Actions** – obsługa formularzy (`shareMeal`, opcjonalnie `deleteMealAction`) bez dodatkowego API. 

---

## Struktura katalogów (skrót)

- `app/`  
  - `layout.js` – układ globalny z nagłówkiem i gradientowym tłem. 
  - `page.js` – strona główna (slideshow + sekcje informacyjne). 
  - `error.js` – globalna obsługa wyjątków z przyciskiem „Try again”.  
  - `not-found.js` – globalna strona „Page not found”.   
  - `meals/`  
    - `page.js` – lista posiłków + `Suspense` i `MealsLoader`.   
    - `[mealSlug]/page.js` – strona szczegółów przepisu, używa `getMeal(slug)`.  
    - `not-found.js` – komunikat dla brakującego posiłku. 
    - `share/page.js` – formularz dodawania przepisu z uploadem obrazu. 
  - `community/page.js` – strona Foodies / Vegan Community. 
- `components/`  
  - `main-header` + `nav-link` – top navigation z logo i linkami.  
  - `images/image-slideshow` – animowany pokaz zdjęć na stronie głównej. 
  - `meals/meal-item`, `meals/meals-grid` – kafelki i siatka posiłków.  
- `lib/meals.js` – połączenie z bazą i funkcje `getMeals`, `getMeal`, `createMeal`, (opcjonalnie `deleteMeal`). 

---

## Jak uruchomić lokalnie

1. **Instalacja zależności**

   ```bash
   npm install

2. **Inicjalizacja bazy**

Upewnij się, że w katalogu projektu znajduje się skrypt initdb.js z laboratoriów i uruchom:

```bash
node initdb.js
```
Utworzy to plik meals.db z tabelą meals i przykładowymi danymi.

3. **Development server**

```bash
npm run dev

