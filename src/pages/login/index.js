import React, { useEffect, useState } from 'react';
import { BsBackspace, BsFillXOctagonFill } from 'react-icons/bs';
import { useForm } from "react-hook-form";
import VerifyCode from '@/api/login';
import { getAxiosInstance } from '@/api/api';
import Countdown from 'react-countdown';
import Swal from 'sweetalert2';
import GenerateCode from '@/api/GenerateCod';
import Login from '@/api/login';
import { useRouter } from 'next/router';
import handler from '../api/hello';
const data = {
    Username: null, Password: null, Client_id: 'AppinewSiteClient', Client_secret: 'AppinewSecretClient', Grant_type: ''
}
const Index = () => {
    
    const [counter, setCounter] = useState(false)
    const router = useRouter();
    // const [info, setInfo] = useState({ username: null, password: null, client_id: 'AppinewSiteClient', client_secret: 'AppinewSiteSecret', grant_type: 'passwor' })
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const generateCode = () => {
        console.log(data);
        if (data.Username != null) {
            // getAxiosInstance().post("/User/GenerateVerifyCode", { phoneNumber: data.Username })
            GenerateCode( { phoneNumber: data.Username },(isoke,data)=>{

            })
            setCounter(true)
            document.getElementById("password").disabled=false
        }
        else if (data.Username == null || data.Username == "") {
            Swal.fire({
                icon: 'error',
                title: '',
                text: 'لطفا شماره تلفن خود را وارد کنید',

            })
        }

    }
    const form =  new FormData()

    const login = () => {
        form.append('Username',data.Username)
        form.append('Password',data.Password)
        form.append('Client_id',data.Client_id)
        form.append('Client_secret',data.Client_secret)
       console.log('dataaaaaa',form);
        // getAxiosInstance().post("/User/Login", form)
        Login(form,(isoke,data)=>{
            if(isoke){
                localStorage.setItem('token',data.access_token)
                router.push('/')
            }
            else{
                alert('خطایی رخداده است ')
            }
        })
    }
    const renderer = ({ hours, minutes, seconds, completed }) => {
        if (completed) {
            // Render a completed state
            return 'ok';
        } else {
            // Render a countdown
            return <span>{hours}:{minutes}:{seconds}</span>;
        }
    };

    return (
        <div className='fixed top-0 right-0 backdrop-blur-3xl drop-shadow-lg	 w-[100%] h-[100%] flex justify-center items-center   modal'>
            <div id='modal' className='absolute p-[40px] pb-[20px] flex flex-col justify-between  bg-[#ffffff7d] rounded-[10px]  w-[100%]  xl:w-[22%] lg:w-[25%]  duration-1000 '>
                {/* title */}
                <div class="relative flex justify-center  items-center w-[100%] h-[100%]">

                    <BsBackspace className={"absolute left-[0px] top-[-20px] fa fa-close text-gray"} />
                    {/* <span>نظر سنجی </span> */}
                </div>
                {/* form */}
                <div class="flex flex-col justify-center modal-Form  ">

                    <div className='modal-Form-Tabs'>
                        <button id='signUp'  >ورود </button>

                    </div>
                    <div className='modal-Form-Detail'>

                        <div className='flex flex-col' >
                            {/* register your input into the hook by invoking the "register" function */}
                            <label>شماره تلفن همراه</label>

                            {/* <input type={"number"} onChange={e => setInfo(item => ({ ...item, username: e.target.value }))} /> */}
                            <input type={"number"} onChange={e => { data.Username = e.target.value }} />

                            {/* include validation with required or other standard HTML validation rules */}
                            <label className='my-[10px]'></label>
                            <div className='flex items-center justify-between '>
                                {/* <input className='w-[48%]' type={"password"} onChange={e => setInfo(item => ({ ...item, password: e.target.value }))} /> */}
                                <input id='password' className='w-[48%]' type={"password"} onChange={e => {data.Password = e.target.value}} placeholder='رمز را وارد کنید' disabled />
                                {
                                    counter == false && <button onClick={() => generateCode()} className='w-[48%] text-[12px]'>ارسال رمز عبور  </button>
                                }


                                {
                                    counter == true && <div className=' flex items-center justify-center text-[white] w-[48%] bg-primary-color  h-[40px] rounded-[8px]'>
                                        <Countdown
                                            date={Date.now() + 120000}
                                            renderer={renderer}
                                        />
                                    </div>
                                }




                            </div>
                            {/* errors will return when field validation fails  */}
                            {/* <span className='text-primary text-[12px]' >رمز عبور خود را فراموش کرده اید؟</span> */}
                            {/* {errors.phone_Number || errors.password ? <span>This field is required</span> : null} */}


                            {/* <input className='bg-border-color text-[white] box-shadow !mt-[30px]' type="submit" value={"ورود"} /> */}

                        </div>
                        <button onClick={e => login()} className='my-[15px] w-full'>ورود</button>
                        <p className='text-[10px] text-center mt-[15px] leading-[20px]'>
                            با ثبت نام در اپینو، شما <span className='text-primary'>شرایط و قوانیـــن</span> استفاده از سرویس های سایت اپینو و<span className='text-primary'> قوانین حریم خصوصی</span> آن را میپذیرید.
                        </p>



                    </div>
                </div>
            </div>
        </div>
    );
};

export default Index;