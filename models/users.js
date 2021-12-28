const {Schema, model} = require('mongoose');
// let obj = {fName:'Mohammad', favFood:'Burger'}
// const  {fName,favFood} = obj

const userSchema = new Schema({
    fName: { type: String, required: true },
    favFood: String,
    age: Number
})

// Model
const User = model('User',userSchema);

// Export Model
module.exports = User;