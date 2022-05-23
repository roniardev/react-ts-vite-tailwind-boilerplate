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
  plop.setGenerator('page', {
    description: 'React page using Typescript',
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
    ],
    actions: [
      {
        type: 'add',
        path: 'src/pages/{{dir}}/{{pascalCase name}}/index.tsx',
        templateFile: 'templates/page/Page.tsx.hbs',
      },
      {
        type: 'add',
        path: 'src/pages/{{dir}}/__tests__/{{pascalCase name}}.test.tsx',
        templateFile: 'templates/page/Page.test.tsx.hbs',
      },
      {
        // Action type 'append' injects a template into an existing file
        type: 'append',
        path: 'src/pages/index.ts',
        // Pattern tells plop where in the file to inject the template
        pattern: `/* PLOP_INJECT_IMPORT */`,
        template: `export * from './{{dir}}/{{pascalCase name}}';`,
      },
      {
        // Action type 'append' injects a template into an existing file
        type: 'append',
        path: 'src/routes/Router.tsx',
        // Pattern tells plop where in the file to inject the template
        pattern: `/* PLOP_INJECT_IMPORT */`,
        template: `,{{pascalCase name}}`,
      },
      {
        // Action type 'append' injects a template into an existing file
        type: 'append',
        path: 'src/routes/Router.tsx',
        // Pattern tells plop where in the file to inject the template
        pattern: `/* PLOP_ROUTE_INJECT_IMPORT */`,
        template: `<Route path="/{{lowerCase name}}" element={<{{name}} />} />`,
      },
    ],
  });
};
