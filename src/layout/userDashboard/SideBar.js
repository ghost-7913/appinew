import UploadProfilePhoto from '@/api/UploadProfilePhoto';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useRef, useState } from 'react';
import { AiOutlineHome, AiOutlineShopping, AiOutlineHeart, AiFillWechat, AiOutlineEnvironment, AiOutlineWallet, AiOutlineBell, AiOutlineEye, AiOutlineUser, AiOutlineComment, AiOutlineExport } from "react-icons/ai";
import { BiArrowFromRight, BiPen } from 'react-icons/bi';
import { BsFillPersonFill, BsFillPersonPlusFill, BsPencilFill, BsXLg } from 'react-icons/bs';

const SideBar = () => {
  const router = useRouter()
  const inputRef = useRef();
  const [imageFile, setImageFile] = useState();
  const [imgProf, setImgProf] = useState()
  const handleAvatarChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      setImageFile(e.target.files[0]);
      const fomrData = new FormData();
      fomrData.append("profileImage", imageFile);
      UploadProfilePhoto(fomrData, (isoke, data) => {
        if (!isoke) {
          // toast.error(data);
        }
        else {
          // toast.success("عکس شما با موفقیت ارسال شد");
          getImage()
        }
      })
    }
  }
  useEffect(() => {
    if (typeof window !== 'undefined') {
      if (localStorage.getItem("img")) {
        setImgProf(localStorage.getItem("img"))
      }
      // else {
      //   return "/img/user.png";
      // }


    }

  }, [])
  // const getImage = () => {

  // }
  return (
    <div id='prof-Sidebar' class="userDashboard-Main-Sidebar">
      {/* <!-- Slider title --> */}
      <div class="userDashboard-Main-Sidebar-Title">
        <div class="userDashboard-Main-Sidebar-Title-1section">
          <div class="userDashboard-Main-Sidebar-Title-1section-Profile">
            {/* <img src={getImage()} alt="" className='!w-[90px]  rounded-full ' /> */}
            {
              imgProf  ? <img src={imgProf} alt="" className='!w-[90px]  rounded-full ' /> : <img className='!w-[90px]' src="/img/user.png" alt="" />
            }
            {/* <BsFillPersonPlusFill onClick={() => inputRef.current.click()} className='text-[50px] border-[1px] p-[10px] rounded-full ' /> */}
            <input ref={inputRef} onChange={handleAvatarChange} type="file" className='hidden' />
            <BsPencilFill onClick={() => inputRef.current.click()} className=' cursor-pointer absolute bottom-0 left-[55px]  fill-primary-color bg-[white] rounded-full p-[5px] text-[30px]' />
          </div>
          <div class="userDashboard-Main-Sidebar-Title-1section-Wallet">
            <div
              class="userDashboard-Main-Sidebar-Title-1section-Wallet-Circle"
            ></div>
            <p class="userDashboard-Main-Sidebar-Title-1section-Wallet-Txt">
              کیف پول
            </p>
          </div>
          <div class="userDashboard-Main-Sidebar-Title-1section-Activation">
            <div
              class="userDashboard-Main-Sidebar-Title-1section-Activation-Circle"
            ></div>
            <p
              class="userDashboard-Main-Sidebar-Title-1section-Activation-Txt"
            >
              فعال سازی
            </p>
            <BiArrowFromRight />
          </div>
        </div>
        <div class="userDashboard-Main-Sidebar-Title-2section">
          <div class="userDashboard-Main-Sidebar-Title-2section-Edit">
            <BsXLg onClick={() => { document.getElementById("prof-Sidebar").style.right = "-100%" }} />
          </div>
          <div class="userDashboard-Main-Sidebar-Title-2section-Price">
            <p>20000 تومان</p>
          </div>
        </div>
      </div>
      <div class="userDashboard-Main-Sidebar-Line"></div>
      {/* <!-- Slider Menu  --> */}
      <div class="userDashboard-Main-Sidebar-Menu">
        <ul class="userDashboard-Main-Sidebar-Menu-Ul">
          {/*  <!-- li --> */}
          <li class="userDashboard-Main-Sidebar-Menu-Ul-Li">
            <Link href={""} class="userDashboard-Main-Sidebar-Menu-Ul-Li-a">
              <AiOutlineHome />
              <span>خلاصه وضعیت</span>
            </Link>
          </li>
          {/*  <!-- li --> */}
          <li class="userDashboard-Main-Sidebar-Menu-Ul-Li">
            <Link href="/u-Dashboard/orders" class="userDashboard-Main-Sidebar-Menu-Ul-Li-a">
              <AiOutlineShopping />

              <span>سفارش ها </span>
            </Link>
          </li>
          {/*  <!-- li --> */}
          <li class="userDashboard-Main-Sidebar-Menu-Ul-Li">
            <Link href="/u-Dashboard/favourites" class="userDashboard-Main-Sidebar-Menu-Ul-Li-a">
              <AiOutlineHeart />
              <span>علاقه مندی ها </span>
            </Link>
          </li>
          {/*  <!-- li --> */}
          <li class="userDashboard-Main-Sidebar-Menu-Ul-Li">
            <Link href="/u-Dashboard/review" class="userDashboard-Main-Sidebar-Menu-Ul-Li-a">
              <AiFillWechat />
              <span>دیدگاه ها</span>
            </Link>
          </li>
          <li class="userDashboard-Main-Sidebar-Menu-Ul-Li">
            <Link href="/u-Dashboard/Address" class="userDashboard-Main-Sidebar-Menu-Ul-Li-a">
              <AiOutlineEnvironment />
              <span>آدرس ها</span>
            </Link>
          </li>
          <li class="userDashboard-Main-Sidebar-Menu-Ul-Li">
            <Link href="/u-Dashboard/CartesCadeaux" class="userDashboard-Main-Sidebar-Menu-Ul-Li-a">
              <AiOutlineWallet />
              <span>کارت های هدیه</span>
            </Link>
          </li>
          <li class="userDashboard-Main-Sidebar-Menu-Ul-Li">
            <Link href="/u-Dashboard/messages" class="userDashboard-Main-Sidebar-Menu-Ul-Li-a">
              <AiOutlineComment />
              <span>پیغام ها</span>
            </Link>
          </li>
          <li class="userDashboard-Main-Sidebar-Menu-Ul-Li">
            <Link href="/u-Dashboard/recentVisit" class="userDashboard-Main-Sidebar-Menu-Ul-Li-a">
              <AiOutlineEye />
              <span> بازدید های اخیر</span>
            </Link>
          </li>
          <li class="userDashboard-Main-Sidebar-Menu-Ul-Li">
            <Link href="/u-Dashboard/info" class="userDashboard-Main-Sidebar-Menu-Ul-Li-a">
              <AiOutlineUser />
              <span>اطلاعات حساب کاربری</span>
            </Link>
          </li>
          <li onClick={()=>{localStorage.clear();router.push('/')}} class="userDashboard-Main-Sidebar-Menu-Ul-Li cursor-pointer">
            <a  class="userDashboard-Main-Sidebar-Menu-Ul-Li-a">
              <AiOutlineExport />
              <span>خروج</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideBar;