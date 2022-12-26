var express = require("express");
var router = express.Router();
var Client = require("node-rest-client").Client;
var client = new Client();

router.get("/", function(req, res) {
  // let queries= req.query
  // console.log('query: ', queries);
  // let url='https://v1.api.amethyste.moe/generate';
  var args = {
    // host: url,
    // path: "/api/action/param1/value1/param2/value2",
    // method: "GET",
    // data: { 
    //   test: "hello" 
    // },
    // headers: {
    //   "Authorization": "Bearer " + "250e3f7a6f3ff2aebe8f13d71a097c153f9b4cef84aa87b3687dfe6633883e0bdfbc2e3b7afc719160bc53091efe3015fc0125acd2cfebc4a12a7c7ddc1c41f1"
    // }
    headers: ('Access-Control-Allow-Origin:*')
  };

  // client.get(url,args, function (data, response) {
  //     res.json({...data})
  // });
  
});