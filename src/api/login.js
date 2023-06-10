import {getAxiosInstance} from "./api";
const Login=(data,CallBack)=>{
    getAxiosInstance().post("/User/Login",data)
        .then(res=>{
            const data=res.data;
            CallBack(true,data);
        })
        .catch(err=>{
            // CallBack(false)
        })
}
export default Login;