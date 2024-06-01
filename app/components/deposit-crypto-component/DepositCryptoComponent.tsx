"use client"

import TopNav from '../top-nav/TopNav'
import SideNav from '../side-nav/SideNav'

const DepositCryptoComponent = () => {
  return (
    <div>
        <div className='flex items-start bg-[#F5F5F5]'>
            <SideNav />
            <div className="w-[84%] bg-[#F5F5F5] ml-auto h-[100dvh]">
                <TopNav />
                <div className="p-[10px] rounded-[8px] mt-5 mx-[25px] bg-[#FFFFFF] border border-[#BDBDBD]">
                  <div className='mt-5 ml-1'>
                    <p className='text-primary-color text-[36px]'>Deposit crypto</p>
                    <p className='font-[300] text-[#737985]'>Buy crypto with your money</p>
                  </div>
                  <div className='flex items-start justify-between gap-5 mt-9 mr-[6rem]'>
                    <div className='bg-[#F9F9F9] w-[500px] p-3'>
                        <div className="bg-white mb-[262px] p-6">
                            <div className='mb-5'>
                                <p className='text-[#383838] text-[14px]'>Network</p>
                                <div className='text-[#121212] border border-[#D0D5DD] p-2 mt-1 rounded-[8px] flex items-center justify-between'>
                                    <p className=''>Stellar Classic Network</p>
                                    <p>v</p>
                                </div>
                                <p className='text-primary-color text-[14px] font-[300] mt-1'>Wallet address automatically matched to corresponding network</p>
                            </div>
                            <div>
                                <p className='text-[#383838] text-[14px]'>Recipient address</p>
                                <div className='bg-[#F1F1F1] px-4 py-3 mt-1 rounded-full flex items-center justify-between'>
                                    <p className='text-[#121212] font-[300]'>0xe4iJ78ufP9kwH56...k8Ty</p>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                        <path d="M1.66666 7.50002V5.41669C1.66666 3.34169 3.34166 1.66669 5.41666 1.66669H7.49999" stroke="#5D5D5D" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M12.5 1.66669H14.5833C16.6583 1.66669 18.3333 3.34169 18.3333 5.41669V7.50002" stroke="#5D5D5D" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M18.3333 13.3333V14.5833C18.3333 16.6583 16.6583 18.3333 14.5833 18.3333H13.3333" stroke="#5D5D5D" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M7.49999 18.3333H5.41666C3.34166 18.3333 1.66666 16.6583 1.66666 14.5833V12.5" stroke="#5D5D5D" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M8.75001 5.83331V7.49998C8.75001 8.33331 8.33334 8.74998 7.50001 8.74998H5.83334C5.00001 8.74998 4.58334 8.33331 4.58334 7.49998V5.83331C4.58334 4.99998 5.00001 4.58331 5.83334 4.58331H7.50001C8.33334 4.58331 8.75001 4.99998 8.75001 5.83331Z" stroke="#5D5D5D" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M15.4167 5.83331V7.49998C15.4167 8.33331 15 8.74998 14.1667 8.74998H12.5C11.6667 8.74998 11.25 8.33331 11.25 7.49998V5.83331C11.25 4.99998 11.6667 4.58331 12.5 4.58331H14.1667C15 4.58331 15.4167 4.99998 15.4167 5.83331Z" stroke="#5D5D5D" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M8.75001 12.5V14.1667C8.75001 15 8.33334 15.4167 7.50001 15.4167H5.83334C5.00001 15.4167 4.58334 15 4.58334 14.1667V12.5C4.58334 11.6667 5.00001 11.25 5.83334 11.25H7.50001C8.33334 11.25 8.75001 11.6667 8.75001 12.5Z" stroke="#5D5D5D" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M15.4167 12.5V14.1667C15.4167 15 15 15.4167 14.1667 15.4167H12.5C11.6667 15.4167 11.25 15 11.25 14.1667V12.5C11.25 11.6667 11.6667 11.25 12.5 11.25H14.1667C15 11.25 15.4167 11.6667 15.4167 12.5Z" stroke="#5D5D5D" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                </div>
                                <p className='text-[12px] font-[300] mt-1 bg-[#D2D9F542] p-3 rounded-[8px]'>It’s a Rehoboth account. Send instantly and 0 fee via PayID: <span className='text-primary-color'>****</span> </p>
                            </div>
                            <button className='mt-3 bg-primary-color rounded-[8px] py-3 w-full text-white'>Save and Share address</button>
                        </div>
                    </div>
                    <div>
                        <img src="./images/WealthConnectionGlobalOfficialQRCode.svg" alt="" />
                    </div>
                  </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default DepositCryptoComponent