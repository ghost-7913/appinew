import GetUserInfo from '@/api/GetUserInfo';
import UpdateUserInfo from '@/api/UpdateUserInfo';
import { CircularProgress } from '@mui/material';
import React, { startTransition, useEffect, useState } from 'react';
import { CiCalendar } from 'react-icons/ci';

import { Calendar } from "react-modern-calendar-datepicker";
import "react-modern-calendar-datepicker/lib/DatePicker.css";


const Index = () => {

  const [info, setInfo] = useState({})
  const [loading, setLoading] = useState(false)
  const [selectedDay, setSelectedDay] = useState(null);
  const [CalendarStatus,setCalendarStatus]=useState(false)

  useEffect(() => {
    GetUserInfo((isoke, data) => {
      if (isoke) {
        setInfo(data)
        setLoading(true)
      }
    })

  }, [])
  useEffect(()=>{
    console.log('info',info);
  },[info])
  const sendEdit = () => {
   
    UpdateUserInfo(info, (isoke, data) => {
      if (isoke) {
        console.log('success');
        // setCalendarStatus(false)
      }
    })
  }
  return (
    <div class="userDashboard-Main-Content">
      <div class="userDashboard-Main-Content-UserInfo">
        {
          loading == false ? <CircularProgress /> :
            <>
              <div class="flex flex-wrap gap-2 justify-between w-full py-[30px]">
                <div className='flex flex-col gap-3 w-2/6'>
                  <span>نام </span>
                  <input type="text" onChange={e => setInfo(item => ({ ...item, firstName: e.target.value }))} value={info.firstName} />

                </div>
                <div className='flex flex-col gap-3 w-2/6'>
                  <span>نام خانوادگی </span>
                  <input type="text" onChange={e => setInfo(item => ({ ...item, fullName: e.target.value }))} value={info.fullName} />

                </div>
                <div className='flex flex-col gap-3 w-2/6'>
                  <span>شماره تلفن  </span>
                  <input type="text" disabled value={info.userName} />

                </div>
                <div className='flex flex-col gap-3 w-2/6'>
                  <span> ایمیل  </span>
                  <input type="email" value={info.email} />

                </div>
                <div className='flex flex-col gap-3 w-2/6'>
                  <span> تاریخ تولد  </span>
                  {/* <input type="date" value={info.registreDateDisplay} /> */}
                  <div className='flex justify-between border-[1px] p-[10px] rounded-md border-[gray]'> {info.registreDateDisplay && info.registreDateDisplay.day + "/" + info.registreDateDisplay.month + "/" + info.registreDateDisplay.year }      <CiCalendar onClick={()=>setCalendarStatus(true)} /></div>
                  {
                    CalendarStatus ==true &&   <Calendar 
                    value={selectedDay}
                    onChange={e =>{ setInfo(item => ({ ...item, registreDateDisplay: e }));setSelectedDay(e)}}
                    shouldHighlightWeekends
                    locale="fa" // add this
                  /> 
                  }
                 
                </div>


              </div>

              <button onClick={() => sendEdit()} className='absolute bottom-[5px] left-[15px] w-[30%]'>ذخیره</button>
            </>
        }

      </div>
      <div class="userDashboard-Main-Content-OrganizationalPurchase">
        <h3>اطلاعات حقوقی</h3>
        <p>
          این گزینه برای کسانی است که نیاز به خرید سازمانی (با فاکتور رسمی و
          گواهی ارزش افزوده) دارند .
        </p>
        <a href="#">
          <span>قبت اطلاعات حقوقی</span>
          <svg
            width="7"
            height="12"
            viewBox="0 0 7 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6 11L1.40683 6.88384C0.864389 6.39773 0.864389 5.60227 1.40683 5.11616L6 1"
              stroke="#0084CE"
              stroke-width="1.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default Index;
{/* <input type="text" onChange={e=>setInfo(item=>({...item,firstName:e.target.value}))} value={info.firstName + " " + info.fullName} /> */ }
