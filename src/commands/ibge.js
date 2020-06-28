module.exports = {
  name: 'ibge',
  description: 'Install popcor-ibge package',
  run: async toolbox => {
    const { filesystem, system, print: { success, error } } = toolbox
    try {
      const yarn = filesystem.exists('yarn.lock')
      let status;
      if (yarn)
        status = await system.run('yarn add popcorn-ibge')
      else
        status = await system.run('npm install popcorn-ibge')
      success(`${status}.`)
      success(`🍿🛠 Install Popcorn IBGE success!`)
    } catch (erro) {
      error(erro)
    }
  }
}