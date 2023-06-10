import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { Menubar } from 'primereact/menubar';
import { BiUser } from 'react-icons/bi';
import { CiUser } from 'react-icons/ci';
import { useRouter } from 'next/router';
import GetUserInfo from '@/api/GetUserInfo';

const Header = () => {
    const router = useRouter()
    let path = router.pathname
    let loggin = null
    if (typeof window !== 'undefined') {
        loggin = localStorage.getItem('token')
    }
    const items = [
        {
            label: 'دسته بندی کالاها ',
            icon: 'pi pi-fw pi-file',
            url: '/productCategory',
            items: [
                {
                    label: 'New',
                    icon: 'pi pi-fw pi-plus',

                    items: [
                        {
                            label: 'Bookmark',
                            icon: 'pi pi-fw pi-bookmark',

                        },
                        {
                            label: 'Video',
                            Link: "/dev",
                            icon: 'pi pi-fw pi-video'
                        },

                    ]
                },
                {
                    label: 'غرفه ها',
                    icon: 'pi pi-fw pi-trash',
                    items: [
                        {
                            label: 'Bookmark',
                            icon: 'pi pi-fw pi-bookmark'
                        },
                        {
                            label: 'Video',
                            icon: 'pi pi-fw pi-video'
                        },

                    ]
                },
                {
                    separator: true
                },
                {
                    label: 'پرفروش ترین ها',
                    icon: 'pi pi-fw pi-external-link'
                }
            ]
        },
        {
            label: 'غرفه ها',
            icon: <img src="/img/icons/stalls.svg" alt="" />,

        },
        {
            label: 'تخفیف ها و پیشنهاد ها ',
            icon: <img src="/img/icons/offer.svg" alt="" />
            ,

        },
        {
            label: 'پر فروش ترین ها',
            icon: <img src="/img/icons/mostSeller.svg" alt="" />,

        },
        {
            label: 'شگفت انگیز ها',
            icon: <img src="/img/icons/amazing.svg" alt="" />
            ,

        },
        {
            label: 'سوالی دارید؟',
            icon: <img src="/img/icons/question.svg" alt="" />
        }
    ];
    // pofile sidebar handler
    const sideBarOpen = () => {
        let right_path = path.split('/')[1]
        if (right_path == "u-Dashboard") {
            document.getElementById('prof-Sidebar').style.right = "0"
        }
        else {
            router.push('/u-Dashboard')
            setTimeout(() => {
                document.getElementById('prof-Sidebar').style.right = "0"

            }, 300)


        }

    }
    useEffect(()=>{
        GetUserInfo((isoke,data)=>{
            if(isoke){
                if(data.imageUrl != null){
                    localStorage.setItem('img',data.imageUrl)
                    localStorage.setItem('userId',data.id)

                }
            }
        })
    },[])

    return (
        //  <!-- header -->
        <header>
            {/* <!-- top section --> */}
            <div class="top-Section">
                {/* <!-- search bar  & logo--> */}
                <div class="top-Section-Right">
                    <div class="top-Section-Right-Logo">
                        <img src="/img/icons/Rectangle 92.svg" alt="" />
                    </div>
                    <div class="top-Section-Right-Search">
                        <img src="/img/icons/searchnormal1.svg" alt="" />
                        <input type="text" placeholder="جست و جو ..." />
                    </div>

                </div>
                {/* <!-- manage section --> */}
                <div class="top-Section-Left">
                    {
                        loggin != null && loggin != '' ? <>
                            {/* when logged in  */}

                            <div className='top-Section-Left-Web'>
                                <div>
                                    <Link href={"/u-Dashboard/info/"}>
                                        <img src="/img/icons/user.svg" alt="" />

                                    </Link>
                                </div>
                                <span>|</span>
                                <Link href={"/basket/"} >
                                    <img src="/img/icons/bag.svg" alt="" />

                                </Link>
                            </div>


                            {/* app */}

                            <div className='bg-primary-color rounded-full p-[10px] top-Section-Left-App '>

                                <CiUser className='text-[40px] fill-[white]' onClick={e => sideBarOpen()} />
                            </div>





                        </>
                            :
                            <>
                                {/* no loggin */}

                                <div className='top-Section-Left-Web'>
                                    <div>
                                        <Link href={"/login/"}>
                                            <img src="/img/icons/user.svg" alt="" />

                                        </Link>
                                    </div>
                                    <span>|</span>
                                    <Link href={"/basket/"} >
                                        <img src="/img/icons/bag.svg" alt="" />

                                    </Link>
                                </div>
                                {/* app */}
                                <div className='bg-primary-color rounded-full p-[10px]  top-Section-Left-App'>

                                    <CiUser className='text-[40px] fill-[white]' onClick={e => sideBarOpen()} />
                                </div>
                            </>

                    }



                </div>
            </div>
            {/* <!-- navbar --> */}
            <Menubar className='rtl !px-[5%] ' model={items} />


        </header>
    );
};

export default Header;