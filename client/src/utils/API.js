import axios from "axios";

export default {
	getUser: function(userData) {
		return axios.post("/api/login", userData)
	}
}