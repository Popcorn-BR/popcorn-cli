module.exports = {
  name: 'cep',
  description: 'Install popcorn-cep package',
  run: async toolbox => {
    const { filesystem, system, print: { success, error } } = toolbox
    try {
      const yarn = filesystem.exists('yarn.lock')
      let status;
      if (yarn)
        status = await system.run('yarn add popcorn-cep')
      else
        status = await system.run('npm install popcorn-cep')
      success(`${status}.`)
      success(`🍿 📬 Install Popcorn CEP success!`)
    } catch (erro) {
      error(erro)
    }
  }
}