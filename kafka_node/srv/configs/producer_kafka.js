  function StartKafkaProducer(StartKafka){
      const producerConfig = StartKafka.producer({});
      return producerConfig;
  }

  const encode = async (body, id, registry) => {
      return await registry.encode(id, body);
    };
  
  module.exports = {
    StartKafkaProducer,
    encode
  };