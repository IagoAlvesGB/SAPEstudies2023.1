const kafka = require('node-rdkafka');

module.exports = srv => {
    srv.after('READ', 'Books', xs => {

        
        const kafka = require('node-rdkafka');

        const consumer = new kafka.KafkaConsumer({
        'group.id': 'my-group',
        'metadata.broker.list': 'kafka:9092',
        }, {});

        consumer.connect();

        consumer.on('ready', () => {
        consumer.subscribe(['ecommerce.nfe.authorization.v2']);
        consumer.consume();
        });

        consumer.on('data', (message) => {
        const payload = message.value.toString();
        console.log(payload);
        });


      
    const newBooks = []
    console.log(`READ BOOKS`);    
        if(xs.length >= 1){
            xs.forEach(x => {
                if(x.stock > 500){
                    x.title = '(10% off!)' + x.title
                    x.price = x.price - (x.price*0.1)
                }
                newBooks.push(x);
            });
    
            return newBooks;
        }
       
    })

    srv.after('POST', 'Books', xs => {

        /*
        const stream = kafka.Producer.createWriteStream({
            'metadata.broker.list': 'localhost:9092'
        }, {}, { topic: 'ecommerce.nfe.authorization.v2' })

        const result = stream.write(Buffer.from('hi'));
     */
    })

  }