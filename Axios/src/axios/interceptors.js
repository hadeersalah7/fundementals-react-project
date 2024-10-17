import axios from "axios";

const fetchAuth = axios.create({
    baseURL: "https://www.course-api.com",
   headers: {
    Accept: "application/json"
   }
});
fetchAuth.interceptors.request.use(
    (request) => {
        // request.headers.common['Accept'] = "application/json"
        console.log("request sent!!!")
        return request
     },
    (error) => {Promise.reject(error)}
);
fetchAuth.interceptors.response.use(
    (response) => {
        console.log('response received!!!')
        return response
    },
    (error) => {
        console.log(error.response)
        if(error.response.status === 404){
            console.log("NOT FOUND")
        }
      return  Promise.reject(error)}
);

export default fetchAuth;
