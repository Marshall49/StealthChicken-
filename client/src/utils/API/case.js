import axios from "axios";

export default {
// pertaining to CASES physician has uploaded 
    // save case to db
    saveCase: function(caseData) {
        return axios.post("/api/dashboard", caseData);
    },
    //retrieve case from db
    getCase: function(id) {
        return axios.get("/api/dashboard" + id);
    },
    // get list of cases from db
    getCases: function() {
        return axios.get("/api/dashboard")
    }, 
    //deletes case
    deleteCase: function(id) {
        return axios.delete("/api/dashboard" + id)
    }
};