import axios from "axios";

const baseURL = "https://blood-donation-pn3z.onrender.com/";

export default axios.create({ baseURL: baseURL });
