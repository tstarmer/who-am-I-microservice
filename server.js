var express = require('express');
var app = express();

app.get("/", function(req,res){
    
    var ip = req.ip;
    var language = req.headers["accept-language"];
    var software = req.headers["user-agent"];
    
    // clean the ip
    if(ip.substr(0,7) == "::ffff:"){
        ip = ip.substr(7);
    }

    //grab the system
    software = software.substring(software.indexOf("(")+1,software.indexOf(")"));
    
    //clean the language
    language = language.substring(0,language.indexOf(","));

    var output = {
        "ipaddress": ip,
        "language": language,
        "software": software
    }
    
    res.send(output);
})

app.listen(process.env.PORT || 8080, function(){
  console.log('App listening on port ', process.env.PORT)
})