// server
const { text } = require('express');
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const hostname = 'localhost'
app.listen(2000,()=>{
    console.log('server running at http://localhost:2000')
});
app.get('/', (req, res)=>{
    res.send('Hello World')
});

app.get('/about', (req, res)=>{
    res.send(Client)
});



// Database
mongoose.connect(' mongodb://127.0.0.1:Curtisdb',{ useNewUrlParser: true,useUnifiedTopology: true });
const db = mongoose.connection
db.on('error',(error)=>{
    console.log('connection error');
});
db.once('open',()=>{
    console.log('db connect');
});

    
const Client = mongoose.model('Client',{
  
    name:{type:String},
    Amount:{type:Number} ,
    CarModel:{type:String},
    Condition:{type:String},
    Amount: {type:String}
    });

Client.insertMany([
    {
        name:'Katuramu Curtis', Amount: 5000000, CarModel:'C320', Condition:'used', Amount: 20000000
    },
    {
        name:'Ruth Nabs', Amount: 60000000, CarModel:'Toyota', Condition:'new', Amount: 299000000
    },
])
.then(()=>{
    console.log('document added')
});



