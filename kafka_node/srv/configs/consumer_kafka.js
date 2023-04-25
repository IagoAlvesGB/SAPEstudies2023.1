console.log("Kafka_Consumer_Config");

 function StartKafkaConsumer(StartKafka,clientId){
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
