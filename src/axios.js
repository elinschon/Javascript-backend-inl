import axios from "axios";

//baseURL så vi inte behöver skriva in det i varje url
const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3"
})

export default instance;

