import Link from 'next/link';
import React from 'react';
import { BiHeart } from 'react-icons/bi';
import { BsBagPlusFill } from 'react-icons/bs';

const ProductCard = ({ link='' }) => {
    return (
        <Link className='2xl:w-[21%] xl:w-[30%] lg:w-[40%] md:w-[40%] sm:w-[80%]' href={link}>
            <div className='product-Card '>
                {/* img section */}
                <div className='product-Card-Img'>
                    <img src="/img/img-8.png" alt="" />
                    <span>29%</span>
                    <BiHeart />
                </div>
                {/* explain section */}
                <div className='product-Card-Explain'>
                    {/* colors & sizes */}
                    <div className='product-Card-Explain-Detail'>
                        {/* sizes */}
                        <div className='product-Card-Explain-Detail-Sizes'>
                            <div className='product-Card-Explain-Detail-Sizes-Size'>s</div>
                            <div className='product-Card-Explain-Detail-Sizes-Size'>m</div>
                            <div className='product-Card-Explain-Detail-Sizes-Size'>l</div>
                        </div>
                        {/* colors */}
                        <div className='product-Card-Explain-Detail-Colors'>
                            <div className='product-Card-Explain-Detail-Colors-Color bg-[#e22929]'></div>
                            <div className='product-Card-Explain-Detail-Colors-Color bg-[#35abf0]'></div>
                            <div className='product-Card-Explain-Detail-Colors-Color bg-[#20b420]'></div>
                        </div>
                    </div>

                    {/* name & Price */}
                    <div className='flex justify-between'>
                        <span className=' text-[20px] '>سویشرت اسپرت</span>
                        <div className='flex items-end gap-[10px]'>
                            <span className='line-through text-[12px]'> 262,000 </span>
                            <span className=''> 250,000</span>
                            <p className=''>تومان</p>
                        </div>
                    </div>
                    {/* price */}

                    {/* add to cart */}
                    <div className='flex justify-end'>
                        <button className='flex items-center justify-center gap-[5px]'>افزودن به سبد خرید <BsBagPlusFill /></button>
                    </div>
                </div>
            </div>
        </Link>

    );
};

export default ProductCard;