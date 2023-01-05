const mysrvdemo = function(srv) {
    
    srv.on("myfoobar", function(req,res){        
        return "Hello World for You: " + req.data.msg; // http://localhost:4004/mysrvdemo/myfoobar(msg='Iago')
    });    
};

module.exports = mysrvdemo;