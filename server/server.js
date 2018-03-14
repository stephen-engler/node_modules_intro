//require is a thing from node, lets us bring in code from other spots
//takes in a name of a node module you've installed or a path to a file inside your project

let express = require('express');

let app = express();

const PORT = 5001;
//inport the entire class
let Person = require('./modules/person.js');//class
let greet = require('./modules/greet.js');//function
let foodModule = require('./modules/food.js');//object
// we could also export Strings, numbers, objects, arrays...

let dane = new Person('Dane');
let ally = new Person('Ally');

foodModule.printFood();

console.log(greet(ally));

//request and response are arguments // the first is the request, second is response, order matters 
app.get('/greet', (request, response)=> {
    let responseString = greet(ally);
    response.send(responseString);
});


//listen for requests
app.listen(PORT,()=>{
    console.log('listen on port', PORT); 
});