import {getAxiosInstance} from "./api";
const GetUserInfo=(CallBack)=>{
    getAxiosInstance().get("/User/GetUser")
        .then(res=>{
            const data=res.data;
            CallBack(true,data);
        })
        .catch(err=>{
            CallBack(false)
        })
}
export default GetUserInfo;