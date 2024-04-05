import axios from "axios";

const baseURL = "https://blood-donation-pn3z.onrender.com/";
//const baseURL = "http://localhost:3177/";

export default axios.create({ baseURL: baseURL });
