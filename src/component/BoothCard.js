import Link from 'next/link';
import React from 'react';
import { BsStar } from "react-icons/bs";

const BoothCard = ({link,Src,offer}) => {
    return (
        <div className='relative 2xl:w-[26%] xl:w-[26%] lg:w-[35%] md:w-[35%] sm:w-[45%]'>
            <Link className='w-full' href={`${link}`}>
            <img className='h-full w-full' src={`${Src}`} alt="" />
            <div className='absolute top-[15px] right-[15px] bg-[white] p-[20px] rounded-xl leading-[30px]'>
                <span className='text-[20px]'>غرفه دیجی کالا</span>
                <p>{offer}</p>
                <span className='text-[13px]  flex items-center gap-[5px]'>4.5<BsStar className='fill-[gold]'/></span>

            </div>
            </Link>
        </div>
    );
};

export default BoothCard;