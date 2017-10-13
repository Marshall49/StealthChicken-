module.exports = {
    comment: require('./comment')
};

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CommentSchema = new Schema({
    physicianId: { 
        type: Schema.Types.ObjectId,
        ref: "physician"
    },
    dateCreated: { 
        type: Date, 
        default: Date.now 
    },
    body: {
        type: String
    }
});