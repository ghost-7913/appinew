import React from 'react';

const index = () => {
    return (
        <div class="userDashboard-Main-Content">
            <div class="userDashboard-Main-Content-Orders">
                <div class="userDashboard-Main-Content-Orders-Menu">
                    <div class="userDashboard-Main-Content-Orders-Menu-Line"></div>
                    <div class="userDashboard-Main-Content-Orders-Menu-Item active">
                        <span>جاری</span>
                        <div></div>
                    </div>
                    <div class="userDashboard-Main-Content-Orders-Menu-Item">
                        <span>تحویل شده</span>
                        <div></div>
                    </div>
                    <div class="userDashboard-Main-Content-Orders-Menu-Item">
                        <span>مرجوع شده </span>
                        <div></div>
                    </div>
                    <div class="userDashboard-Main-Content-Orders-Menu-Item">
                        <span>لغو شده</span>
                        <div></div>
                    </div>
                </div>
                <div class="userDashboard-Main-Content-Orders-Current">
                    <table>
                        <tr>
                            <th>مقدار</th>
                            <th>کد کالا</th>
                            <th>شرح کالا</th>
                            <th>مبلغ (ریال)</th>
                            <th>مبلغ کل پس از تخفیف (ریال)</th>
                            <th>جمع مالیات و عوارض (ریال)</th>
                            <th>جمع مبلغ کل پس از تخفیف و مالیات و عوارض (ریال)</th>
                        </tr>

                        <tr>
                            <td>1</td>
                            <td>0445</td>
                            <td>استیکر دیواری فروشگاه رادیانس طرح پاندا خوابیده</td>
                            <td>250000</td>
                            <td>0</td>
                            <td>37000</td>
                            <td>40000</td>
                        </tr>
                        <tr id="MainPrice">
                            <th colspan="6">جمع مبلغ کل پس از تخفیف و مالیات (ریال)</th>
                            <td colspan="1">4512</td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default index;