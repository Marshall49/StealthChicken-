import axios from "axios";

export default {
// pertaining to CASES physician has uploaded 
    // save case to db
    saveCase: function(caseData) {
        return axios.post("/API/dashboard", caseData);
    },
    //retrieve case from db
    getCase: function(id) {
        return axios.get("/API/dashboard" + id);
    },
    // get list of cases from db
    getCases: function() {
        return axios.get("/API/dashboard")
    }, 
    //deletes case
    deleteCase: function(id) {
        return axios.delete("/API/dashboard" + id)
    }
};