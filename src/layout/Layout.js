import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { useRouter } from 'next/router';
import SideBar from "./userDashboard/SideBar"
const Layout = ({ children }) => {
    const router = useRouter()
    const path = router.pathname.split("/")


    return (
        <div className={path == "userProfile" ? "userDashboard" : "main"}>
            <Header />
            {
                path[1] == "u-Dashboard" ?
                <div className='userDashboard-Main'>
                    <SideBar />
                    {
                        children
                    }
                </div>
                :    children

            }
        
            <Footer />
        </div>
    );
};

export default Layout;