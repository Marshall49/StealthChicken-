import axios from "axios";

export default {
// pertaining to cases physician has COMMENTED on
    // save comment to db
    saveComment: function(commentData) {
        return axios.post("/api/dashboard", commentData);
    }, 
    //retrieve comment from db
    getComment: function(id) {
        return axios.get("/api/dashboard" + id);
    },
    // get list of comments from db
    getComments: function() {
        return axios.get("/api/dashboard")
    },
    //deletes comment
    deleteComment: function(id) {
        return axios.delete("/api/dashboard" + id)
    } 

};