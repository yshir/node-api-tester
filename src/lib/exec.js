const { performance } = require('perf_hooks')

module.exports = async func => {
  console.log('run')
  const beginTime = performance.now()
  await func()
  const endTime = performance.now()
  console.log(`all done: ${Math.round(endTime - beginTime) / 1000}s`)
}
