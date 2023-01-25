module.exports = class say {

    hello(req) { return `Hello ${req.data.to}!` } // http://localhost:4004/say/hello(to='world')
    
    sum(req) { 
       
        var length = req.data.to.length;
        var i = 0;
        var result = 0;

        while(i!=length){
            result += parseInt(req.data.to[i]);
            i++;
        }

        return result;
    }  // http://localhost:4004/say/sum(to='1234') = 10

  }
  