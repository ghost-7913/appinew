import React from 'react';
import ProductCard from './ProductCard';
import { Menubar } from 'primereact/menubar';
import { BiFilter } from 'react-icons/bi';
const items = [
    {
        label: 'مرتب سازی  :',
        icon:<BiFilter/>,
        // url: '/productCategory',
        items:[
            {
                label: 'گران ترین ',
                icon: 'pi pi-fw pi-plus',
            },
            {
                label: 'ارزان ترین ',
                icon: 'pi pi-fw pi-plus',
            },
            {
                label: 'پرفروش ترین ',
                icon: 'pi pi-fw pi-plus',
            },

        
        ]
    },
    {
        label: 'ارزان ترین ',
        icon: <img src="/img/icons/stalls.svg" alt="" />,

    },
    {
        label: 'پربازدید ترین ',
        icon: <img src="/img/icons/offer.svg" alt="" />
        ,

    },
    {
        label: 'گرانترین ',
        icon: <img src="/img/icons/offer.svg" alt="" />
        ,

    }
];
const ProductCategory = () => {
    return (
        <div class="main-Product-Category-List">
            <div class="main-Product-Category-List-Ordering">
                {/* <p>
                    <i class="bi bi-border-style"></i>
                    <span>مرتب سازی :</span>
                </p>
                <ul>
                    <li>مرتبط ترین</li>
                    <li>پر بازدید ترین </li>
                    <li>جدید ترین </li>
                    <li>پرفروش ترین </li>
                    <li>ارزان ترین</li>
                    <li>گران ترین </li>
                    <li>سریع ترین ارسال</li>
                    <li>پیشنهاد خریداران</li>
                    <li>منتخب</li>
                </ul> */}
                <Menubar className='rtl w-full md:hidden' model={items} />
            </div>

            {/* <!-- products container --> */}
            <div class="card-Container">

                {/* <!-- product card --> */}

                <ProductCard link={"singleProduct/1"} />
                <ProductCard link={"singleProduct/3"} />
                <ProductCard link={"singleProduct/2"} />
                <ProductCard link={"singleProduct/6"} />
                <ProductCard link={"singleProduct/6"} />
                <ProductCard link={"singleProduct/6"} />
                <ProductCard link={"singleProduct/6"} />
                <ProductCard link={"singleProduct/6"} />
                <ProductCard link={"singleProduct/6"} />





            </div>
            {/* <!-- pagination --> */}
            <div class="pagination">
                <a href="#">&laquo;</a>

                <a href="#">1</a>
                <a class="active" href="#">2</a>
                <a href="#">3</a>
                <a href="#">4</a>
                <a href="#">5</a>
                <a href="#">6</a>
                <a href="#">&raquo;</a>
            </div>
        </div>
    );
};

export default ProductCategory;