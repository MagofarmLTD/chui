## mychui.net website Code base

## 🚀 Project Structure

NB: This is basically normal HTML files, ignore the `.astro` extensions. Astro is just a framework that makes you ship better HTML to your users

Inside of your Astro project, you'll see the following folders and files:

```
/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   └── YourComponents.asto
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       └── index.astro
└── package.json
```

The components are self explanatory and they are named after what it contains. You can check what component is about by reffering to `pages/index.astro` where the components are imported there.

There's nothing special about `src/components/`, but there's one file which uses React for the interactivity. which is `Nav.tsx`. Nothing crazy there. It should be able to get you moving.

Any static assets, like images, can be placed in the `public/` directory.

Also your blogs are in`pages/blogs/index.md` the md extension makes you easier to write your content. Just write your content there as if you're on google docs and it will be rendered well in pure HTML.

Styling uses TailwindCSS which is the same thing as CSS but better. You can check the website if you want to change the styles

## 🧞 Commands to run on your local machine

All commands are run from the root of the project, from a terminal:

| Command        | Action                                      |
| :------------- | :------------------------------------------ |
| `git clone`    | Cloning this repo                           |
| `pnpm install` | Installs dependencies                       |
| `pnpm run dev` | Starts local dev server at `localhost:3000` |

## 👀 Cheers
