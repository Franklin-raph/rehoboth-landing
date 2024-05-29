import React from 'react'
import SideNav from '../components/side-nav/SideNav'
import TopNav from '../components/top-nav/TopNav'

const page = () => {
  return (
    <div>
      <>
        <SideNav />
        <div className="w-[84%] bg-[#F5F5F5] ml-auto h-[100dvh]">
          <TopNav />
            <div className="px-[30px] py-[1rem]">
              <div className="flex items-center justify-between mb-[3rem]">
                <p className="text-[28px] text-primary-color font-[600]">Dashboard</p>
                <div className="flex items-center gap-3">
                  {/* <button  className="py-3 px-4 border border-[#1D1D1D] rounded-[8px] text-[14px]" onClick={() => router.replace('/subscription')} >Subscribe</button> */}
                  <button className="bg-[#2D3934] text-white px-4 py-3 rounded-[8px] text-[14px]">Create User</button>
                </div>
              </div>
              <div className="grid grid-cols-4 gap-5 bg-white px-5 py-5 rounded-[12px]">
                <div className="border-r pr-5">
                  <div className="flex items-center justify-between mb-5">
                    <p className="text-[#4F4F4F]">Incoming</p>
                    <img src="./images/in-coming.svg" alt="" />
                  </div>
                  <p className="font-[600] text-text-color text-[24px]">#250,000,500</p>
                  <div className="flex items-center mt-2">
                    <img src="./images/arrow-up.svg" alt="" />
                    <p className="text-[#25751E] text-[12px]">+15% this week</p>
                  </div>
                </div>
                <div className="border-r pr-5">
                  <div className="flex items-center justify-between mb-5">
                    <p className="text-[#4F4F4F]">Outgoing</p>
                    <img src="./images/out-going.svg" alt="" />
                  </div>
                  <p className="font-[600] text-text-color text-[24px]">#150,000</p>
                  <div className="flex items-center mt-2">
                    <img src="./images/arrow-down.svg" alt="" />
                    <p className="text-[#9A2525] text-[12px]">-15% this week</p>
                  </div>
                </div>
                <div className="border-r pr-5">
                  <div className="flex items-center justify-between mb-5">
                    <p className="text-[#4F4F4F]">Stock</p>
                    <img src="./images/stock.svg" alt="" />
                  </div>
                  <p className="font-[600] text-text-color text-[24px]">40</p>
                  <div className="flex items-center mt-2">
                    <img src="./images/arrow-up.svg" alt="" />
                    <p className="text-[#25751E] text-[12px]">+10% this week</p>
                  </div>
                </div>
                <div className="">
                  <div className="flex items-center justify-between mb-5">
                    <p className="text-[#4F4F4F]">Members</p>
                    <img src="./images/members.svg" alt="" />
                  </div>
                  <p className="font-[600] text-text-color text-[24px]">150,000</p>
                  <div className="flex items-center mt-2">
                    <img src="./images/arrow-up.svg" alt="" />
                    <p className="text-[#25751E] text-[12px]">+1% this week</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </>
    </div>
  )
}

export default page