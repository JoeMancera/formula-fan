# Formula fan project

This project is only for educational purposes. It is not intended to be used in production. All information is property of formula one group.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                    | Action                                           |
| :------------------------- | :----------------------------------------------- |
| `pnpm install`             | Installs dependencies                            |
| `pnpm run dev`             | Starts local dev server at `localhost:4321`      |
| `pnpm run build`           | Build your production site to `./dist/`          |
| `pnpm run preview`         | Preview your build locally, before deploying     |
| `pnpm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `pnpm run astro -- --help` | Get help using the Astro CLI                     |
| `pnpm run scrape`          | Scrape data from formula one website             |

## 👀 Design

Figma file: [Formula-fan design](https://www.figma.com/file/t44yhzKrFpf6vMWSXpLKNM/FormulaFan?type=design&node-id=1%3A4&mode=design&t=pQNUXbjs8odIdX7O-1)

## 🤖 Workflows

This project uses [GitHub Actions](https://github.com/features/actions) to scrape data from formula one website and deploy the site to [Vercel](https://vercel.com/). 
You can find the workflows in the [workflows folder](/.github/workflows).