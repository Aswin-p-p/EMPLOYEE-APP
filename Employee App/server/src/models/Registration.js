const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://aswinpp:aswinpp@cluster0.pazz29g.mongodb.net/Register-react_db?retryWrites=true&w=majority')

const schema = mongoose.Schema

const registerSchema = new schema({
    name:{type:String,required:true},
    email:{type:String,required:true},
     number:{type:String,required:true},
     qualification:{type:String,required:true}, 
     experience:{type:String,required:true},
     password:{type:String,required:true},
     image:{type:String,required:true},
     role : {type:String,require:true},
     status : {type:String,require:true}
})

const registerModel = mongoose.model('react_tb',registerSchema)

module.exports = registerModel