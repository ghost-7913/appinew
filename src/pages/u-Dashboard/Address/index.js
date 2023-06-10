import { AddUserAddress, DeleteUserAddress, GetLocation, getUserAddress } from '@/api/UserAddress';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { AiFillEnvironment, AiOutlineMail, AiOutlinePhone, AiOutlineUser } from 'react-icons/ai';
import { BsArchive, BsBackspaceReverse, BsFillPencilFill, BsTrash3 } from 'react-icons/bs';
import Swal from 'sweetalert2';
const Index = () => {
  let userId;
  if (typeof window !== 'undefined') {
    userId = localStorage.getItem('userId')

  }
  const [address, setAddress] = useState({ userId, text: null, provinceId: null, cityId: null, postalCode: null, phoneNumber: null,reciever:null })
  const [provinces, setProvinces] = useState()
  const [cityList, setCityList] = useState()
  const [city, setCity] = useState([])
  const [addressList, setAddressList] = useState()
  const deletHandler = (id) => {
    Swal.fire({
      title: 'آیا مطمئن هستید؟',
      text: "",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: 'green',
      cancelButtonColor: '#d33',
      cancelButtonText: 'انصراف',
      confirmButtonText: 'حذف'
    }).then((result) => {
      if (result.isConfirmed) {
        DeleteUserAddress(id, (isoke, data) => {
          if (isoke) {
            Swal.fire(
              'با موفقیت حذف شد',
              '',
              'success'
            )
          }
          else {
            alert('ERROR')
          }
        })
      }
    })
  }
  useEffect(() => {
    getUserAddress((isoke, data) => {
      if (isoke) {
        setAddressList(data)
      }
    })
    GetLocation((isoke, data) => {
      if (isoke) {
        setProvinces(data.provinces.map(item => <option value={item.id} key={item.id}>{item.name}</option>))
        setCityList(data.cities)
      }
    })
  }, [])
  const cityHandler = (id) => {
    let d = cityList.filter(item => item.provinceId == id)
    setCity(d.map(item => <option value={item.id} key={item.id} >{item.name}</option>))
  }
  const sendAddress = () => {

    if (address.text == null || address.text == "" || address.provinceId== null || address.provinceId == "" || address.cityId == null || address.cityId == "" || address.phoneNumber == null || address.phoneNumber == "" || address.postalCode == null || address.postalCode == "") {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'لطفا همه ی فیلد ها را تکمیل کنید',
        footer: ''
      })

    }
    else {
      if (address.postalCode.length < 10) {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'کد پستی نمی تواند کمتر از 10 رقم باشد',
          footer: ''
        })
      }
      else {
        AddUserAddress(address, (isoke, data) => {
          if (isoke) {
            document.getElementById('modal').style.transform = "scale(0)"
            getUserAddress((isoke, data) => {
              if (isoke) {
                setAddressList(data)
              }
            })
          }
        })
      }
    }
  }

  return (
    <div className='userDashboard-Main-Content-Adresses'>
      <div class="userDashboard-Main-Content-Adresses-Header">
        <h3>آدرس ها</h3>
        <button onClick={() => document.getElementById('modal').style.transform = 'scale(1)'}>
          <p>ثبت آدرس جدید</p>
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 7H13M7 13V1" stroke="#8c8c8c" id="insert" stroke-width="1.5" stroke-miterlimit="10"
              stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </button>
      </div>
      {
        addressList && addressList.map(item => <div key={item.id} class="userDashboard-Main-Content-Adresses-Info border-b-[1px] border-[#d6d4d4] mb-[10px]">
          <div className='flex justify-between w-full'>
            {/* detial  */}
            <div className='flex flex-col gap-5'>
               <p className='flex items-center gap-3 '><AiFillEnvironment/> <span >  آدرس : {item.cityName + " " + item.text} </span></p>
              <p className='flex items-center gap-3' > <AiOutlineMail/> <span>کد پستی : {item.postalCode}</span></p>
             <p className='flex items-center gap-3'><AiOutlinePhone/> <span>شماره تلفن  :{item.phoneNumber}</span></p> 
             <p className='flex items-center gap-3'><AiOutlineUser/> <span>نام دریافت کننده  :</span></p> 

            </div>
            {/* btn handler */}
            <div className='flex flex-col gap-5'>
              <button onClick={e => deletHandler(item.id)}>
                <BsTrash3 />
              </button>
              {/* <button ><BsFillPencilFill /></button> */}
            </div>
          </div>
        </div>)
      }
      {/* add & edit modal */}
      <div id='modal' className=' fixed top-0 right-0 bg-[#0000006c]	 w-[100%] h-[100%] flex justify-center items-center transition-all   modal transform scale-0'>
        <div className='absolute p-[30px] pb-[20px] flex flex-col justify-between  bg-[#ffffff] rounded-[10px] w-[100%] xl:w-[20%] bottom-[-100%] xl:bottom-auto lg:bottom-auto duration-1000 '>
          {/* title */}
          <div class="relative flex justify-center  items-center w-[100%] h-[100%]">
            <div onClick={() => document.getElementById('modal').style.transform = "scale(0)"} className='absolute right-[0px]'>
              <BsBackspaceReverse className={"  fa fa-close text-gray"} />
            </div>
            <span className='text-[black]'>افزودن آدرس  </span>
          </div>
          {/* form */}
          <div class="flex flex-col justify-center modal-Form  ">


            <div className='modal-Form-Detail'>

              <div className='flex flex-col  ' >
                <label className='text-gray2 mt-[10px] ' > آدرس </label>
                <input value={address.text} onChange={e => setAddress(data => ({ ...data, text: e.target.value }))} className='w-12/12 mb-[20px]' placeholder='...' />
                <label className='text-gray2 mt-[10px] ' > نام دریافت کننده </label>
                <input value={address.reciever} onChange={e => setAddress(data => ({ ...data, reciever: e.target.value }))} className='w-12/12 mb-[20px]' placeholder='...' />
             
                <div className='flex justify-between'>
                  <div className='flex flex-col w-5/12'>
                    <label className='text-gray2 mt-[10px] '> استان </label>

                    <select value={address.provinceId} onChange={e => { cityHandler(e.target.value); setAddress(data => ({ ...data, provinceId: e.target.value })) }}>
                      <option className='opacity-40' value="0" selected disabled>استان</option>
                      {
                        provinces
                      }
                    </select>
                  </div>
                  <div className='flex flex-col w-5/12'>
                    <label className='text-gray2 mt-[10px] '>  شهر</label>
                    <select value={address.cityId} onChange={e => { setAddress(data => ({ ...data, cityId: e.target.value })) }}>
                      <option className='opacity-40' value="0" selected disabled>شهر</option>

                      {
                        city && city
                      }
                    </select>

                  </div>
                </div>
                <div className='flex justify-between'>
                  <div className='flex flex-col w-5/12'>
                    <label className='text-gray2 mt-[10px] '> کد پستی</label>
                    <input value={address.postalCode} type='number' onChange={e => setAddress(data => ({ ...data, postalCode: e.target.value }))} className='w-12/12 mb-[20px]' />
                  </div>
                  <div className='flex flex-col w-5/12'>
                    <label className='text-gray2 mt-[10px] '> شماره تلفن</label>
                    <input value={address.phoneNumber} type='number' onChange={e => setAddress(data => ({ ...data, phoneNumber: e.target.value }))} className='w-12/12 mb-[20px]' />

                  </div>
                </div>

                <button onClick={() => sendAddress()} className='mt-[25px]'>ثبت</button>
              </div>




            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Index;