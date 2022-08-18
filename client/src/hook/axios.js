import axios from "axios";

const Axios = axios.create({
    baseURL: "http://localhost:8080",
    timeout: 5000
})

export default Axios;



// "https://us-central1-event1400.cloudfunctions.net/app"