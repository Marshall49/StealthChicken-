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
    }
});

const Comment = mongoose.model("Comment", CommentSchema);
module.exports = Comment;