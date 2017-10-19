const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CommentSchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    dateCreated: {
        type: Date,
        default: Date.now
    },
    body: {
        type: String
    },
    dCaseId: {
      type:mongoose.Schema.Types.ObjectId, 
      ref: 'dCase'
    }
});


const Comments = mongoose.model("Comments", CommentSchema, "Comments");


module.exports = Comments;
