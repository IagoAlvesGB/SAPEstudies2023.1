require("dotenv").config();
const { Kafka, logLevel } = require("kafkajs")
const {
  SchemaRegistry,
  readAVSC,
  COMPATIBILITY: { FORWARD },
} = require("@kafkajs/confluent-schema-registry");

const clientId = process.env.CONSUMER_GROUP
const subject = process.env.SUBJECT
const version = process.env.SCHEMA_VERSION
const brokers = () => { return process.env.BROKERS.split(',').sort(() => Math.random() - 0.5) }
const topic = process.env.TOPIC
const errorTypes = ['unhandledRejection', 'uncaughtException']
const signalTraps = ['SIGTERM', 'SIGINT', 'SIGUSR2']
let id = 0;    

const registry = new SchemaRegistry({
  host: process.env.SCHEMA_REGISTRY_ENDPOINT,
  auth: {
    username: process.env.SR_CLIENT_ID,
    password: process.env.SR_CLIENT_SECRET
  }
});

(async () => {id = await registry.getRegistryId(subject, version)})();

const schemaId = () => id

const StartKafka = new Kafka({
  clientId,
  brokers,
  retry: { retries: 2 },
  logLevel: logLevel.INFO,
  ssl: {
    rejectUnauthorized: false
  },
  sasl: {
    mechanism: process.env.SCRAM_SHA,
    username: process.env.AWS_USERNAME,
    password: process.env.AWS_PASSWORD,
  },
});
  

  function GetLogs(run,consumerConfig){

    errorTypes.forEach(type => {
      process.on(type, async e => {
        try {
          console.log(`process.on ${type}`)
          console.error(e)
          await consumerConfig.disconnect()
          process.exit(0)
        } catch (_) {
          process.exit(1)
        }
      })
    })
  
    signalTraps.forEach(type => {
      process.once(type, async () => {
        try {
          await consumerConfig.disconnect()
        } finally {
          process.kill(process.pid, type)
        }
      })
    })
  
    run().catch(e => console.error(`[example/consumer] ${e.message}`, e))

    process.on('unhandledRejection', (err) => {})
  
  }

  module.exports = {
    StartKafka,
    clientId,
    registry,
    GetLogs,
    schemaId
  }
