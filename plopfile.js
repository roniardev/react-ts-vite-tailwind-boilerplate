module.exports = function (plop) {
  plop.setGenerator('component', {
    description: 'React component using Typescript',
    prompts: [
      {
        type: 'input',
        name: 'dir',
        message: 'Directory: ',
      },
      {
        type: 'input',
        name: 'name',
        message: 'Name: ',
      },
      {
        type: 'input',
        name: 'tag',
        message: 'Tag name: ',
      },
    ],
    actions: [
      {
        type: 'add',
        path: 'src/components/{{dir}}/{{pascalCase name}}/index.tsx',
        templateFile: 'templates/component/Component.tsx.hbs',
      },
      {
        type: 'add',
        path: 'src/components/{{dir}}/__tests__/{{pascalCase name}}.test.tsx',
        templateFile: 'templates/component/Component.test.tsx.hbs',
      },
    ],
  });
};
