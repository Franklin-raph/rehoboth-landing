"use client"

import { useRouter } from 'next/navigation'
import SideNav from '../side-nav/SideNav'
import TopNav from '../top-nav/TopNav'

const ConfirmBuyWithFiatComponent = () => {

    const router = useRouter()

  return (
    <div>
        <div className='flex items-start bg-[#F5F5F5]'>
            <SideNav />
            <div className="w-[84%] bg-[#F5F5F5] ml-auto h-[100dvh]">
                <TopNav />
                <div className="p-[10px] rounded-[8px] mt-5 mx-[25px] bg-[#FFFFFF] border border-[#BDBDBD]">
                  <div className='mt-5 ml-1'>
                    <p className='text-primary-color text-[36px]'>Buy With Fiat</p>
                    <p className='font-[300] text-[#737985]'>Buy crypto with your money</p>
                  </div>
                  <div className='flex justify-center items-center rounded-[11px] gap-5 mt-9 bg-[#F1F1F1]'>
                    <div className="flex justify-center items-center min-h-screen">
                        <div className="bg-[#F8F8F8] py-6 px-[40px] rounded-[8px] shadow-lg w-[500px]">
                            <p className='text-center mb-[5rem]'>transfer NGN 50,000 to Rehoboth Finance</p>
                            <div className='flex items-center justify-between'>
                                <div className='font-[300]'>
                                    <p className='text-[#878787] text-[12px]'>BANK NAME</p>
                                    <p className='text-[20px]'>Paystack-Titan</p>
                                </div>
                                <p className='text-primary-color text-[12px]'>Change bank</p>
                            </div>
                            <div className='flex items-center justify-between my-[2rem]'>
                                <div className='font-[300]'>
                                    <p className='text-[#878787] text-[12px]'>ACCOUNT NUMBER</p>
                                    <p className='text-[20px]'>9924789278</p>
                                </div>
                                <p className='text-primary-color text-[12px]'>Copy</p>
                            </div>
                            <div className='flex items-center justify-between'>
                                <div className='font-[300]'>
                                    <p className='text-[#878787] text-[12px]'>Amount</p>
                                    <p className='text-[20px]'>NGN 50,000</p>
                                </div>
                                <p className='text-primary-color text-[12px]'>Copy</p>
                            </div>
                            <p className='text-[#5D5D5D] font-[300] text-[14px] text-center mt-8'>Search for Paystack-Titan or Titan-Paystack on your bank app. Use this account for this transaction only</p>
                            <div className='flex items-center justify-center mt-10 flex-col'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                    <path d="M14 7.83335H2.00004C1.36004 7.83335 0.833374 7.30668 0.833374 6.66668V4.45334C0.833374 4.00001 1.14669 3.54001 1.56669 3.37334L7.56669 0.973361C7.82002 0.873361 8.18006 0.873361 8.43339 0.973361L14.4334 3.37334C14.8534 3.54001 15.1667 4.00668 15.1667 4.45334V6.66668C15.1667 7.30668 14.64 7.83335 14 7.83335ZM8.00004 1.89336C7.97337 1.89336 7.94672 1.89333 7.93339 1.9L1.94002 4.30002C1.90002 4.32002 1.83337 4.40668 1.83337 4.45334V6.66668C1.83337 6.76001 1.90671 6.83335 2.00004 6.83335H14C14.0934 6.83335 14.1667 6.76001 14.1667 6.66668V4.45334C14.1667 4.40668 14.1067 4.32002 14.0601 4.30002L8.06006 1.9C8.04673 1.89333 8.02671 1.89336 8.00004 1.89336Z" fill="#072AC8"/>
                                    <path d="M14.6667 15.1667H1.33337C1.06004 15.1667 0.833374 14.94 0.833374 14.6667V12.6667C0.833374 12.0267 1.36004 11.5 2.00004 11.5H14C14.64 11.5 15.1667 12.0267 15.1667 12.6667V14.6667C15.1667 14.94 14.94 15.1667 14.6667 15.1667ZM1.83337 14.1667H14.1667V12.6667C14.1667 12.5733 14.0934 12.5 14 12.5H2.00004C1.90671 12.5 1.83337 12.5733 1.83337 12.6667V14.1667Z" fill="#072AC8"/>
                                    <path d="M2.66663 12.5C2.39329 12.5 2.16663 12.2733 2.16663 12V7.33333C2.16663 7.05999 2.39329 6.83333 2.66663 6.83333C2.93996 6.83333 3.16663 7.05999 3.16663 7.33333V12C3.16663 12.2733 2.93996 12.5 2.66663 12.5Z" fill="#072AC8"/>
                                    <path d="M5.33337 12.5C5.06004 12.5 4.83337 12.2733 4.83337 12V7.33333C4.83337 7.05999 5.06004 6.83333 5.33337 6.83333C5.60671 6.83333 5.83337 7.05999 5.83337 7.33333V12C5.83337 12.2733 5.60671 12.5 5.33337 12.5Z" fill="#072AC8"/>
                                    <path d="M8 12.5C7.72667 12.5 7.5 12.2733 7.5 12V7.33333C7.5 7.05999 7.72667 6.83333 8 6.83333C8.27333 6.83333 8.5 7.05999 8.5 7.33333V12C8.5 12.2733 8.27333 12.5 8 12.5Z" fill="#072AC8"/>
                                    <path d="M10.6666 12.5C10.3933 12.5 10.1666 12.2733 10.1666 12V7.33333C10.1666 7.05999 10.3933 6.83333 10.6666 6.83333C10.94 6.83333 11.1666 7.05999 11.1666 7.33333V12C11.1666 12.2733 10.94 12.5 10.6666 12.5Z" fill="#072AC8"/>
                                    <path d="M13.3334 12.5C13.06 12.5 12.8334 12.2733 12.8334 12V7.33333C12.8334 7.05999 13.06 6.83333 13.3334 6.83333C13.6067 6.83333 13.8334 7.05999 13.8334 7.33333V12C13.8334 12.2733 13.6067 12.5 13.3334 12.5Z" fill="#072AC8"/>
                                    <path d="M15.3333 15.1667H0.666626C0.393293 15.1667 0.166626 14.94 0.166626 14.6667C0.166626 14.3933 0.393293 14.1667 0.666626 14.1667H15.3333C15.6066 14.1667 15.8333 14.3933 15.8333 14.6667C15.8333 14.94 15.6066 15.1667 15.3333 15.1667Z" fill="#072AC8"/>
                                    <path d="M8 6.16667C7.17333 6.16667 6.5 5.49334 6.5 4.66667C6.5 3.84001 7.17333 3.16667 8 3.16667C8.82667 3.16667 9.5 3.84001 9.5 4.66667C9.5 5.49334 8.82667 6.16667 8 6.16667ZM8 4.16667C7.72667 4.16667 7.5 4.39334 7.5 4.66667C7.5 4.94001 7.72667 5.16667 8 5.16667C8.27333 5.16667 8.5 4.94001 8.5 4.66667C8.5 4.39334 8.27333 4.16667 8 4.16667Z" fill="#072AC8"/>
                                </svg>
                                <p className='font-[300] mt-2'>Expires in: <span className='font-[500] text-primary-color'>24:34</span> </p>
                            </div>
                            <button className='border border-primary-color rounded-[8px] w-[312px] py-[6px] mt-5 mx-auto block text-primary-color'>Confirm Payment</button>
                        </div>
                    </div>
                  </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ConfirmBuyWithFiatComponent