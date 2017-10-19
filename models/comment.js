const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CommentSchema = new Schema({
    physicianId: {
        type: Schema.Types.ObjectId,
        ref: "Physician"
    },
    dateCreated: {
        type: Date,
        default: Date.now
    },
    body: {
        type: String
    },
    dCaseId: {
      type:mongoose.Schema.Types.ObjectId, ref: 'dCase'
    }
});


const Comment = mongoose.model("Comment", CommentSchema, "Comment");


module.exports = Comment;
