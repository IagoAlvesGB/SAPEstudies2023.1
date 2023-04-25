const logger = require('./producer_logger');


const sender = async (message, producerConfig, cid, hash ) => {
	 await kafka.connect()
		try {

			logger.info( `Starting post process, CorrelationId : ${cid}` );
			await producerConfig.send(message)
			logger.info( `[kafka-Producer][${cid}] - Message successfully produced, CorrelationId : ${cid}` );
            logger.debug( `[kafka-Producer][${cid}] - Message successfully produced, body : ${JSON.stringify(message)}` );
            logger.debug( `[kafka-Producer][${cid}] - Message successfully produced, hash : ${hash}` );
		} catch (err) {
			//In this block the Producer need to provide reprocessing/retry mechanism.
			throw new Error("Could not write message " + err);
		}finally{
			logger.info( 'Producer is disconnected' );
			kafka.disconnect()
		}
}


module.exports = sender