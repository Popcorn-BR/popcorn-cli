module.exports = {
  name: 'tools',
  description: 'Install popcorn-tools package',
  run: async toolbox => {
    const { filesystem, system, print: { success, error } } = toolbox
    try {
      const yarn = filesystem.exists('yarn.lock')
      let status;
      if (yarn)
        status = await system.run('yarn add popcorn-tools')
      else
        status = await system.run('npm install popcorn-tools')
      success(`${status}.`)
      success(`🍿 🔧🪓🔨 Install Popcorn Tools success!`)
    } catch (erro) {
      error(erro)
    }
  }
}