import React from 'react';

const index = () => {
    return (
        <div class="userDashboard-Main-Content">
            {/* <!-- Review --> */}
            <div class="userDashboard-Main-Content-Review">
                <div class="userDashboard-Main-Content-Review-Header">
                    <h3>سفارش های من</h3>
                    <a
                        href="#"
                        class="userDashboard-Main-Content-Review-Header-SeeMore"
                    >
                        مشاهده ی همه
                    </a>
                </div>
                <div class="userDashboard-Main-Content-Review-Status">
                    <div class="userDashboard-Main-Content-Review-Status-Item">
                    

                        <span>در انتظار پرداخت</span>
                    </div>
                    <div class="userDashboard-Main-Content-Review-Status-Item">
                     
                        <span> درحال پردازش</span>
                    </div>

                    <div class="userDashboard-Main-Content-Review-Status-Item">
                 
                        <span>تحویل شده</span>
                    </div>
                    <div class="userDashboard-Main-Content-Review-Status-Item">
                      
                        <span>لغو شده</span>
                    </div>
                    <div class="userDashboard-Main-Content-Review-Status-Item">
                        <span>مرجوع شده </span>
                    </div>
                </div>
            </div>
            <div class="userDashboard-Main-Content-UserList">
                <div class="userDashboard-Main-Content-UserList-Header">
                    <h3>از لیست شما</h3>
                    <a
                        href="#"
                        class="userDashboard-Main-Content-UserList-Header-SeeMore"
                    >
                        مشاهده ی همه
                    </a>
                </div>
                <div class="userDashboard-Main-Content-UserList-List">
                    <div class="userDashboard-Main-Content-UserList-List-Item">
                        <div class="userDashboard-Main-Content-UserList-List-Item-Img">
                            <img src="/img/digitalProduct.jpg" alt="" />
                        </div>
                        <div class="userDashboard-Main-Content-UserList-List-Item-Info">
                            <span>کیبور و ماوس بی سیم</span>
                            <span>1000000</span>
                        </div>
                    </div>
                    <div class="userDashboard-Main-Content-UserList-List-Item">
                        <div class="userDashboard-Main-Content-UserList-List-Item-Img">
                            <img src="/img/digitalProduct.jpg" alt="" />
                        </div>
                        <div class="userDashboard-Main-Content-UserList-List-Item-Info">
                            <span>کیبور و ماوس بی سیم</span>
                            <span>1000000</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default index;