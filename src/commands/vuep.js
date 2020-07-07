module.exports = {
  name: 'vuep',
  description: 'Create new vue page',
  run: async toolbox => {
    const {
      parameters,
      template
    } = toolbox

    const name = parameters.first

    await template.generate({
      template: 'vue/page.js.ejs',
      target: `src/pages/${name}.vue`,
      props: { name },
    })
  }
}