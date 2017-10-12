import axios from "axios";

export default {
//pertaining to Physician data
    //Sends user data (Person, email, speciality, member since date, maybe pic) to backend for the LOGIN 
	sendUser: function(userData) {
		return axios.post("/api/physician", userData);
    }
    // Gets user data from db
    getUser: function(id) {
        return axios.get("/api/physician/" + id);
    }
    //Save user to db
    saveUser: function(userData) {
        return axios.post("/api/physician", userData);
    } 

// pertaining to cases physician has uploaded 
    // save case to db
    saveCase: function(caseData) {
        return axios.post("/api/dashboard", caseData);
    }
    //retrieve case from db
    getCase: function(id) {
        return axios.get("/api/dashboard" + id);
    } 
    // get list of cases from db
    getCases: function() {
        return axios.get("/api/dashboard")
    } 
    //deletes case
    deleteCase: function(id) {
        return axios.delete("/api/dashboard" + id)
    } 

// pertaining to cases physician has commented on
    // save comment to db
    saveComment: function(commentData) {
        return axios.post("/api/dashboad", commentData);
    } 
    //retrieve comment from db
    getComment: function(id) {
        return axios.get("/api/dashboard" + id);
    }
    // get list of comments from db
    getComments: function() {
        return axios.get("/api/dashboard")
    }
    //deletes comment
    deleteComment: function(id) {
        return axios.delete("/api/dashboard" + id)
    } 

}