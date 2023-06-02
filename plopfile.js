const componentGenerator = require('./plop/componentGenerator');
const featureComponentGenerator = require('./plop/featureComponentGenerator');

module.exports = function (plop) {
  const generators = {
    atoms: componentGenerator,
    features: featureComponentGenerator,
  };

  function exists(path) {
    return fs.existsSync(path);
  }

  function isFeatureDir(dir) {
    return dir === 'features';
  }

  // Register the helper function
  plop.setHelper('exists', exists);
  plop.setHelper('isFeatureDir', isFeatureDir);

  plop.setGenerator('default', {
    description: 'Default Generator',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Enter the component name:',
      },
      {
        type: 'list',
        name: 'dir',
        message: 'Select directory',
        choices: ['atoms', 'pages', 'features'],
      },
      ...featureComponentGenerator.prompts,
    ],
    actions: function (data) {
      console.log(data);
      return generators[data.dir].actions;
    },
  });
};
