# Q2 Posts - Aplikace pro správu příspěvků

Aplikace v Next.js pro zobrazování, prohlížení a vytváření příspěvků s integrací externího API.

## Funkce

- 📝 **Seznam příspěvků** - Zobrazení všech příspěvků s obrázky a popisky
- 🔍 **Detail příspěvku** - Detailní zobrazení konkrétního příspěvku
- ➕ **Přidání příspěvku** - Formulář pro vytvoření nového příspěvku
- 📱 **Responzivní design** - Optimalizováno pro všechny zařízení
- ⚡ **ISR (Incremental Static Regeneration)** - Optimalizace výkonu
- ♿ **Přístupnost** - ARIA atributy a semantické HTML
- 🎨 **Favicona a ikony** - Sada ikon pro různé platformy

## Technologie

- **Framework:** Next.js 15.4.6 s App Router
- **Styling:** Tailwind CSS
- **State Management:** React Query (TanStack Query)
- **Formuláře:** React Hook Form + Zod validace
- **Typování:** TypeScript
- **Ikony:** Heroicons

## Instalace

1. **Klonování repozitáře:**
```bash
git clone <repository-url>
cd q2-posts
```

2. **Instalace závislostí:**
```bash
npm install
```

3. **Konfigurace environment proměnných:**
Vytvořte soubor `.env.local` v kořenovém adresáři:
```env
NEXT_PUBLIC_API_TOKEN=your-api-token-here
```

4. **Spuštění vývojového serveru:**
```bash
npm run dev
```

Aplikace bude dostupná na [http://localhost:3000](http://localhost:3000)

## API Endpointy

Aplikace používá následující API endpointy:

- **Seznam příspěvků:** `GET /api/posts`
- **Detail příspěvku:** `GET /api/posts/[id]`
- **Vytvoření příspěvku:** `POST /api/posts`

## Struktura projektu

```
src/
├── app/
│   ├── api/
│   │   └── posts/
│   │       ├── route.ts
│   │       └── [id]/
│   │           └── route.ts
│   ├── create/
│   │   └── page.tsx
│   ├── posts/
│   │   └── [id]/
│   │       └── page.tsx
│   ├── favicon.ico
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── form/
│   │   ├── CreatePostForm.tsx
│   │   ├── FormInputText.tsx
│   │   ├── FormInputTextarea.tsx
│   │   ├── FormError.tsx
│   │   └── FormLabel.tsx
│   ├── layout/
│   │   ├── BasePageLayout.tsx
│   │   ├── Breadcrumb.tsx
│   │   ├── Container.tsx
│   │   ├── Footer.tsx
│   │   ├── Hero.tsx
│   │   ├── Navigation.tsx
│   │   └── NavLink.tsx
│   ├── ui/
│   │   ├── Button.tsx
│   │   ├── ErrorState.tsx
│   │   ├── LoadingSpinner.tsx
│   │   ├── SuccessMessage.tsx
│   │   └── Text.tsx
│   ├── DetailContent.tsx
│   ├── PostCard.tsx
│   └── QueryProvider.tsx
├── lib/
│   ├── api.ts
│   ├── types.ts
│   ├── validations.ts
│   └── utils.ts
└── public/
    ├── apple-touch-icon.png
    ├── favicon.svg
    ├── hero.png
    ├── logo.svg
    └── placeholder.png
```

## Build a deployment

```bash
# Build aplikace
npm run build

# Spuštění produkční verze
npm start
```

## Přístupnost

Aplikace implementuje základní principy přístupnosti:
- Semantické HTML elementy
- ARIA atributy
- Klávesnicová navigace
- Kontrastní barvy
- Responzivní design

## Optimalizace výkonu

- **ISR (Incremental Static Regeneration)** pro seznam příspěvků
- **Server-side rendering** pro detail příspěvku
- **Optimizace obrázků** pomocí Next.js Image komponenty
- **Lazy loading** pro obrázky
- **Caching** pomocí React Query

## TypeScript

Aplikace používá striktní TypeScript s vlastními typy definovanými v `src/lib/types.ts`:
- API response typy
- Post a CreatePostData rozhraní
- Error handling typy
- Navigation a form typy

## Formuláře

Formuláře jsou implementovány pomocí:
- **React Hook Form** - pro state management
- **Zod** - pro validaci (v `src/lib/validations.ts`)
- **Vlastní komponenty** - pro konzistentní UI
