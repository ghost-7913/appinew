import {getAxiosInstance} from "./api";
const UploadProfilePhoto=(data,CallBack)=>{
    getAxiosInstance().post("/User/UpdateUserProfileImage",data)
        .then(res=>{
            const data=res.data;
            CallBack(true,data);
        })
        .catch(err=>{
            // CallBack(false)
        })
}
export default UploadProfilePhoto;