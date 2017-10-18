import axios from "axios";

export default {
	//pertianing to dexcom data from patient
	getDexcom: function(id) {
		return axios.get("/api/dexcom" + id);
	}
}