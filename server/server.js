const express = require('express');
const {User} = require("./models/User")
const app = express();
const port = 4000;
const bodyParser = require('body-parser')


app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

display_callback = (err, result) => {if (err) {throw err};
            console.log("result: " + result)
            }

app.get('/', function(req,res) {
    res.status(200);
    res.set('Content-type', 'text/json');
    User.find({}).then(users => {   // <-- Update to your call of choice.
        console.log(users)
        res.json({users});
    })
});


app.post('/', function(req,res) {
    res.status(200);
    User.create({
        "name": req.body["name"],
        "number":req.body["number"],
        "email":req.body["email"]
    })
});

app.delete('/:userId', function(req,res) {
    res.status(200);
    res.set('Content-type', 'text/html');
    User.findByIdAndRemove(req.params.userId).exec(function(err, result){
        display_callback(err, result)
        res.end("done");
        })

});

app.listen(port, function(){
  console.log('The server is running, ' +
      ' please, open your browser at http://localhost:%s', 
      port);
});