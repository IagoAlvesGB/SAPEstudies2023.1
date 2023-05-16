const { CompressionTypes } = require("kafkajs");

const message = (topic, encodedMessage, cid, endOfLife, hash) => {
  return {
    topic,
    compression: CompressionTypes.GZIP,
    acks: 1,
    messages: [
      {
        key: cid,
        value: encodedMessage,
        headers: {
          cid,
          version: "1.0.0",
          endOfLife,
          type: "fct",
          hash,
        },
      },
    ],
  };
};


module.exports = message