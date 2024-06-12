import React from 'react'
import SideNav from '../side-nav/SideNav'
import TopNav from '../top-nav/TopNav'

const HelpAndSupportComponent = () => {
  return (
    <div>
        <div className='flex items-start bg-[#F5F5F5]'>
            <SideNav />
            <div className="w-[84%] bg-[#F5F5F5] ml-auto">
                <TopNav />
                <div className="px-[30px] py-[1rem]">
                
                </div>
            </div>
        </div>
    </div>
  )
}

export default HelpAndSupportComponent