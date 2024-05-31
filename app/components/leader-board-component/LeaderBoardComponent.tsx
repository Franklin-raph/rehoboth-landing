import React from 'react'
import TopNav from '../top-nav/TopNav'
import SideNav from '../side-nav/SideNav'

const LeaderBoardComponent = () => {
  return (
    <div>
        <>
            <SideNav />
            <div className="w-[84%] bg-[#F5F5F5] ml-auto">
                <TopNav />
                <div className="p-[10px] bg-white mt-5 mx-[30px]">
                    <div className='bg-primary-color w-full h-[150px] rounded-[11px] text-white p-3'>
                        <p className='text-[24px] font-[500]'>Al-Time <br /> Leaderboard</p>
                    </div>
                    <div className='bg-[#899EFD1A] inline-flex items-center gap-5 mt-7 rounded-md'>
                        <div className='flex items-center gap-3 border-r border-gray-300 py-2 px-4'>
                            <img src="./images/tag-user.svg" alt="" />
                            <p className='text-primary-color'>139181 Users</p>
                        </div>
                        <div className='flex items-center gap-3  py-2 px-4'>
                            <img src="./images/cup-colored.svg" alt="" />
                            <p className='text-primary-color'>20 Tiers</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    </div>
  )
}

export default LeaderBoardComponent