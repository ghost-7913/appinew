import axios from "axios";
export const getAxiosInstance = (item) => {
    const token= localStorage.getItem("token")
    return axios.create({
        baseURL: "https://api.appinew.com/api",
        headers: {
            ContentType: 'application/json',
            Authorization: `Bearer ${token} `  ,
            'Access-Control-Allow-Origin': '*',
            // Accept: "application/json"
        },
       


    })
}