# react-ts template by meeee

React Typescript app with

- TypeScript (`./tsconfig.json`);
- Webpack - `./webpack/webpack.config.js` is set up for environments `dev` and `prod` (`prod` is for deployment);
- ESlint and Prettier (`./eslintrc.js`, `./prettierrc.js`);
- Husky for prevention linting and formatting mistakes to be committed;
- Babel loader package for transpiling javascript files;
- React-refresh plugin to avoid browser reload on changes;
- Plop for creating project templates (`./plopfile.js`, `./templates/*ts.hbs`);
- `dependabot.yml` file for tracking project dependencies;
- SCSS (Sass); if it's not needed, consider uninstalling it;
- Redux setup with sample TodoReducer;
- error boundary;
- jest;

##Get Started
init package.json file in the root directory (`--y` takes default values)

```
npm init --y
```

other available scripts:

```
"scripts": {
    "start": "webpack serve --config webpack/webpack.config.js --env env=dev",
    "lint": "eslint --fix \"./src/**/*.{js,jsx,ts,tsx,json}\"",
    "format": "prettier --write \"./src/**/*.{js,jsx,ts,tsx,json,css,scss,md}\"",
    "plop": "plop",
    "build": "webpack --config ./webpack/webpack.common.js --mode production"
  },
```

Don't forget to install ESlint, Prettier extensions in VSCode.

## How to generate components:

run the command

```
npm run plop [ComponentName]
```

and answer the questions on component dir.

## How to deploy to GitHub Pages:

1. checkout to the new branch, i.e., 'gh-pages'

2. run the command

```
npm run build
```

3. place the `build` dir as a root.
4. additional steps that may be needed in `index.html`:

- add `<meta http-equiv="Permissions-Policy" content="interest-cohort=()">`
- change any `src="/dir..."` to `src="./dir..."`
