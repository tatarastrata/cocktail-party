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
- Redux and Redux toolkit;
- axios;
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

## How to generate components:

run the command

```
npm run plop [ComponentName]
```

and answer the questions on component dir.

### To add a module alias:
1. in webpack add path:
```
module.export = {
  resolve: {
    alias: {
      components: path.resolve(__dirname, '..', './src/components'),
    },
    ...
  },
  ...
}
```
2. in tsconfig.json add compilerOptions (with path with a baseUrl) and include:
```
{
  "compilerOptions": {
      "baseUrl": "./src",
      "paths": {
        "components/*": ["components/*", "components"],
        ...
      },
      ...
},
    "include": ["./", "src/**/*", "components"],
}
```
3. 
