require("dotenv").config();
const {Schema} = require("../schemas/schema")
const { Kafka, logLevel} = require("kafkajs")
const {
  SchemaRegistry,
  readAVSC,  
  COMPATIBILITY: { FORWARD },
  SchemaType,
} = require("@kafkajs/confluent-schema-registry");

const clientId = process.env.CONSUMER_GROUP
const subject = process.env.SUBJECT
const version = process.env.SCHEMA_VERSION
const brokers = () => { return process.env.BROKERS.split(',').sort(() => Math.random() - 0.5) }
let id = 0;    

const registry = new SchemaRegistry({
  host: process.env.SCHEMA_REGISTRY_ENDPOINT,
  auth: {
    username: process.env.SR_CLIENT_ID,
    password: process.env.SR_CLIENT_SECRET
  }
});

(async () => {id = await registry.getRegistryId(subject, version)})();

const encode = async (body, id) => {
  return await registry.encode(id, body);
};

const decode = async (encoded_key) => {
  return await registry.decode(encoded_key);
};




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


module.exports = {
    StartKafka,
    clientId,
    registry,
    schemaId,
    encode,
    decode
}
