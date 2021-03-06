import axios from "axios";

export default {
//pertaining to PHYSICIAN data
    //Sends user data (Person, email, speciality, member since date, maybe pic) to backend for the LOGIN
	sendUser: function(userData) {
		return axios.get("/api/user", userData);
    },
    // Gets user data from db
    getUser: function(id) {
        return axios.get("/api/user/" + id);
    },
    //Save user to db
    saveUser: function(userData) {
        return axios.post("/api/user", userData);
				// console.log("user posted")
    }
};
