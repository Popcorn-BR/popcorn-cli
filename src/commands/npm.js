module.exports = {
  name: 'npm',
  description: 'Create new npm package',
  run: async toolbox => {
    const {
      parameters,
      template
    } = toolbox

    const name = parameters.first

    await template.generate({
      template: 'package-typescript/tsconfig.js.ejs',
      target: `${name}/tsconfig.json`,
    })

    await template.generate({
      template: 'package-typescript/package.js.ejs',
      target: `${name}/package.json`,
      props: { name }
    })

    await template.generate({
      template: 'package-typescript/rollup.config.js.ejs',
      target: `${name}/rollup.config.js`,
    })

    await template.generate({
      template: 'package-typescript/prettierignore.js.ejs',
      target: `${name}/.prettierignore`,
    })

    await template.generate({
      template: 'package-typescript/gitignore.js.ejs',
      target: `${name}/.gitignore`,
    })
    await template.generate({
      template: 'package-typescript/contributing.js.ejs',
      target: `${name}/CONTRIBUTING.md`,
    })

    await template.generate({
      template: 'package-typescript/readme.js.ejs',
      target: `${name}/README.md`,
      props: { name },
    })
    await template.generate({
      template: 'package-typescript/licence.js.ejs',
      target: `${name}/LICENCE.md`,
    })
    await template.generate({
      template: 'package-typescript/index.js.ejs',
      target: `${name}/src/index.ts`,
    })
    await template.generate({
      template: 'package-typescript/test.js.ejs',
      target: `${name}/__tests__/index.spec.ts`,
    })
  }
}