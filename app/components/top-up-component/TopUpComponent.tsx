import React from 'react'
import SideNav from '../side-nav/SideNav'
import TopNav from '../top-nav/TopNav'

const TopUpComponent = () => {
  return (
    <div>
        <div className='flex items-start bg-[#F5F5F5]'>
            <SideNav />
            <div className="w-[84%] bg-[#F5F5F5] ml-auto h-[100dvh]">
                <TopNav />
                <div className="p-[10px] rounded-[8px] mt-5 mx-[25px] bg-[#FFFFFF] border border-[#BDBDBD] h-[100dvh]">
                  <div className='mt-5 ml-1'>
                    <p className='text-primary-color text-[36px]'>Top-up</p>
                    <p className='font-[300] text-[#737985]'>Buy crypto with your money</p>
                  </div>
                  <div className='flex items-center gap-5 mt-9'>
                    <div className='bg-primary-color w-[280px] h-[336px] cursor-pointer'>
                      <div className='bg-white p-1 rounded-full inline-block m-5'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                          <path opacity="0.4" d="M14.4242 11.4317C14.0998 11.7484 13.9144 12.2041 13.9608 12.6908C14.0303 13.525 14.795 14.1352 15.6292 14.1352H17.0968V15.0543C17.0968 16.6532 15.7914 17.9586 14.1925 17.9586H5.32517C3.72628 17.9586 2.4209 16.6532 2.4209 15.0543V9.856C2.4209 8.25711 3.72628 6.95172 5.32517 6.95172H14.1925C15.7914 6.95172 17.0968 8.25711 17.0968 9.856V10.9683H15.5365C15.1039 10.9683 14.71 11.1382 14.4242 11.4317Z" fill="#072AC8"/>
                          <path d="M11.9602 4.01655V6.95171H5.32517C3.72628 6.95171 2.4209 8.2571 2.4209 9.856V7.02125C2.4209 6.10208 2.98476 5.28329 3.84214 4.95887L9.97511 2.64163C10.9329 2.28632 11.9602 2.98924 11.9602 4.01655Z" fill="#072AC8"/>
                          <path d="M17.9154 11.7561V13.3473C17.9154 13.7721 17.5756 14.1197 17.143 14.1351H15.6291C14.7949 14.1351 14.0302 13.5249 13.9607 12.6907C13.9143 12.2041 14.0997 11.7484 14.4241 11.4317C14.7099 11.1382 15.1038 10.9683 15.5364 10.9683H17.143C17.5756 10.9837 17.9154 11.3313 17.9154 11.7561Z" fill="#072AC8"/>
                          <path d="M11.3036 10.8138H5.89669C5.58 10.8138 5.31738 10.5512 5.31738 10.2345C5.31738 9.91777 5.58 9.65515 5.89669 9.65515H11.3036C11.6203 9.65515 11.8829 9.91777 11.8829 10.2345C11.8829 10.5512 11.6203 10.8138 11.3036 10.8138Z" fill="#072AC8"/>
                        </svg>
                      </div>
                      <div className='text-white ml-5 mt-[9rem]'>
                        <p className='text-[20px] font-[500]'>Deposit Crypto</p>
                        <p className='text-[14px]'>Transfer crypto to your <br /> Rehoboth Wallet</p>
                      </div>
                    </div>
                    <div className='bg-[#EBEFFF] w-[280px] h-[336px] cursor-pointer'>
                      <div className='bg-white p-1 rounded-full inline-block m-5'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="19" height="20" viewBox="0 0 19 20" fill="none">
                          <path d="M17.3586 15.4346V17.7518H1.91028V15.4346C1.91028 15.0098 2.25786 14.6622 2.68269 14.6622H16.5861C17.011 14.6622 17.3586 15.0098 17.3586 15.4346Z" fill="#072AC8" stroke="#072AC8" stroke-width="1.15862" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                          <path opacity="0.6" d="M6.54473 9.25531H3.45508V14.6622H6.54473V9.25531Z" fill="#072AC8"/>
                          <path opacity="0.4" d="M9.63446 9.25531H6.5448V14.6622H9.63446V9.25531Z" fill="#072AC8"/>
                          <path opacity="0.6" d="M12.7241 9.25531H9.6344V14.6622H12.7241V9.25531Z" fill="#072AC8"/>
                          <path opacity="0.4" d="M15.8138 9.25531H12.7241V14.6622H15.8138V9.25531Z" fill="#072AC8"/>
                          <path d="M18.131 18.3312H1.1379C0.821214 18.3312 0.558594 18.0685 0.558594 17.7519C0.558594 17.4352 0.821214 17.1725 1.1379 17.1725H18.131C18.4477 17.1725 18.7103 17.4352 18.7103 17.7519C18.7103 18.0685 18.4477 18.3312 18.131 18.3312Z" fill="#072AC8"/>
                          <path d="M16.8719 5.20012L9.92021 2.41945C9.76572 2.35766 9.50311 2.35766 9.34863 2.41945L2.3969 5.20012C2.12656 5.30826 1.91028 5.62495 1.91028 5.91846V8.48288C1.91028 8.90771 2.25786 9.2553 2.68269 9.2553H16.5861C17.011 9.2553 17.3586 8.90771 17.3586 8.48288V5.91846C17.3586 5.62495 17.1423 5.30826 16.8719 5.20012ZM9.63442 7.32426C8.99331 7.32426 8.4758 6.80674 8.4758 6.16564C8.4758 5.52454 8.99331 5.00702 9.63442 5.00702C10.2755 5.00702 10.793 5.52454 10.793 6.16564C10.793 6.80674 10.2755 7.32426 9.63442 7.32426Z" fill="#072AC8"/>
                        </svg>
                      </div>
                      <div className='ml-5 mt-[9rem]'>
                        <p className='text-[20px] font-[500] text-[#222]'>Buy with Fiat</p>
                        <p className='text-[14px] text-[#757575]'>Buy crypto into your Rehoboth <br /> Wallet using fiat payment rails</p>
                      </div>
                    </div>
                  </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default TopUpComponent