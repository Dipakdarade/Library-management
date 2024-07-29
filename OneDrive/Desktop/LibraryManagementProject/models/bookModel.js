const { default: mongoose } = require("mongoose");
// 0213337306
// kkbk0001765
const bookSchema = new mongoose.Schema({
    Title:{
        type:String,
        required:true,
    },
    Author:{
        type:String,
        required:true,
    },
    Date:{
        type:Date,
        default:Date.now
    }

})
module.exports = mongoose.model('Book',bookSchema);
