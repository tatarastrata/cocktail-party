module.exports = {
  actions: [
    // add component.tsx to dir/Components/Component.tsx
    {
      type: 'add',
      path: 'src/components/{{dir}}/{{pascalCase name}}/{{pascalCase name}}.tsx',
      templateFile: './plop/templates/Component.tsx.hbs',
    },
    // add componentPropTypes.ts to dir/Component/ComponentPropTypes.ts
    {
      type: 'add',
      path: 'src/components/{{dir}}/{{pascalCase name}}/{{pascalCase name}}PropTypes.ts',
      templateFile: './plop/templates/ComponentPropTypes.ts.hbs',
    },
    // add index.ts to dir/Component/index.ts
    {
      type: 'add',
      path: 'src/components/{{dir}}/{{pascalCase name}}/index.ts',
      templateFile: './plop/templates/index.ts.hbs',
    },
    // add import to dir/index.ts if it doesn't exist
    {
      type: 'add',
      path: 'src/components/{{dir}}/index.ts',
      skipIfExists: true,
    },
    // add import-statement to dir/index.ts
    {
      type: 'append',
      path: 'src/components/{{dir}}/index.ts',
      template: `export { default as {{pascalCase name}} } from './{{pascalCase name}}';`,
    },
  ],
};
