// signup form    
const {Schema, model} = require('../connection');

const myschema = new Schema({
    title:String,
    description:String,
    category:String,
    text:String,
    createdAt:Date,
    image:String,
    user: {
        type: Schema.Types.ObjectId,
        ref: 'users'
    },
    video: {
        type: Schema.Types.ObjectId,
        ref: 'videos'
    },
});

module.exports = model('blogs',myschema);