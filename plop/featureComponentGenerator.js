const fs = require('fs');

module.exports = {
  prompts: [
    {
      when: function (answers) {
        return answers.dir === 'features';
      },
      type: 'list',
      name: 'subDir',
      message: 'Select subdirectory:',
      choices: function () {
        const featuresPath = 'src/components/features';
        return fs.readdirSync(featuresPath);
      },
    },
  ],
  actions: [
    // add Component.tsx to Feature/components/Component/Component.tsx
    {
      type: 'add',
      path: 'src/components/{{dir}}/{{pascalCase subDir}}/components/{{pascalCase name}}/{{pascalCase name}}.tsx',
      templateFile: './plop/templates/Component.tsx.hbs',
    },
    // add Component/index.ts to Feature/components/Component/index.ts
    {
      type: 'add',
      path: 'src/components/{{dir}}/{{pascalCase subDir}}/components/{{pascalCase name}}/index.ts',
      templateFile: './plop/templates/index.ts.hbs',
    },
    // add ComponentPropTypes.ts to Feature/components/Component/ComponentPropTypes.ts
    {
      type: 'add',
      path: 'src/components/{{dir}}/{{pascalCase subDir}}/components/{{pascalCase name}}/{{pascalCase name}}PropTypes.ts',
      templateFile: './plop/templates/ComponentPropTypes.ts.hbs',
    },
    // add index.ts to Feature/components/ if it doesn't exist
    {
      type: 'add',
      path: 'src/components/{{dir}}/{{pascalCase subDir}}/components/index.ts',
      skipIfExists: true,
    },
    // add export-statement to Feature/components/index.ts
    {
      type: 'append',
      path: 'src/components/{{dir}}/{{pascalCase subDir}}/components/index.ts',
      template: `export { default as {{pascalCase name}} } from './{{pascalCase name}}';\n`,
    },
  ],
};
