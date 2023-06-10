import {getAxiosInstance} from "./api";
const UpdateUserInfo=(data,CallBack)=>{
    getAxiosInstance().put("/User/updateUser",data)
        .then(res=>{
            const data=res.data;
            CallBack(true,data);
        })
        .catch(err=>{
            CallBack(false)
        })
}
export default UpdateUserInfo;