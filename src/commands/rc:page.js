module.exports = {
  name: 'rc:page',
  description: 'Create new component inside src/pages',
  run: async toolbox => {
    const {
      parameters,
      createComponent,
    } = toolbox

    const name = parameters.first
    await createComponent('src/pages', name)
  }
}