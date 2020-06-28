module.exports = (toolbox) => {
  const {
    template,
    filesystem,
    print: { success, error }
  } = toolbox

  async function isReactNative() {

    const package = await filesystem.read('package.json', 'json');
    return !!package.dependencies['react-native']
  }

  async function createComponent(folder, name) {
    if(!name) {
      error('Name must be specified')
      return
    }

    await template.generate({
      template: 'react/component.js.ejs',
      target: `${folder}/${name}/index.js`,
      props: { name }
    })

    const styleTemplate = (await isReactNative()) ? 'react/styles-rn.js.ejs' : 'react/styles-react.js.ejs'

    await template.generate({
      template: styleTemplate,
      target: `${folder}/${name}/styles.js`,
    })

    success(`Generated ${name} ${folder}/${name}.`)
  }

  toolbox.createComponent = createComponent;
}