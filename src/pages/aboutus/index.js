import React from 'react';

const index = () => {
    return (
        <div class="about-Us">
        <div class="about-Us-Header">
            <p>درباره ما</p>
        </div>
        <div class="about-Us-Ads">
            <div class="about-Us-Ads-Section">
                <img src="img/mini-Market2.jpg" alt="" />
                <div class="about-Us-Ads-Section-Info">
                    <h2>مجموعه جدیدی برای شما</h2>
                    <p>                                بهترین و باکیفیت ترین عطر های موحود در دنیا در دستان شما
                    </p>
                    <div class="link">
                        <a href="">همین حالا خرید کنید
                            <span class="bottom-Bar"></span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <div>
            <h1 className='text-[32px]'>آنچه باید بدانید</h1>
            <p className='leading-[40px]'>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.</p>
        </div>
       
        <div class="about-Us-Security">
            <div class="about-Us-Security-Section">
                <div class="about-Us-Security-Section-Part">
                <img src="/img/icons/free-delivery 1.svg" alt="" />
                    <h4>تحویل رایگان</h4>
                    <p>ارسال رایگان برای تمامی سفارش های بالای یک میلیون و پانصد هزار تومان</p>
                </div>
                <div class="about-Us-Security-Section-Part">
                <img src="/img/icons/money-bag 1.svg" alt="" />
                    <h4>ضمانت بازگشت وجه</h4>
                    <p>بازگشت وجه در صورت عدم کیفیت مناسب</p>
                </div>
                <div class="about-Us-Security-Section-Part">
                <img src="/img/icons/24-hours-support 1.svg" alt="" />
                    <h4>پشتیبانی آنلاین 24/7</h4>
                    <p>
                        ما اینجاییم تا در 24 ساعت تمام هفته از شما حمایت کنیم بیاید به هم کمک کنیم.
                    </p>
                </div>

            </div>
        </div>

    </div>
    );
};

export default index;