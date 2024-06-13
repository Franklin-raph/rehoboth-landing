"use client"

import SideNav from '@/app/components/side-nav/SideNav'
import TopNav from '@/app/components/top-nav/TopNav'
import { RiBankLine } from "react-icons/ri";
import React from 'react'
import { usePathname } from 'next/navigation';

const page = () => {

  const pathname = usePathname()

  console.log(decodeURIComponent(pathname.split("/deposit/")[1]));
  

  return (
    <div>
        <div className='flex items-start bg-[#F5F5F5]'>
            <SideNav />
            <div className="w-[84%] bg-[#F5F5F5] ml-auto">
                <TopNav />
                <div className="px-[10px] t-[10px] pb-[3rem] rounded-[8px] mt-5 mx-[25px] bg-[#FFFFFF] border border-[#BDBDBD]">
                  <div className='mt-5 ml-1'>
                    <p className='text-primary-color text-[32px]'>Deposit</p>
                    <p className='font-[300] text-[#737985]'>Buy crypto with your money</p>
                  </div>
                  <div className='mt-9'>
                    <h2 className="text-center text-[#151517] mb-2">Choose a provider</h2>
                    <div className='flex items-center gap-5'>
                        <div className="w-[500px] mx-auto p-2 bg-[#F8F8F8] rounded-lg border border-[#B2B2B27A]">
                            <div className='bg-white p-3 rounded-[8px]'>
                              <div className='flex items-center justify-between'>
                                <div>
                                  <p className='text-[#121212]'>Link</p>
                                  <p className='font-300 text-[#828282]'>
                                    {
                                      decodeURIComponent(pathname.split("/deposit/")[1])
                                    }
                                  </p>
                                </div>
                                <div className='bg-[#CCD6FF54] p-1 rounded-full'>
                                  <RiBankLine className='text-primary-color text-[22px]'/>
                                </div>
                              </div>
                              <div className='mt-5'>
                                <p className='text-primary-color'>Provider fee</p>
                                <p className='font-300 text-[#828282]'>0 - 15 hours</p>
                              </div>
                            </div>
                            <div className='flex items-center justify-center'>
                              <button className='py-2 w-[90%] mx-auto text-white bg-primary-color rounded-[6px] mb-3 mt-[4rem]'>Proceed</button>
                            </div>
                        </div>
                    </div>
                  </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default page