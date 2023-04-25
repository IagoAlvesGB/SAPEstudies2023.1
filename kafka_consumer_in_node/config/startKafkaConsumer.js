const { StartKafka, clientId} = require("./startKafka");

function StartKafkaConsumer(){
    consumerConfig = StartKafka.consumer({
     groupId: clientId,
     minBytes: 5,
     maxBytes: 1e6,
     maxWaitTimeInMs: 3000,
   })
 
   return consumerConfig;
 }

 module.exports = {
    StartKafkaConsumer
  }