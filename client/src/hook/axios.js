import axios from "axios";

const Axios = axios.create({
    baseURL: "https://us-central1-event1400.cloudfunctions.net/app",
    timeout: 5000
})

export default Axios;