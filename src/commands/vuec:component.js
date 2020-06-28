module.exports = {
  name: 'vuec:component',
  description: 'Create new vue component',
  run: async toolbox => {
    const {
      parameters,
      template
    } = toolbox

    const name = parameters.first

    await template.generate({
      template: 'vue/component.js.ejs',
      target: `src/components/${name}.vue`,
      props: { name },
    })
  }
}