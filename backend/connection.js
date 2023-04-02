//importing mongoose package
const mongoose = require('mongoose'); //req

const url= `mongodb+srv://prakver9:prakhar@cluster0.praik4n.mongodb.net/autoblogger?retryWrites=true&w=majority`

//async function - returns promise
mongoose.connect(url)
.then((result) => {
    console.log('database connected');
    
}).catch((err) => {
    console.error(err);
    
});

module.exports=mongoose;