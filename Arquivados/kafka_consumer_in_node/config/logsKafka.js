const { error } = require("winston");
const errorTypes = ['unhandledRejection', 'uncaughtException']
const signalTraps = ['SIGTERM', 'SIGINT', 'SIGUSR2']

function GetLogs(run,kafkaConfig){

    const rerrorTypes = errorTypes.forEach(type => {
      process.on(type, async e => {
        try {
          console.log(`process.on ${type}`)
          console.error(e)
          await kafkaConfig.disconnect()
          process.exit(0)
        } catch (_) {
          process.exit(1)
        }
      })
    })
  
    const rsignalTraps = signalTraps.forEach(type => {
      process.once(type, async () => {
        try {
          await kafkaConfig.disconnect()
        } finally {
          process.kill(process.pid, type)
        }
      }) 
    })
  
    run().catch(
        error => console.error(`[example/consumer] ${error.message}`, error)        
      )

    return {
      "error:" : error,
      "errorTypes" : rerrorTypes,
      "signalTraps" : rsignalTraps
    }

}

module.exports = {
  GetLogs
}