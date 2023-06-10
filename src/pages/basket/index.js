import Link from 'next/link';
import React from 'react';

import { BsThreeDots, BsPlusLg, BsTrash3 } from "react-icons/bs";

const index = () => {
    return (
        <>
            {/* <!-- basket --> */}
            <div class="basket">
                {/* <!-- title --> */}
                <div class="basket-Title">
                    <p class="basket-Title-Btn">
                        <button>سبد خرید</button>
                        <button class="btn-Active">خرید بعدی</button>
                    </p>
                    <div></div>
                </div>
                {/* <!-- content --> */}
                <div class="basket-Content">
                    {/* <!-- detail --> */}
                    <div class="basket-Content-Detail">
                        <div class="basket-Content-Detail-Title">
                            <span>سبد خرید شما</span>
                            <BsThreeDots />

                        </div>
                        <div class="basket-Content-Detail-Section">
                            <div class="basket-Content-Detail-Section-Top">
                                {/* <!-- img --> */}
                                <img src="img/mobile.png" alt="" />
                                {/* <!-- explanation --> */}
                                <div class="basket-Content-Detail-Section-Top-Explanation">
                                    <h2>استیکر دیواری فروشگاه رادیانس طرح پاندا خوابیده</h2>
                                    <p> <i class="bi bi-rulers"></i> 18*30 سانتی متر</p>
                                    <p> <i class="bi bi-shield-check"></i> گارانتی اصالت سلامتی فیزیکی کالا</p>
                                    <p> <img src="img/icons/stalls.svg" alt="" />دکال</p>
                                    <p> <i class="bi bi-file-earmark-ruled"></i> موجود در انبار فروشنده</p>
                                    <p> <i class="bi bi-car-front-fill"></i> ارسال از اپینو 1 روز کاری </p>
                                    <span>25,000 تومان</span>
                                </div>
                            </div>

                            {/* <!-- count & next --> */}
                            <div class="basket-Content-Detail-Section-Count">
                                <div class="basket-Content-Detail-Section-Count-Section">
                                    <BsPlusLg className='text-[orange]' />
                                    <input type="number" />
                                    <BsTrash3 className='text-[orange]' />

                                </div>
                                <a href="">  انتقال به خرید بعدی  <i class="bi bi-caret-left"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                    {/* <!-- total price card --> */}
                    <div class="basket-Content-Total">
                        <div class="basket-Content-Total-Price">
                            <div class="basket-Content-Total-Price-Section">
                                <p>جمع سبد خرید</p>
                                <span>25,000 تومان</span>
                            </div>
                            <div class="basket-Content-Total-Price-Section">
                                <p>جمع سبد خرید</p>
                                <span>25,000 تومان</span>
                            </div>
                        </div>

                        <div class="basket-Content-Total-Btn">
                            <Link href={"/basketTime"} >
                                <button>ادامه</button>
                            </Link>


                        </div>
                    </div>

                </div>
            </div>
        </>
    );
};

export default index;