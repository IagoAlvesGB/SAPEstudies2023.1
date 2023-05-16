const express = require("express");
const request = require('request');
const { StartKafkaConsumer } = require("./config/startKafkaConsumer");
const { Schema } = require("./schemas/schema");
const { GetLogs } = require("./config/logsKafka");
const { registry, decode, schemaId } = require("./config/startKafka");
const mwBasicAuth = require("./middleware/basicAuth")
const topic = process.env.TOPIC;
const consumer_sUrl = process.env.CONSUMER_SENDER_URL;
const oAuth2_Url = process.env.OAUTH2_URL;
const oAuth2_Auth = process.env.OAUTH2_AUTH;
const PORT = process.env.PORT || 3000;
//const KAFKA_CONSUMER_CREDENTIAL = process.env.KAFKA_CONSUMER_CREDENTIAL

var oAuth2_Authorization = null

// oAuth2.0 ===========================================================================

 var oAuth2ServerOption = {
  uri: oAuth2_Url,
  body: JSON.stringify({}),
  method: 'POST',
  headers: {
      'Content-Type': 'application/json',
      'Authorization': "Basic "+oAuth2_Auth,
  }
}

function CallBack(error, response, body) {
  console.log("GET oAuth2 RESPONSE STATUS CODE "+response.statusCode)
  console.log("GET oAuth2 RESPONSE STATUS MSG "+response.statusMessage)
  const oAuth_token = response.body.slice(17,2062); 
  oAuth2_Authorization = `Bearer ${oAuth_token}`
}

request.post(oAuth2ServerOption,CallBack)


// Middleware [ Autenticacao da DESSA API ] ===========================================================================
const app = express();
app.use(mwBasicAuth);

//Start Consumer ===========================================================================
const consumerConfig = StartKafkaConsumer();
const run = async () => {
  await consumerConfig.connect()
  await consumerConfig.subscribe({ topic, fromBeginning: true })    
  await consumerConfig.run({
    eachMessage: async ({ topic, partition, message }) => {
      //const prefix = `${topic}[${partition} | ${message.offset}] / ${message.timestamp}`
      //console.log(`[Kafka-Consumer] ${message.key} ${prefix} #${message.value}`)

      //Decode Message / Key ===========================================================
      var message_key = message.key;
      message_key = message_key.toString()
      decoded_value = await decode(message.value)
       var postData = {
        message_key: JSON.stringify(message_key),
        message_value: JSON.stringify(decoded_value), 
        topic: topic,
        partition: partition
      }
      //const Basic_Authorization = `Basic ${KAFKA_CONSUMER_CREDENTIAL}`;

      var clientServerOptions = {
        uri: consumer_sUrl,
        body: JSON.stringify({'data': postData}),
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': oAuth2_Authorization
        }
      }
      request.post(clientServerOptions, function (error, response) {
      console.log("Response Consumer CPI StatusCode "+response.statusCode);
      return;
      });        
    },
  })
}

//Consumer Logs
GetLogs(run,consumerConfig);

//App Config
app.use(express.json());
const routes = require("./routes/index.js");
app.use("/", routes);
app.listen(PORT, () => console.log(`API rodando na porta ${PORT}`));


module.exports = app;