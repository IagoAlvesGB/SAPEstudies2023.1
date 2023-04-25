const { StartKafka, clientId, GetLogs, schemaId, registry } = require("../configs/start_kafka");
const topic = process.env.TOPIC;

//Producer
const { StartKafkaProducer, encode } = require('../configs/producer_kafka');
const  message = require("../configs/producer_message");
const  sender = require("../configs/producer_sender");
const producerConfig = StartKafkaProducer(StartKafka,schemaId,registry);

//Consumer
const { StartKafkaConsumer } = require('../configs/consumer_kafka');
const consumerConfig = StartKafkaConsumer(StartKafka,clientId);


const run = async () => {
  await consumerConfig.connect()
  await consumerConfig.subscribe({ topic, fromBeginning: true })
  await consumerConfig.run({
    // eachBatch: async ({ batch }) => {
    //   console.log(batch)
    // },
    eachMessage: async ({ topic, partition, message }) => {
      const prefix = `${topic}[${partition} | ${message.offset}] / ${message.timestamp}`
      console.log(`- ${prefix} ${message.key}#${message.value}`)
    },
  })
}

GetLogs(run,consumerConfig);

module.exports = async (srv) => {

  srv.on('producerkafka', async (request, reply) => {

    const { body, headers } = request;
    console.log(request);
    const encodedMessage = await encode(body, schemaId, registry);
    

    const cid = headers["x-request-id"] || uuid.v4();
    const hash =  crypto.createHash("md5").update(encodedMessage).digest("hex");
    const endOfLife =  new Date().toLocaleDateString();
    const event = message(topic, encodedMessage, cid, endOfLife, hash);

    return sender(event, producerConfig, cid, hash)
    .then(() => reply.code(201).send({ msg: "Posted message" }))
    .catch((error) => reply.code(500).send(error));    

  })

  srv.after('POST', 'Books', xs => {
  })
}