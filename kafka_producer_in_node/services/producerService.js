const { StartKafka, schemaId, registry } = require("../config/startKafka");
//const { logger } = require("../config/producerLog"); 
const { CompressionTypes } = require("kafkajs");
const uuid = require("uuid"); 
const crypto = require("crypto");
const topic = process.env.TOPIC;

const producerConfig = StartKafka.producer({});

module.exports = class producerService {
    newMessage = async (body,headers) => {
        return await _newMessage(body,headers);
    };
};

async function _newMessage(body,headers) {
//  const encodedMessage = await encode(body, schemaId());
  const cid = headers["x-request-id"] || uuid.v4();
  //const hash =  crypto.createHash("md5").update(encodedMessage).digest("hex");
//  console.log(cid,body,headers)
  const endOfLife =  new Date().toLocaleDateString();
//  const Message = _buildMessage(encodedMessage, cid, endOfLife, hash);
  return await _sendMessage(body,cid,endOfLife)
}


async function _sendMessage(Message,cid,endOfLife) {
  const hash = calculateHash(Message);
  const magicByte = '0';
  Message["id"] = cid;
  await producerConfig.connect()
  try {     
      console.log( `Starting post process, CorrelationId : ${cid}` );
      await producerConfig.send({
        topic: topic,
        compression: CompressionTypes.GZIP,
        acks: 1,
        messages: [
          {
            key: cid, 
            //value: JSON.stringify(Message),
            value: await registry.encode(schemaId(), Message),
            headers: {
              cid,
              version: "1.0.0",
              endOfLife,
              type: "fct",
              'magicByte': magicByte
//              hash,
            } 
          }
        ]
      });    
      console.log( `[ Kafka Producer In Node ][${cid}] - Message successfully produced, CorrelationId : ${cid}` );
      console.log( `[ Kafka Producer In Node ][${cid}] - Message successfully produced, body : ${JSON.stringify(Message)}` );
      console.log( `[ Kafka Producer In Node ][${cid}] - Message successfully produced, hash : ${hash}` );
      return { status: 201, msg: `Message successfully produced KEY: ${cid}] - ` };     
    } catch (err) {      
      console.log(`[ Kafka Producer In Node ][${cid}] - Could not write message` + err);
      return { status: 400, msg: err }; 
    }
}

function calculateHash(obj) {
  const hash = crypto.createHash('sha256');
  hash.update(JSON.stringify(obj));
  return hash.digest('hex');
}