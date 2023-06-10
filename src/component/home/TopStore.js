import React from 'react';
import BoothCard from '../BoothCard';

const TopStore = () => {
    return (
        //  <!-- top stores -->
         <div class="main-Top-Store">
            <div class="section-Title">
                <h2>فروشگاه های برتر</h2>
                <i class="bi bi-caret-left-fill"></i>
            </div>
            <div class="card-Container">
                    <BoothCard Src={"/img/Group 550.jpg"} link={"/"} offer={"تخفیف 20 درصد"} />
                    <BoothCard Src={"/img/Group 551.jpg"} link={"/"}  offer={"تخفیف 30 درصد"}  />
                    <BoothCard Src={"/img/Group 552.jpg"} link={"/"} />
                    <BoothCard Src={"/img/Group 547.jpg"} link={"/"}  offer={"تخفیف 20 درصد"}  />
                    <BoothCard Src={"/img/Group 550.jpg"} link={"/"} />
                    <BoothCard Src={"/img/Group 373.jpg"} link={"/"} />
            </div>

        </div>
    );
};

export default TopStore;