import React from 'react'
import SideNav from '../side-nav/SideNav'
import TopNav from '../top-nav/TopNav'

const HelpAndSupportComponent = () => {
  return (
    <div>
        <>
            <SideNav />
            <div className="w-[84%] bg-[#F5F5F5] ml-auto h-[100dvh]">
                <TopNav />
                <div className="px-[30px] py-[1rem]">
                
                </div>
            </div>
        </>
    </div>
  )
}

export default HelpAndSupportComponent