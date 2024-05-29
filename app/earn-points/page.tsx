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
              
            </div>
          </div>
      </>
    </div>
  )
}

export default page