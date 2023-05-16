using my.bookshop as my from '../db/schema';

service CatalogService @(impl: 'srv/impl/catalog-service.js') {
    @readonly
    entity KafkaReturn {
        message: String;        
    }
    @cds.servicename: 'KafkaService'
    action producerkafka() returns KafkaReturn;
}
