import BoothCategory from '@/component/BoothCategory';
import ProductCard from '@/component/ProductCard';
import ProductCategory from '@/component/ProductCategory';
import { useState } from 'react';
import { BiFilter, BiSearch, BiSearchAlt } from 'react-icons/bi';
import { Slider } from "primereact/slider";
import { BsFillGridFill, BsXLg } from "react-icons/bs";
import { Accordion, AccordionTab } from 'primereact/accordion';
import { BiCloset } from 'react-icons/bi';


const Index = () => {
    const [status, setStatus] = useState(1)
    const [value, setValue] = useState([20, 80]);

    // toggle btn
    function ToggleButton(item) {
        console.log(item);
        let pro = document.getElementById("product")
        let booth = document.getElementById("booth")
        if (item == "Booth") {
            setStatus(2)
            pro.classList.remove('btn-Active')
            booth.classList.add('btn-Active')
        }
        if (item == "Products") {
            setStatus(1)
            booth.classList.remove('btn-Active')
            pro.classList.add('btn-Active')

        }

    }
    const sideBarHandler = (item) => {
        const element = document.getElementById('sideBar')
        const sideBarClose =document.getElementById('sideBarClose')
        const sideBarOpen =document.getElementById('sideBarOpen')
        if (item == "open") {
            element.style.bottom = "0"
            sideBarClose.style.display = "flex";
            sideBarOpen.style.display="none"
        }
        else if (item == 'close') {
            element.style.bottom = '-93%';
            sideBarClose.style.display="none"
            sideBarOpen.style.display="block"
        }
    }
    return (
        // categoryPage
        <div class="main-Product-Category">
            {/* sideBar */}
            <div id='sideBar' className='main-Product-Category-SideBar'>
                {/* phone btn */}
                <div id='sideBarOpen' onClick={e => sideBarHandler('open')} className='phone-Btn bg-[#838181] p-[10px] rounded-[5px] my-[10px] lg:hidden md:block '>
                    <BsFillGridFill  className='fill-[white]' />
                </div>
                <div  id='sideBarClose' className=' w-full hidden justify-end my-[10px] '>
                    <BsXLg onClick={e => sideBarHandler('close')}  className='bg-[white] p-[5px] text-[34px]'  />

                </div>
                <Accordion className='lg:hidden md:block' dir='rtl' >
                    <AccordionTab header={
                        <div className='flex items-center '>
                            <BiFilter className='text-[26px]' />
                            <span>مرتب سازی :</span>
                        </div>
                    }>
                        <ul className='flex flex-col gap-[10px]'>
                            <li><a href="">گرانترین</a></li>
                            <li><a href="">ارزانترین</a></li>
                            <li><a href="">پرفروش ترین</a></li>
                            <li><a href="">بهترین ها </a></li>
                        </ul>
                    </AccordionTab>
                </Accordion>
                {/* <!-- shop & product switch --> */}
                <div class="main-Product-Category-SideBar-Switch-Shop ">
                    <button id='booth' onClick={e => ToggleButton('Booth')}  > غرفه ها </button>
                    <button id='product' onClick={e => ToggleButton('Products')} className='btn-Active' >محصولات </button>
                </div>

                {/* product filter */}
                <div className='main-Product-Category-SideBar-Filter'>
                    <BiSearchAlt />
                    <input type="text" placeholder='فیلتر محصولات' />
                </div>
                <div class="main-Product-Category-SideBar-Menu">
                    <ul>
                        <li>دسته بندی <i class="bi bi-caret-down-fill"></i></li>
                        <li>برند <i class="bi bi-caret-down-fill"></i></li>
                        <li>ارسال فروشنده
                            <label class="switch">
                                <input type="checkbox" />
                                <span class="slider round"></span>
                            </label>
                        </li>
                        <li className='flex justify-between '>محدوده قیمت <span>{value}</span></li>
                        <div className='w-full'>
                            <Slider className='bg-[red]' value={value} onChange={(e) => setValue(e.value)} range />
                        </div>
                        <li>کالا های موجود
                            <label class="switch">
                                <input type="checkbox" />
                                <span class="slider round"></span>
                            </label>
                        </li>
                        <li>موجود در انبار <label class="switch">
                            <input type="checkbox" />
                            <span class="slider round"></span>
                        </label>
                        </li>
                        <li>نوع فروشنده <i class="bi bi-caret-down-fill"></i></li>
                    </ul>
                </div>
            </div>
            {/* <!-- product list  --> */}
            {/* BoothCagtegory  */}

            {
                status == 1 && <ProductCategory />

            }
            {
                status == 2 && <BoothCategory />
            }
        </div>
    );
};

export default Index;