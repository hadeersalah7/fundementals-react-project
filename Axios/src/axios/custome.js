import axios from "axios";

const fetchAuth = axios.create({
    baseURL: "https://www.course-api.com",
    headers: {
        Accept: "application/json"
    }
});

export default fetchAuth