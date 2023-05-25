const mongoose = require('mongoose')
const Scheme = mongoose.Schema;

const student_Detail = new Scheme({
    name:String,
    age:Number,
    gender:String,

})
const Studentdata = mongoose.model('student', student_Detail)
module.exports = Studentdata