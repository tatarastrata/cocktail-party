module.exports = function (plop) {
  plop.setGenerator('component', {
    description: 'Create component',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Component name?',
      },
    ],
    actions: [
      {
        type: 'add',
        path: 'src/components/{{pascalCase name}}/{{pascalCase name}}.tsx',
        templateFile: 'templates/Component.tsx.hbs',
      },
      {
        type: 'add',
        path: 'src/components/{{pascalCase name}}/{{pascalCase name}}.module.scss',
        templateFile: 'templates/Component.module.ts.hbs',
      },
      {
        type: 'add',
        path: 'src/components/{{pascalCase name}}/index.ts',
        templateFile: 'templates/index.ts.hbs',
      },
      {
        type: 'add',
        path: 'src/components/{{pascalCase name}}/{{pascalCase name}}PropTypes.ts',
        templateFile: 'templates/ComponentPropTypes.ts.hbs',
      },
      {
        type: 'add',
        path: 'src/components/index.ts',
        skipIfExists: true,
      },
      {
        type: 'append',
        path: 'src/components/index.ts',
        separator: '',
        template: `export { default as {{pascalCase name}} } from './{{pascalCase name}}';\n`,
        unique: true,
      },
    ],
  });
};
