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
import { MdOutlineSavings } from "react-icons/md";





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
                  <MdOutlineSavings />
                :
                <MdOutlineSavings />
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