module.exports = srv => {
    console.log(`Service name ${srv.name} is served at ${srv.path}`)

    /*
        srv.after('READ', 'Books', xs => {

            const newBooks = []
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
    */
  }