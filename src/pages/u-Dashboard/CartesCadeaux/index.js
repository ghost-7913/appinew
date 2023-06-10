import React from 'react';

const idnex = () => {
    return (
        <div class="userDashboard-Main-Content">
            <div class="userDashboard-Main-Content-CartesCadeaux">
                <div class="userDashboard-Main-Content-CartesCadeaux-Header">
                    <h3>کارت های هدیه</h3>
                    <button>
                        <p>کارت هدیه جدید</p>
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 7H13M7 13V1" stroke="#FFAA5C" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
             
                </button>
            </div>
            <div class="userDashboard-Main-Content-CartesCadeaux-Menu">
                <div class="userDashboard-Main-Content-CartesCadeaux-Menu-Line"></div>
                <div class="userDashboard-Main-Content-CartesCadeaux-Menu-Item active">
                    <span>فعال</span>
                    <div></div>
                </div>
                <div class="userDashboard-Main-Content-CartesCadeaux-Menu-Item">
                    <span>غیر فعال</span>
                    <div></div>
                </div>

            </div>
        </div>
        </div >
    );
};

export default idnex;