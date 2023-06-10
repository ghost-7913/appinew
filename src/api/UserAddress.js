import {getAxiosInstance} from "./api";
export const getUserAddress=(CallBack)=>{
    getAxiosInstance().get(`/User/UserAdress`)
        .then(res=>{
            const data=res.data;
            CallBack(true,data);
        })
        .catch(err=>{
            CallBack(false)
        })
}
export const AddUserAddress=(data,CallBack)=>{
    getAxiosInstance().post("/User/UserAdress",data)
        .then(res=>{
            const data=res.data;
            CallBack(true,data);
        })
        .catch(err=>{
            CallBack(false)
        })
}
export const UpdateUserAddress =(data,CallBack)=>{
    getAxiosInstance().put("/User/UserAdress",data)
    .then(res=>{
        const data=res.data;
        CallBack(true,data);
    })
    .catch(err=>{
        CallBack(false)
    })
}
export const DeleteUserAddress=(id,CallBack)=>{
    getAxiosInstance().delete("/User/UserAdress",id)
    .then(res=>{
        const data=res.data;
        CallBack(true,data);
    })
    .catch(err=>{
        CallBack(false)
    })
}
export const GetLocation=(CallBack)=>{
    getAxiosInstance().get("/Location/GetProvincesWithCities")
    .then(res=>{
        const data=res.data;
        CallBack(true,data);
    })
    .catch(err=>{
        CallBack(false)
    })
}
