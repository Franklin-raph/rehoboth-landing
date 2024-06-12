"use client"

import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation';
import { RxDashboard } from "react-icons/rx";
import { BsTrophy } from "react-icons/bs";
import { IoWalletOutline } from "react-icons/io5";
import { PiHandDepositBold, PiHandWithdrawBold, PiNotepad } from "react-icons/pi";
import { RiSettingsLine } from "react-icons/ri";
import { TbLogout } from "react-icons/tb";
import { TbMessageQuestion } from "react-icons/tb";





import React from 'react'

const SideNav = () => {

    const pathname = usePathname();
    const router = useRouter()

  return (
    <div className='bg-[#ffffff] border border-[#BDBDBD] scrollbar w-[18%]' style={{ borderTopRightRadius:'8px', borderBottomRightRadius:'8px' }}>
        <div className='p-5 border-b cursor-pointer' onClick={() => router.refresh()}>
            <img src="./images/rehoboth-logo.svg" alt="" />
        </div>
        <div className=" my-10 text-white">
          <p className="text-[12px] text-[#98A2B3] mb-2 px-3">DASHBOARD</p>
          <Link href='/get-started' className={ pathname === '/get-started' ? `flex items-center justify-between py-[10px] text-[#072AC8] bg-[#072AC81F] px-5` :`px-5 flex items-center justify-between py-[10px] text-[#101828]`}>
            <div className="flex items-center">
              {
                pathname === '/get-started'? 
                <RxDashboard />
                :
                <RxDashboard />
              }
              <p className="ml-[10px]">Get Started</p>
            </div>
          </Link>
          <Link href='/overview' className={ pathname === '/overview' ? `flex items-center justify-between py-[10px] text-[#072AC8] bg-[#072AC81F] px-5` :`px-5 flex items-center justify-between py-[10px] text-[#101828]`}>
            <div className="flex items-center">
              {
                pathname === '/overview'? 
                  <RxDashboard />
                  : 
                  <RxDashboard />
              }
                <p className="ml-[10px]">Dashboard</p>
            </div>
          </Link>
          <Link href='/earn-points' className={ pathname === '/earn-points' ? `flex items-center justify-between py-[10px] text-[#072AC8] px-5 bg-[#072AC81F]` :`px-5 flex items-center justify-between py-[10px] text-[#101828]`}>
            <div className="flex items-center">
              {
                pathname === '/earn-points'?
                <BsTrophy />
              :
                <BsTrophy />
              }
                <p className="ml-[10px]">Earn Points</p>
            </div>
          </Link>
        </div>

        <div className=" my-10 text-white">
          <p className="text-[12px] text-[#98A2B3] mb-2 px-3">FINANCE</p>
          <Link href='#' className={ pathname === '/123' || pathname === "/1234" || pathname === "/12345" ? `flex items-center justify-between py-[10px] text-[#072AC8] bg-[#072AC81F] px-5` :`px-5 flex items-center justify-between py-[10px] text-[#101828]`}>
            <div className="flex items-center">
              {
                pathname === '/123' || pathname === "/1234" || pathname === "/12345" ? 
                <IoWalletOutline />
                :
                <IoWalletOutline />
              }
              <p className="ml-[10px]">Wallet</p>
            </div>
          </Link>
          <Link href='/deposit' className={ pathname === '/top-up'|| pathname === "/deposit" || pathname === "/buy-with-fiat" ? `flex items-center justify-between py-[10px] text-[#072AC8] bg-[#072AC81F] px-5` :`px-5 flex items-center justify-between py-[10px] text-[#101828]`}>
            <div className="flex items-center">
              {
                pathname === '/top-up' || pathname === "/deposit-crypto" || pathname === "/buy-with-fiat" ? 
                <PiHandDepositBold />
                :
                <PiHandDepositBold />
              }
              <p className="ml-[10px]">Deposit</p>
            </div>
          </Link>
          <Link href='/payout' className={ pathname === '/payout' ? `flex items-center justify-between py-[10px] text-[#072AC8] bg-[#072AC81F] px-5` :`px-5 flex items-center justify-between py-[10px] text-[#101828]`}>
            <div className="flex items-center">
              {
                pathname === '/payout'? 
                  <PiHandWithdrawBold />
                  : 
                  <PiHandWithdrawBold />
              }
                <p className="ml-[10px]">Withdraw</p>
            </div>
          </Link>
          <Link href='/transactions' className={ pathname === '/transactions' ? `flex items-center justify-between py-[10px] text-[#072AC8] px-5 bg-[#072AC81F]` :`px-5 flex items-center justify-between py-[10px] text-[#101828]`}>
            <div className="flex items-center">
              {
                pathname === '/transactions'?
                <PiNotepad />
              :
                <PiNotepad />
              }
                <p className="ml-[10px]">History</p>
            </div>
          </Link>
        </div>

        <div className=" my-10 text-white">
          <p className="text-[12px] text-[#98A2B3] mb-2 px-3">EARN</p>
          <Link href='/settings' className={ pathname === '/settings' ? `flex items-center justify-between py-[10px] text-[#072AC8] bg-[#072AC81F] px-5` :`px-5 flex items-center justify-between py-[10px] text-[#101828]`}>
            <div className="flex items-center">
              {
                pathname === '/settings'? 
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path opacity="0.4" d="M2 12.88V11.12C2 10.08 2.85 9.22 3.9 9.22C5.71 9.22 6.45 7.94 5.54 6.37C5.02 5.47 5.33 4.3 6.24 3.78L7.97 2.79C8.76 2.32 9.78 2.6 10.25 3.39L10.36 3.58C11.26 5.15 12.74 5.15 13.65 3.58L13.76 3.39C14.23 2.6 15.25 2.32 16.04 2.79L17.77 3.78C18.68 4.3 18.99 5.47 18.47 6.37C17.56 7.94 18.3 9.22 20.11 9.22C21.15 9.22 22.01 10.07 22.01 11.12V12.88C22.01 13.92 21.16 14.78 20.11 14.78C18.3 14.78 17.56 16.06 18.47 17.63C18.99 18.54 18.68 19.7 17.77 20.22L16.04 21.21C15.25 21.68 14.23 21.4 13.76 20.61L13.65 20.42C12.75 18.85 11.27 18.85 10.36 20.42L10.25 20.61C9.78 21.4 8.76 21.68 7.97 21.21L6.24 20.22C5.33 19.7 5.02 18.53 5.54 17.63C6.45 16.06 5.71 14.78 3.9 14.78C2.85 14.78 2 13.92 2 12.88Z" fill="#072AC8"/>
                    <path d="M12 15.25C13.7949 15.25 15.25 13.7949 15.25 12C15.25 10.2051 13.7949 8.75 12 8.75C10.2051 8.75 8.75 10.2051 8.75 12C8.75 13.7949 10.2051 15.25 12 15.25Z" fill="#072AC8"/>
                  </svg>
                :
                <img src="./images/settings.svg"/>
              }
              <p className="ml-[10px]">Savings</p>
            </div>
          </Link>
        </div>

        <div className=" my-10 text-white">
          <p className="text-[12px] text-[#98A2B3] mb-2 px-3">ACCOUNT</p>
          <Link href='/settings' className={ pathname === '/settings' ? `flex items-center justify-between py-[10px] text-[#072AC8] bg-[#072AC81F] px-5` :`px-5 flex items-center justify-between py-[10px] text-[#101828]`}>
            <div className="flex items-center">
              {
                pathname === '/settings'? 
                  <RiSettingsLine />
                :
                  <RiSettingsLine />
              }
              <p className="ml-[10px]">Settings</p>
            </div>
          </Link>
          <Link href='/help-and-support' className={ pathname === '/help-and-support' ? `flex items-center justify-between py-[10px] text-[#072AC8] bg-[#072AC81F] px-5` :`px-5 flex items-center justify-between py-[10px] text-[#101828]`}>
            <div className="flex items-center">
              {
                pathname === '/help-and-support'? 
                  <TbMessageQuestion />
                  : 
                  <TbMessageQuestion />
              }
                <p className="ml-[10px]">Help & Support</p>
            </div>
          </Link>
          <Link href='/' className='px-5 flex items-center justify-between py-[10px] text-[#101828]'>
            <div className="flex items-center">
              <TbLogout />
              <p className="ml-[10px]">Logout</p>
            </div>
          </Link>
        </div>

        <div className="ml-[10px] mt-[15rem] mb-16">
          <div className="flex align-center">
              <img src="/images/Avatar.svg"className="w-[50px]" style={{ marginRight: 12, }} />
              <div>
                <p className='text-[#101828] text-[14px] font-[500]'>Lucky Nweke</p>
                <p className="text-[#6F7975] text-[12px] tex-[#98A2B3]">favour@havilahstudios.com</p>
              </div>
            </div>
        </div>
    </div>
  )
}

export default SideNav