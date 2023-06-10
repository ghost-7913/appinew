import React from 'react';

const index = () => {
    return (
        <div class="userDashboard-Main-Content">
            <div class="userDashboard-Main-Content-FavoritesList">
                <div class="userDashboard-Main-Content-FavoritesList-Header">
                    <h3>لیست ها</h3>
                </div>
                <div class="userDashboard-Main-Content-FavoritesList-Menu">
                    <div
                        class="userDashboard-Main-Content-FavoritesList-Menu-Line"
                    ></div>
                    <div
                        class="userDashboard-Main-Content-FavoritesList-Menu-Item active"
                    >
                        <span>لیست علاقه مندی ها</span>
                        <div></div>
                    </div>
                    <div class="userDashboard-Main-Content-FavoritesList-Menu-Item">
                        <span>لیست عمومی</span>
                        <div></div>
                    </div>
                    <div class="userDashboard-Main-Content-FavoritesList-Menu-Item">
                        <span>اطلاع رسانی</span>
                        <div></div>
                    </div>
                </div>
                <div class="userDashboard-Main-Content-FavoritesList-Favorites">
                    <div class="userDashboard-Main-Content-FavoritesList-Favorites-Item">
                        {/* <!-- Item Img --> */}
                        <div class="userDashboard-Main-Content-FavoritesList-Favorites-Item-Img" >
                            {/* <!-- Img --> */}
                            <img src="../img/beauty&health.jpg" alt="beauty" />
                        </div>
                        {/* <!-- Item Info --> */}
                        <div class="userDashboard-Main-Content-FavoritesList-Favorites-Item-Info" >
                            <span>کیبور و ماوس بی سیم</span>
                            {/* <!-- Item Info Price --> */}
                            <div class="userDashboard-Main-Content-FavoritesList-Favorites-Item-Info-Price"    >
                                <span>1000000</span>
                                <span>تومان </span>
                            </div>
                        </div>
                        <div  class="userDashboard-Main-Content-FavoritesList-Favorites-Item-Action"   >
                            <button  class="userDashboard-Main-Content-FavoritesList-Favorites-Item-Action-Dlt">
                                <svg
                                    width="17"
                                    height="17"
                                    viewBox="0 0 17 17"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M5.6875 3.8125C5.6875 3.06658 5.98382 2.35121 6.51126 1.82376C7.03871 1.29632 7.75408 1 8.5 1C9.24592 1 9.96129 1.29632 10.4887 1.82376C11.0162 2.35121 11.3125 3.06658 11.3125 3.8125M5.6875 3.8125H11.3125M5.6875 3.8125H2.875M11.3125 3.8125H14.125M2.875 3.8125H1M2.875 3.8125V14.125C2.875 14.6223 3.07254 15.0992 3.42417 15.4508C3.77581 15.8025 4.25272 16 4.75 16H12.25C12.7473 16 13.2242 15.8025 13.5758 15.4508C13.9275 15.0992 14.125 14.6223 14.125 14.125V3.8125M14.125 3.8125H16"
                                        stroke="#B7B7B7"
                                        stroke-width="1.5"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    />
                                </svg>

                                <span>هذف</span>
                            </button>
                            <button class="userDashboard-Main-Content-FavoritesList-Favorites-Item-Action-Adding" >
                                <svg
                                    width="19"
                                    height="19"
                                    viewBox="0 0 19 19"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M1.58325 1.58334H2.96075C3.81575 1.58334 4.48867 2.31959 4.41742 3.16668L3.76034 11.0517C3.73468 11.3571 3.77275 11.6646 3.87215 11.9546C3.97154 12.2446 4.13008 12.5108 4.33773 12.7363C4.54538 12.9618 4.7976 13.1417 5.07842 13.2647C5.35924 13.3876 5.66254 13.4508 5.96909 13.4504H14.4003C15.5403 13.4504 16.5378 12.5163 16.6249 11.3842L17.0524 5.44668C17.1474 4.13251 16.1499 3.06376 14.8278 3.06376H4.60742M7.12492 6.33334H16.6249M12.8645 17.4167C13.127 17.4167 13.3787 17.3124 13.5642 17.1268C13.7498 16.9413 13.8541 16.6895 13.8541 16.4271C13.8541 16.1646 13.7498 15.9129 13.5642 15.7274C13.3787 15.5418 13.127 15.4375 12.8645 15.4375C12.602 15.4375 12.3503 15.5418 12.1648 15.7274C11.9792 15.9129 11.8749 16.1646 11.8749 16.4271C11.8749 16.6895 11.9792 16.9413 12.1648 17.1268C12.3503 17.3124 12.602 17.4167 12.8645 17.4167ZM6.53117 17.4167C6.79362 17.4167 7.04533 17.3124 7.23091 17.1268C7.41649 16.9413 7.52075 16.6895 7.52075 16.4271C7.52075 16.1646 7.41649 15.9129 7.23091 15.7274C7.04533 15.5418 6.79362 15.4375 6.53117 15.4375C6.26871 15.4375 6.01701 15.5418 5.83143 15.7274C5.64584 15.9129 5.54159 16.1646 5.54159 16.4271C5.54159 16.6895 5.64584 16.9413 5.83143 17.1268C6.01701 17.3124 6.26871 17.4167 6.53117 17.4167Z"
                                        stroke="#FFAA5C"
                                        stroke-width="1.5"
                                        stroke-miterlimit="10"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    />
                                </svg>

                                <span>اضافه کردن به سبد خرید</span>
                            </button>
                        </div>
                    </div>
       
                </div>
            </div>
        </div>
    );
};

export default index;