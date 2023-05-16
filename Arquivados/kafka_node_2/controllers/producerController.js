const ProducerSvc = require("../services/producerService");
const oProducerService = new ProducerSvc();

module.exports = class ProducerController {
  newMessage = async (req, res, next) => {
    try {
      //Logica
      const { body, headers } = req;    
      const aResponse = await oProducerService.newMessage(body,headers)
      //Response API
      if (aResponse.status === 200 || aResponse.status === 201) {
        return res.status(201).json(aResponse.msg);
      } else {
        return res.status(aResponse.status).json(aResponse.msg);
      }      
    } catch (error) {
      next({ status: 500, msg: "Erro ao postar mensagem Kafka", error });
    }
  };
}