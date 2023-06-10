import React from 'react';

const index = () => {
    return (
        <div class="userDashboard-Main-Content">
        <div class="userDashboard-Main-Content-Messages">
          <div class="userDashboard-Main-Content-Messages-Header">
            <h3>پیغام ها</h3>
            <a href="#" class="userDashboard-Main-Content-Messages-Header-Dlt">
              حذف همه ی پیام ها
            </a>
          </div>
          <div class="userDashboard-Main-Content-Messages-MsgType">
            <input type="radio" name="refund" id="refund1"  value="?"  checked  />
            <label for="refund1">همه ی پیام ها</label>
            <input type="radio" name="refund" id="refund2" value="?" />
            <label for="refund2">اطلاع رسانی ها</label>
          </div>
          <div class="userDashboard-Main-Content-Messages-Message">
            <div class="userDashboard-Main-Content-Messages-Message-Title">
              <h4 class="userDashboard-Main-Content-Messages-Message-Title-H4">
                لورم ایپسون
              </h4>
              <p>10 بهمن 1401</p>
            </div>
            <p class="userDashboard-Main-Content-Messages-Message-Content">
              این یک متن تصادفی است این یک متن تصادفی است ر این یک متن تصادفی
              است این یک متن تصادفی است این یک متن تصادفی استاین یک متن تصادفی
              است
            </p>
          </div>
        </div>
      </div>
    );
};

export default index;