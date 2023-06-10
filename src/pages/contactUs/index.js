import React from 'react';
import { BsInstagram, BsLinkedin, BsTelegram, BsYoutube } from 'react-icons/bs';
import { useForm } from "react-hook-form";

const Index = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <div className='main-ContactUs'>
            <h1>تماس با ما </h1>
            <div className='main-ContactUs-Content'>
                {/* explain */}
                <div className='main-ContactUs-Content-Explain'>
                    <div className='main-ContactUs-Content-Explain-Section'>
                        <span>آدرس </span>
                        <p>کرج - چهار راه طالاقانی - طالاقانی شمالی- جنب پست - کوچه بهار</p>
                    </div>
                    <div className='main-ContactUs-Content-Explain-Section'>
                        <span>ایمیل</span>
                        <p>apinewApp@gmail.com</p>
                    </div>
                    <div className='main-ContactUs-Content-Explain-Section'>
                        <span>شماره تلفن </span>
                        <p>026-3 222 22 22 </p>
                    </div>
                    <div className='main-ContactUs-Content-Explain-Section'>
                        <span>لینک شبکه های اجتماعی </span>
                        <p className='flex !gap-[40px] !py-[30px]'>
                            <BsInstagram />
                            <BsTelegram />
                            <BsLinkedin />
                            <BsYoutube />
                        </p>
                    </div>
                </div>
                {/* message box */}
                <div className='main-ContactUs-Content-Message'>
                    <form className='flex flex-col  ' onSubmit={handleSubmit(onSubmit)}>
                        <div>
                            <label className='text-gray2' >نام و ناخانوداگی  </label>
                            <input className='w-12/12 '  {...register("phone_Number", { required: true })}  />
                        </div>
                        <div>
                            <label className='text-gray2'>ایمیل</label>
                            <input type='number' className='w-12/12 '  {...register("phone_Number", { required: true })} />
                        </div>
                        <div>
                            <label className='text-gray2'>متن پیام </label>
                            <textarea className='w-12/12 ' type='number'  {...register("phone_Number", { required: true })} name="" id="" cols="30" rows="5"></textarea>
                       
                        </div>
                        {errors.phone_Number || errors.password ? <p role={"alert"} >{errors.mail?.message}</p> : null}
                        {/* <input className='bg-secondary-color w-[30%] text-[white]' type="submit" value={"ارسال پیام"} /> */}
                        <button>ارسال پیام </button>
                    </form>

                </div>
            </div>

        </div>
    );
};

export default Index;