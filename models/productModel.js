const mongoose = require('mongoose');
module.exports = mongoose.model('Product', mongoose.Schema(
    {
        task:{
            type:String,
            required:[true, "Please enter a task description"]
        },
        status:{
            type:Boolean,
            required:true,
            default:false
        }
    },
    {
        timestamps: true 
    }
));