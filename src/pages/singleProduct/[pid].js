import SimilarProduct from '@/component/SimilarProduct';
import React from 'react';

import { BsHeart, BsBell,BsShare} from "react-icons/bs";

const index = () => {
    return (
        // <!-- product page -->
        <div class="product-Page">
            {/* <!--  detail --> */}
            <div class="product-Page-Detail">
                {/* <!-- img --> */}
                <div class="product-Page-Detail-Img">
                    <div class="product-Page-Detail-Img-Main">
                        <img src="/img/camera.png" alt="" />
                        {/* <!-- offer --> */}
                        <span class="">25%</span>
                        <div class="product-Page-Detail-Img-Main-Overlay">
                            <BsHeart/>
                            <BsBell/>
                            <BsShare/>

                        </div>
                    </div>
                    <div class="product-Page-Detail-Img-Thumbnail">
                        <img src="/img/Rectangle 252.jpg" alt="" />
                        <img src="/img/Rectangle 252.jpg" alt="" />
                        <img src="/img/Rectangle 252.jpg" alt="" />

                    </div>

                </div>
                {/* <!-- content --> */}
                <div class="product-Page-Detail-Content">
                    <h1>استیکر دیواری فروشگاه رادیانس طراح پاندا خوابیده کد 04</h1>
                    {/* <!-- summery --> */}
                    <div class=" product-Page-Detail-Content-Summery">
                        <p>
                            <span>
                                <i class="bi bi-star"></i>
                                4.3 (51)
                            </span>
                            <span>35دیدگاه</span>
                            <span>
                                پرسش
                            </span>
                        </p>
                        <p>
                            <span>
                                <i class="bi bi-hand-thumbs-up"></i> 73% (20 نفر )از خریداران این کالا را پیشنهاد کرده اند
                            </span>
                        </p>

                    </div>
                    {/* <!-- size --> */}
                    <div class="product-Page-Detail-Content-Size">
                        <span>اندازه 18 * 30 سانت</span>
                        <select>
                            <option value="volvo">18*30 سانت </option>
                        </select>
                    </div>
                    {/* <!-- property --> */}
                    <div class="product-Page-Detail-Content-Property">
                        <h3>ویژگی ها</h3>
                        <span>جنس : پلاستیک</span>
                        <p>درخواست مرجوع کردن کالا در گروه استیکر و پوستر با دلیل انصراف از خرید  تنها در صورتی قابل تایید است که کالا در شرایط اولیه باشد (در صورت پلمپ بودن، کالا نباید باز شده باشد).</p>
                    </div>
                </div>
                {/* <!-- sell card --> */}
                <div class="product-Page-Detail-Sell-Card">
                    <div class="product-Page-Detail-Sell-Card-Title">
                        <span>فروشنده </span>
                        <p>1 فروشنده دیگر</p>
                    </div>
                    <p>
                        <img src="img/icons/shop.svg" alt={``} />
                        <span>دکال</span>
                    </p>
                    <ul>
                        <li>
                            <span>70%</span> رضایت از کالا | عملکرد عالی
                        </li>
                        <li>
                            <i class="bi bi-shield-check"></i> گارانتی اصالت و سلامت فیزیکی کالا
                        </li>
                        <li>موجود در انبار فروشنده</li>
                        <li class="flex justify-between">
                            <span>قیمت فروشنده </span>
                            <p class="flex flex-col">
                                <span class=" !text-[14px] text-[red] line-through	">25,000 تومان</span>
                                <span class="!text-[14px] text-[green]"> 19,500 تومان</span>
                            </p>
                        </li>
                    </ul>
                    <div class="flex justify-center">
                        <button>فزودن به سبد خرید</button>

                    </div>
                </div>
            </div>
            {/* <!-- product's sellers --> */}
            <div class="product-Page-Sellers">
                <div class="section-Title">
                    <span>فروشندگان این کالا</span>
                    <div></div>
                </div>
                <div class="product-Page-Sellers-Container">
                    <div class="product-Page-Sellers-Section">
                        <div class="product-Page-Sellers-Section-Content">
                            <img src="img/icons/stalls.svg" alt="" />
                            <div>
                                <span>دکال</span>
                                <p>
                                    70% رضایت از کالا | عملکرد راضی
                                </p>
                            </div>
                        </div>
                        <div class="product-Page-Sellers-Section-Content">
                            <p>
                                <i class="bi bi-car-front"></i> ارسال اپینو از 1 روز دیگر
                            </p>

                        </div>
                        <div class="product-Page-Sellers-Section-Content">
                            <p>
                                <i class="bi bi-shield-check"></i> گارانتی اصلات و سلامت فیزی کالا
                            </p>

                        </div>
                        <div class="product-Page-Sellers-Section-Content">
                            <p>
                                <span>25,000</span>
                                <button>افزودن به سبد خرید </button>
                            </p>

                        </div>
                    </div>
                    <div class="product-Page-Sellers-Section">
                        <div class="product-Page-Sellers-Section-Content">
                            <img src="img/icons/stalls.svg" alt="" />
                            <div>
                                <span>دکال</span>
                                <p>
                                    70% رضایت از کالا | عملکرد راضی
                                </p>
                            </div>
                        </div>
                        <div class="product-Page-Sellers-Section-Content">
                            <p>
                                <i class="bi bi-car-front"></i> ارسال اپینو از 1 روز دیگر
                            </p>

                        </div>
                        <div class="product-Page-Sellers-Section-Content">
                            <p>
                                <i class="bi bi-shield-check"></i> گارانتی اصلات و سلامت فیزی کالا
                            </p>

                        </div>
                        <div class="product-Page-Sellers-Section-Content">
                            <p>
                                <span>25,000</span>
                                <button>افزودن به سبد خرید </button>
                            </p>

                        </div>
                    </div>


                </div>

            </div>
            {/* similar product */}
            <SimilarProduct />
            {/* <!-- scores and opinion of users --> */}
            <div class="product-Page-Scores">
                <div class="section-Title">
                    <span>امتیاز و دیدگاه کاربران</span>
                    <div></div>
                </div>
                {/* <!-- main seciton --> */}
                <div class="product-Page-Scores-Main">
                    <p>
                        73%(20نفر)از خریداران، انی کالا را پیشنهاد کرده اند
                    </p>
                    {/* <!-- images --> */}
                    <div class="product-Page-Scores-Main-Images">
                        <img src="/img/Rectangle 252.jpg" alt="" />
                        <img src="/img/Rectangle 252.jpg" alt="" />
                        <img src="/img/Rectangle 252.jpg" alt="" />
                        <a href="">  مشاهده همه  <i class="bi bi-arrow-left-circle-fill"></i>
                        </a>
                    </div>
                    {/* <!-- comments --> */}
                    <div class="product-Page-Scores-Main-Comment">
                        <div class="product-Page-Scores-Main-Comment-Section">
                            <p class="product-Page-Scores-Main-Comment-Section-Title">
                                پارسا براتی
                                <span>5%</span>
                            </p>
                            <p class="product-Page-Scores-Main-Comment-Section-Detail">
                                خوبه پیشنهاد میکنم خریدداری بکنید
                                <span>27 دی 1401</span>
                            </p>
                        </div>
                        <div class="product-Page-Scores-Main-Comment-Section">
                            <p class="product-Page-Scores-Main-Comment-Section-Title">
                                پارسا براتی
                                <span>5%</span>
                            </p>
                            <p class="product-Page-Scores-Main-Comment-Section-Detail">
                                خوبه پیشنهاد میکنم خریدداری بکنید
                                <span>27 دی 1401</span>
                            </p>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    );
};

export default index;