const api = require('../lib/api')

const exec = async () => {
  console.log('run')

  const results = await api.post('results')
  console.log(results)

  console.log('all done')
}

exec()
