import React, { useState, useRef } from 'react';
import { BsCalendar2Week, BsFillCartCheckFill, BsCurrencyDollar, BsFillGeoAltFill, BsArrowLeftShort, BsTicket, BsLayerBackward, BsWatch, BsTruck, BsFillCircleFill } from "react-icons/bs";
import { BiBusSchool } from "react-icons/bi";

import { CiLocationOn } from "react-icons/ci";

const index = () => {

    return (
        <div class="basket-Send-Time">
            {/* <!-- stepper --> */}

            <div class=" basket-Send-Time-Stepper ">
                {/* <!-- stepper --> */}
                <span>
                    <BsFillCartCheckFill />
                    سبد خرید
                </span>
                <div></div>
                <span>
                    <BiBusSchool />
                    زمان و نحوه ارسال
                </span>
                <div></div>
                <span>
                    <BsCurrencyDollar />
                    پرداخت
                </span>



            </div>
            {/* <!-- address  & total price --> */}
            <div className='flex justify-between flex-wrap  '>
                {/* address */}
                <div className='2xl:w-8/12 xl:w-8/12 lg:w-8/12 md:w-full sm:w-full border-[1px] rounded-[9px] border-border-color p-[15px] flex flex-col gap-[40px] '>
                    {/* title */}
                    <span className='text-title-color'>آدرس تحویل سفارش </span>
                    {/* address */}
                    <p className='flex items-center'>
                        <CiLocationOn className='text-[24px] mx-[10px]' />
                        <span className='font-bold'>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.</span>
                    </p>
                    {/* reciever name */}
                    <div className='flex justify-between items-center'>
                        <span className='text-title-color'>فاطمه عیسی پور</span>
                        <a href="" className='flex items-center text-[blue] underline'> تغییر  | ویرایش <BsArrowLeftShort /></a>
                    </div>
                    {/* sender central */}
                    <div className=' flex justify-between items-center border-[2px] rounded-[20px] p-[10px] border-primary-color bg-[##FFF7F0]'>
                        {/* right */}
                        <p className=' 2xl:text-[24px] font-medium w-max'>مراکز دریافت حضوری نزدیک به این آدرس</p>
                        {/* left */}
                        <div className='flex items-center justify-evenly flex-wrap  flex-1 md:flex-row sm:flex-col sm:gap-3'>
                            <span className='flex items-center text-title-color lg:text-[14px] text-[10px]'>
                                <BsTicket className='mx-[5px]' />
                                ارسال ارزانتر
                            </span>
                            <span className='flex items-center text-title-color lg:text-[14px] text-[10px]'>
                                <BsLayerBackward className='mx-[5px]' />
                                تنوع مکانی
                            </span>
                            <span className='flex items-center text-title-color lg:text-[14px] text-[10px]'>
                                <BsWatch />
                                زمان دلخواه
                            </span>
                            <BsArrowLeftShort />
                        </div>
                    </div>
                </div>
                {/* total price */}
                <div className= 'w-full 2xl:w-3/12 xl:w-3/12 lg:w-3/12 md:w-full sm:w-full flex flex-col justify-between border-[1px] rounded-[9px] border-border-color p-[15px]  text-[14px]'>
                    <div className='flex justify-between border-b-[1px] border-border-color py-[15px]'>
                        <span>قیمت کالا ها (1)</span>
                        <span>25,000 تومان</span>
                    </div>
                    <div className='flex flex-col border-b-[1px] border-border-color py-[15px]'>
                        <p className='flex justify-between items-center'>
                            <span>هزینه ارسال 1 مرسوله</span>
                            <span>رایگان</span>
                        </p>
                        <a className='text-[14px] text-[blue] flex items-center' href="">اطلاعات بیشتر  <BsArrowLeftShort /></a>

                    </div>
                    <div className='flex justify-between  '>
                        <span>قابل پرداخت</span>
                        <span>25,000 تومان</span>
                    </div>
                    <button className='!bg-[white] text-primary-color !border-[1px]'>انتخاب زمان ارسال</button>

                </div>

            </div>
            {/* <!-- choose time  --> */}
            <div className='flex justify-between p-[15px] border-[1px] rounded-[9px] border-border-color my-[10px] lg:flex-row  flex-col'>
                {/* right */}
                <div className='2xl:w-3/12'>
                    {/* title */}
                    <p className='flex gap-4 '>
                        <span className='flex items-center gap-2'> <BsTruck className='text-primary-color text-[20px] ' />ارسال عادی </span>
                        <span>1 روز</span>
                    </p>
                    {/* products */}
                    <div className=' flex flex-wrap'>
                        {/* product card */}
                        <div className='w-4/12'>
                            <img src="/img/Rectangle 252.jpg" alt="" />
                            <span className='flex items-center gap-3'> <BsFillCircleFill />مشکلی  </span>
                        </div>
                    </div>
                </div>
                {/* calandar */}
                <div className='2xl:w-8/12'>

                    {/* title */}
                    <p className='flex gap-4 '>
                        <span className='flex items-center gap-2'> <BsCalendar2Week className=' text-[20px] ' />انتخاب زمان ارسال </span>

                    </p>
                    {/* main Calendatr */}
                    <div className='flex flex-col border-[1px] border-border-color rounded-[9px] my-[10px]'>
                        {/* days */}
                        <div className='flex gap-[40px] items-center py-[10px] px-[20px] text-title-color border-b-[1px] border-border-color' >
                            {/* days section */}
                            <div className='flex flex-col items-center '>
                                <span>شبنه</span>
                                <span>20</span>
                            </div>
                            <div className='flex flex-col items-center '>
                                <span>یکشنبه</span>
                                <span>21</span>
                            </div>
                            <div className='flex flex-col items-center '>
                                <span>دوشنبه</span>
                                <span>22</span>
                            </div>
                            <div className='flex flex-col items-center '>
                                <span>سه شنبه</span>
                                <span>23</span>
                            </div>
                            <div className='flex flex-col items-center '>
                                <span>چهار شنبه</span>
                                <span>24</span>
                            </div>
                            <div className='flex flex-col items-center '>
                                <span>پنج شنبه</span>
                                <span>25</span>
                            </div>
                        </div>
                        {/* hours */}
                        <div className='flex flex-col gap-y-5 py-[10px] px-[20px] text-title-color'>
                            {/* hours section */}
                            <div className='flex items-center gap-2 border-b-[1px] border-border-color px-[20px]'>
                                <input type="radio" />
                                ساعت 9 تا 12
                            </div>
                            <div className='flex items-center gap-2 border-b-[1px] border-border-color px-[20px]'>
                                <input type="radio" />
                                ساعت 9 تا 12
                            </div>
                            <div className='flex items-center gap-2 border-b-[1px] border-border-color px-[20px]'>
                                <input type="radio" />
                                ساعت 9 تا 12
                            </div>
                            <div className='flex items-center gap-2  px-[20px]'>
                                <input type="radio" />
                                ساعت 9 تا 12
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
            <a className='text-[blue]' href="">بازگشت به سبد خرید</a>
        </div>
    );
};

export default index;