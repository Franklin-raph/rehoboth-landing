"use client"

import SideNav from '@/app/components/side-nav/SideNav'
import TopNav from '@/app/components/top-nav/TopNav'
import React from 'react'

const page = () => {
  return (
    <div>
        <div className='flex items-start bg-[#F5F5F5]'>
            <SideNav />
            <div className="w-[84%] bg-[#F5F5F5] ml-auto">
                <TopNav />
                <div className="p-[10px] rounded-[8px] mt-5 mx-[25px] bg-[#FFFFFF] border border-[#BDBDBD]">
                  <div className='mt-5 ml-1'>
                    <p className='text-primary-color text-[32px]'>Deposit</p>
                    <p className='font-[300] text-[#737985]'>Buy crypto with your money</p>
                  </div>
                  <div className='mt-9'>
                    <h2 className="text-center text-[#151517] mb-2">Choose your deposit currency</h2>
                    <div className='flex items-center gap-5'>
                        <div className="w-[500px] mx-auto p-4 bg-[#F8F8F8] rounded-lg border border-[#B2B2B27A]">
                            
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