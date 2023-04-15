module.exports = (plop) => {
  plop.setGenerator('🧱 Component', {
    description: 'Creates the basic component structure.',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is your component name?'
      }
    ],
    actions: [
      {
        type: 'add',
        path: '../../src/components/{{pascalCase name}}/index.ts',
        templateFile: './templates/components/index.ts.hbs'
      },
      {
        type: 'add',
        path: '../../src/components/{{pascalCase name}}/{{pascalCase name}}.tsx',
        templateFile: './templates/components/component.tsx.hbs'
      },
      {
        type: 'add',
        path: '../../src/components/{{pascalCase name}}/{{pascalCase name}}.style.ts',
        templateFile: './templates/components/style.ts.hbs'
      },
      {
        type: 'add',
        path: '../../src/components/{{pascalCase name}}/{{pascalCase name}}.test.tsx',
        templateFile: './templates/components/test.tsx.hbs'
      },
      {
        type: 'add',
        path: '../../src/components/{{pascalCase name}}/{{pascalCase name}}.stories.tsx',
        templateFile: './templates/components/stories.tsx.hbs'
      },
      {
        type: 'add',
        path: '../../src/components/{{pascalCase name}}/{{pascalCase name}}.types.ts',
        templateFile: './templates/components/types.ts.hbs'
      }
    ]
  });

  plop.setGenerator('🧰 Util', {
    description: 'Creates the basic util structure.',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is your util name?'
      }
    ],
    actions: [
      {
        type: 'add',
        path: '../../src/utils/{{camelCase name}}/index.ts',
        templateFile: './templates/utils/index.ts.hbs'
      },
      {
        type: 'add',
        path: '../../src/utils/{{camelCase name}}/{{camelCase name}}.ts',
        templateFile: './templates/utils/util.ts.hbs'
      },
      {
        type: 'add',
        path: '../../src/utils/{{camelCase name}}/{{camelCase name}}.test.ts',
        templateFile: './templates/utils/test.ts.hbs'
      },
      {
        type: 'add',
        path: '../../src/utils/{{camelCase name}}/{{camelCase name}}.types.ts',
        templateFile: './templates/utils/types.ts.hbs'
      }
    ]
  });
};
