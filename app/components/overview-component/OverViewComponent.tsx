import React from 'react'
import TopNav from '../top-nav/TopNav'
import SideNav from '../side-nav/SideNav'
import { GoChevronDown } from "react-icons/go";


const OverViewComponent = () => {
  return (
    <div>
        <>
            <SideNav />
            <div className="w-[84%] bg-[#F5F5F5] ml-auto">
                <TopNav />
                <div className="p-[10px] rounded-[8px] mt-5 mx-[25px] bg-[#FFFFFF] border border-[#BDBDBD]">
                    <div className='mb-6'>
                        <p className='text-[#121212] text-[24px]'>Hi, Lucky</p>
                        <p className='text-[#767676] text-[14px] font-[300]'>Welcome to Rehoboth finance </p>
                    </div>
                    <div className='flex items-center gap-5'>
                        <div className="bg-gradient-to-r from-primary-color to-blue-400 text-white pt-3 rounded-lg w-full mx-auto">
                            <div className='flex items-center justify-between px-6'>
                                <p></p>
                                <div className="bg-[#9A9A9A4D] p-[10px] rounded-full inline-flex items-center gap-3">
                                    <img src="./images/simple-mission1.svg" alt="" />
                                    <p>6.5k</p>
                                </div>
                            </div>
                            <div className="flex justify-between items-start mb-4 px-6">
                                <div>
                                    <h2 className="text-[#F6F6F6] text-[14px]">AVAILABLE BALANCE</h2>
                                    <p className="text-4xl mt-5 mb-2 font-bold">119,462,544.73 <span className="text-sm inline-flex items-center">NGN <GoChevronDown /></span></p>
                                    <p className="text-[16px] font-[300] text-gray-200">≈ 80000.58 USDC</p>
                                </div>
                            </div>
                            <div className="flex px-6 gap-4 py-4 bg-[#99AAF961]">
                                <button className="bg-white text-blue-500 py-[6px] px-6 rounded-[8px]"> + Deposit</button>
                                <button className="border border-white text-white py-[6px] px-6 rounded-[8px]">Withdraw</button>
                            </div>
                        </div>
                        <div className="border border-[#E1E1E1] pt-3 rounded-lg w-full mx-auto">
                            <div className='flex items-center justify-between px-6 pt-5'>
                                <p className='text-[#7A7A7A] text-[14px]'>Reward Points</p>
                                <div className='bg-[#899EFD1A] inline-flex items-center rounded-md'>
                                    <div className='flex items-center gap-3 border-r border-gray-300 py-2 px-4'>
                                        <img src="./images/tag-user.svg" alt="" />
                                        <p className='text-primary-color text-[10px]'>139181 Users</p>
                                    </div>
                                    <div className='flex items-center gap-3 py-2 px-4'>
                                        <img src="./images/cup-colored.svg" alt="" />
                                        <p className='text-primary-color text-[10px]'>20 Tiers</p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex justify-between items-start mb-10 px-6">
                                <div>
                                    {/* <h2 className="text-lg">AVAILABLE BALANCE</h2> */}
                                    <p className="text-4xl mt-5 mb-2 font-bold text-[#121212]">5,462,544.00<span className="text-[14px] font-[300]">Points</span></p>
                                    {/* <p className="text-[16px] font-[300] text-gray-200">≈ 80000.58 USDC</p> */}
                                </div>
                            </div>
                            <div className="flex bg-[#F6F6F6] px-6 py-4">
                                <button className="text-white bg-primary-color py-[6px] px-4 rounded-md">Explore Ecosytem</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    </div>
  )
}

export default OverViewComponent