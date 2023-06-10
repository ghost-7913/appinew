import {getAxiosInstance} from "./api";
const GenerateCode=(num,CallBack)=>{
    getAxiosInstance().post("/User/GenerateVerifyCode",num)
        .then(res=>{
            const data=res.data;
            CallBack(true,data);
        })
        .catch(err=>{
            // CallBack(false)
        })
}
export default GenerateCode;