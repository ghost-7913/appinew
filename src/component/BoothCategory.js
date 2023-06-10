import React from 'react';
import ProductCard from './ProductCard';
import BoothCard from './BoothCard';

const BoothCategory = () => {
    return (
        <div class="main-Product-Category-List ]">
            <div class="main-Product-Category-List-Ordering">
                <p>
                    <i class="bi bi-border-style"></i>
                    <span>مرتب سازی :</span>
                </p>
                <ul>
                    <li>پر بازدید ترین </li>
                    <li>جدید ترین </li>
                    <li>پرفروش ترین </li>
                    <li>ارزان ترین</li>
                    <li>گران ترین </li>
                    <li>سریع ترین ارسال</li>
                    <li>پیشنهاد خریداران</li>
                    <li>منتخب ها</li>
                </ul>
            </div>

            {/* <!-- products container --> */}
            <div class="card-Container  !gap-[50px] py-[10px]">

                {/* booth card */}
                <BoothCard Src={"/img/Group 551.jpg"} link={"/"} />
                <BoothCard Src={"/img/Group 552.jpg"} link={"/"} />
                <BoothCard Src={"/img/Group 550.jpg"} link={"/"} />
                <BoothCard Src={"/img/Group 551.jpg"} link={"/"} />
                <BoothCard Src={"/img/Group 552.jpg"} link={"/"} />
                <BoothCard Src={"/img/Group 550.jpg"} link={"/"} />
          
            


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

export default BoothCategory;