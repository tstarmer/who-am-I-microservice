var express = require('express');
var app = express();

app.get("/", function(req,res){
    
    // console.log("request", Object.keys(req.headers["user-agent"]))
    // console.log(req.headers["user-agent"])
    // console.log("response", Object.keys(req.headers["accept-language"]))
    // console.log(req.headers["accept-language"])
    
    var ip = req.ip;
    var language = req.headers["accept-language"];
    var software = req.headers["user-agent"];
    
    console.log('software =', software)
    console.log('language = ', language)
    // console.log(ip)
    // clean the ip
    if(ip.substr(0,7) == "::ffff:"){
        ip = ip.substr(7);
    }
    // console.log(ip)
    
    //grab the system
    software = software.substring(software.indexOf("(")+1,software.indexOf(")"));
    
    //clean the language
    language = language.substring(0,language.indexOf(","));
    
    console.log('software =', software)
    console.log('language = ', language)
    
    
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