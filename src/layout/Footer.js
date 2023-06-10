import React from 'react';

const Footer = () => {
    return (
        // <!-- footer -->
        <footer class="footer">
            {/* <!-- apinew services --> */}
            <div class="footer-Services">
                <div class="footer-Services-Section">
                    <img src="/img/icons/free-delivery 1.svg" alt="" />
                    <h2>ارسال رایگان</h2>
                    <p>ارسال رایگان برای خرید های بالای 100,000 هزار تومان</p>
                </div>
                <div class="footer-Services-Section">
                    <img src="/img/icons/24-hours-support 1.svg" alt="" />
                    <h2>پشتیبانی آنلاین 24/7</h2>
                    <p>پشتیبانی 24 ساعته</p>
                </div>
                <div class="footer-Services-Section">
                    <img src="/img/icons/money-bag 1.svg" alt="" />
                    <h2>برگشت پول</h2>
                    <p>گارانتی بازگشت کالا تا 7 روز</p>
                </div>
                <div class="footer-Services-Section">
                    <img src="/img/icons/discount 1.svg" alt="" />
                    <h2>تخفیف ویژه</h2>
                    <p>برای مشتریان ثابت</p>
                </div>
            </div>
            {/* <!-- top section --> */}
            <div class="footer-Top-Section">
                <div class="footer-Top-Section-Right">
                    <img src="/img/icons/Rectangle 92.svg" alt="" />
                    <div>
                        <a href="tel:">تلفن پشتیبانی : 021 - 601930000</a>
                        <span>
                            7روز هفته، 24 ساعته پاسخگوی شما هستیم
                        </span>
                    </div>
                </div>
                <div class="footer-Top-Section-Left">
                    <button>بازگشت به بالا   <i class="bi bi-caret-up-fill"></i></button>
                </div>
            </div>
            {/* <!-- middle section --> */}
            <div class="footer-Middle-Section">
                <h2>فروشگاه اینترنتی اپینو، بررسی ، انتخاب و خرید آنلاین</h2>
                <p>یک خرید اینترنتی مطمئن، نیازمند فروشگاهی است که بتواند کالاهایی متنوع، باکیفیت و دارای قیمت مناسب را در مدت زمانی کوتاه به دست مشتریان خود برساند و ضمانت بازگشت کالا هم داشته باشد؛ ویژگی‌هایی که فروشگاه اینترنتی اپینو سال‌هاست بر روی آن‌ها
                    کار کرده و توانسته از این طریق مشتریان ثابت خود را داشته باشد. </p>
                <a href="#">مشاهده بیشتر   <i class="bi bi-caret-left-fill"></i>  </a>
            </div>
            {/* <!-- link section --> */}
            <div class="footer-Link">
                <div class="footer-Link-Right">
                    <ul>
                        <span>پشتیبانی </span>
                        <li>تماس با ما</li>
                        <li>پیگیری سفارش ها</li>
                        <li>پاسخ به سوالات همیشگی</li>
                    </ul>
                    <ul>
                        <span>اپینو</span>
                        <li>مجله اپینو</li>
                        <li>داستان اپینو</li>
                        <li>فرصت ها شغلی </li>
                        <li>چجوری به اپینو اعتماد کنیم ؟</li>
                        <li>اپینو چطور کار می کند؟</li>
                        <li>قوانین و شرایط بازار</li>
                    </ul>
                    <ul>
                        <span>خرید و فروش </span>
                        <li>فروش در اپینو</li>
                        <li>کیف پول من</li>
                        <li>مدیریت غرفه </li>
                    </ul>
                </div>
                <div class="footer-Link-Left">
                    <h2>ایمیلتان را وارد کنید تا از تخفیف ها با خبر شوید</h2>
                    <div>
                        <input type="email" />
                        <button>ارسال</button>
                    </div>
                </div>
            </div>
            {/* <!-- namad ha & links  --> */}
            <div class="footer-Bottom">
                <div class="footer-Bottom-Main">
                    <ul>
                        <li>درباره ما </li>
                        <li>تماس با ما </li>
                        <li>انتقادات و پیشنهاد ها</li>
                    </ul>
                    <div class="footer-Bottom-Main-Namad">
                        <img src="/img/icons/rezi 1.svg" alt="" />
                        <img src="/img/icons/logo 1.svg" alt="" />
                        <img src="/img/icons/kasbokar 1.svg" alt="" />
                    </div>
                </div>
                <div class="footer-Bottom-App-Link">
                    <span>دانلود اپلیکیشن اپینو</span>
                    <img src="/img/icons/google-play 1.svg" alt="" />
                    <img src="/img/icons/myket 1.svg" alt="" />
                    <img src="/img/icons/coffe-bazzar 1.svg" alt="" />
                </div>

            </div>

        </footer>
    );
};

export default Footer;