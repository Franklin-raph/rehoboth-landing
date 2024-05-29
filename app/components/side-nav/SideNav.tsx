"use client"

import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation';
import React from 'react'

const SideNav = () => {

    const pathname = usePathname();
    const router = useRouter()

  return (
    <div className='bg-[#ffffff] border border-[#BDBDBD] scrollbar w-[16%] h-[100vh] top-0 fixed overflow-y-auto overflow-x-hidden' style={{ borderTopRightRadius:'8px', borderBottomRightRadius:'8px' }}>
        <div className='p-5 border-b cursor-pointer' onClick={() => router.refresh()}>
            <img src="./images/rehoboth-logo.svg" alt="" />
        </div>
        <div className=" my-10 text-white">
          <p className="text-[12px] text-[#98A2B3] mb-2 px-3">DASHBOARD</p>
          <Link href='/get-started' className={ pathname === '/get-started' ? `flex items-center justify-between py-[10px] text-[#072AC8] bg-[#072AC81F] px-5` :`px-5 flex items-center justify-between py-[10px] text-[#101828]`}>
            <div className="flex items-center">
              {
                pathname === '/get-started'? 
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path opacity="0.4" d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81V16.18C2 19.83 4.17 22 7.81 22H16.18C19.82 22 21.99 19.83 21.99 16.19V7.81C22 4.17 19.83 2 16.19 2Z" fill="#072AC8"/>
                  <path d="M8.82043 9.75C7.97043 9.75 7.12043 9.43 6.47043 8.78C6.18043 8.49 6.18043 8.01 6.47043 7.72C6.76043 7.43 7.24043 7.43 7.53043 7.72C8.24043 8.43 9.40043 8.43 10.1104 7.72C10.4004 7.43 10.8804 7.43 11.1704 7.72C11.4604 8.01 11.4604 8.49 11.1704 8.78C10.5204 9.42 9.67043 9.75 8.82043 9.75Z" fill="#072AC8"/>
                  <path d="M15.1798 9.75C14.3298 9.75 13.4798 9.43 12.8298 8.78C12.5398 8.49 12.5398 8.01 12.8298 7.72C13.1198 7.43 13.5998 7.43 13.8898 7.72C14.5998 8.43 15.7598 8.43 16.4698 7.72C16.7598 7.43 17.2398 7.43 17.5298 7.72C17.8198 8.01 17.8198 8.49 17.5298 8.78C16.8798 9.42 16.0298 9.75 15.1798 9.75Z" fill="#072AC8"/>
                  <path d="M15.5999 12.62H8.39988C7.69988 12.62 7.12988 13.19 7.12988 13.9C7.12988 16.59 9.31988 18.78 12.0099 18.78C14.6999 18.78 16.8899 16.59 16.8899 13.9C16.8799 13.2 16.2999 12.62 15.5999 12.62Z" fill="#072AC8"/>
                </svg>
                :
                <img src="./images/emoji-normal.svg"/>
              }
              <p className="ml-[10px]">Get Started</p>
            </div>
          </Link>
          <Link href='/overview' className={ pathname === '/overview' ? `flex items-center justify-between py-[10px] text-[#072AC8] bg-[#072AC81F] px-5` :`px-5 flex items-center justify-between py-[10px] text-[#101828]`}>
            <div className="flex items-center">
              {
                pathname === '/overview'? 
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path opacity="0.4" d="M22 8.52V3.98C22 2.57 21.36 2 19.77 2H15.73C14.14 2 13.5 2.57 13.5 3.98V8.51C13.5 9.93 14.14 10.49 15.73 10.49H19.77C21.36 10.5 22 9.93 22 8.52Z" fill="#072AC8"/>
                    <path d="M22 19.77V15.73C22 14.14 21.36 13.5 19.77 13.5H15.73C14.14 13.5 13.5 14.14 13.5 15.73V19.77C13.5 21.36 14.14 22 15.73 22H19.77C21.36 22 22 21.36 22 19.77Z" fill="#072AC8"/>
                    <path d="M10.5 8.52V3.98C10.5 2.57 9.86 2 8.27 2H4.23C2.64 2 2 2.57 2 3.98V8.51C2 9.93 2.64 10.49 4.23 10.49H8.27C9.86 10.5 10.5 9.93 10.5 8.52Z" fill="#072AC8"/>
                    <path opacity="0.4" d="M10.5 19.77V15.73C10.5 14.14 9.86 13.5 8.27 13.5H4.23C2.64 13.5 2 14.14 2 15.73V19.77C2 21.36 2.64 22 4.23 22H8.27C9.86 22 10.5 21.36 10.5 19.77Z" fill="#072AC8"/>
                  </svg> 
                  : 
                  <img src="./images/overview.svg"/>
              }
                <p className="ml-[10px]">Overview</p>
            </div>
          </Link>
          <Link href='/earn-points' className={ pathname === '/earn-points' ? `flex items-center justify-between py-[10px] text-[#072AC8] px-5 bg-[#072AC81F]` :`px-5 flex items-center justify-between py-[10px] text-[#101828]`}>
            <div className="flex items-center">
              {
                pathname === '/earn-points'?
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path opacity="0.4" d="M18 20.5H17V20.25C17 19.15 16.1 18.25 15 18.25H12.75V15.96C12.5 15.99 12.25 16 12 16C11.75 16 11.5 15.99 11.25 15.96V18.25H9C7.9 18.25 7 19.15 7 20.25V20.5H6C5.59 20.5 5.25 20.84 5.25 21.25C5.25 21.66 5.59 22 6 22H18C18.41 22 18.75 21.66 18.75 21.25C18.75 20.84 18.41 20.5 18 20.5Z" fill="#072AC8"/>
                  <path opacity="0.4" d="M5.52027 11.64C4.86027 11.39 4.28027 10.98 3.82027 10.52C2.89027 9.49 2.28027 8.26 2.28027 6.82C2.28027 5.38 3.41027 4.25 4.85027 4.25H5.41027C5.15027 4.78 5.00027 5.37 5.00027 6V9C5.00027 9.94 5.18027 10.83 5.52027 11.64Z" fill="#072AC8"/>
                  <path opacity="0.4" d="M21.7205 6.82C21.7205 8.26 21.1105 9.49 20.1805 10.52C19.7205 10.98 19.1405 11.39 18.4805 11.64C18.8205 10.83 19.0005 9.94 19.0005 9V6C19.0005 5.37 18.8505 4.78 18.5905 4.25H19.1505C20.5905 4.25 21.7205 5.38 21.7205 6.82Z" fill="#072AC8"/>
                  <path d="M15 2H9C6.79 2 5 3.79 5 6V9C5 12.87 8.13 16 12 16C15.87 16 19 12.87 19 9V6C19 3.79 17.21 2 15 2ZM14.84 8.45L14.22 9.21C14.12 9.32 14.05 9.54 14.06 9.69L14.12 10.67C14.16 11.27 13.73 11.58 13.17 11.36L12.26 11C12.12 10.95 11.88 10.95 11.74 11L10.83 11.36C10.27 11.58 9.84 11.27 9.88 10.67L9.94 9.69C9.95 9.54 9.88 9.32 9.78 9.21L9.16 8.45C8.77 7.99 8.94 7.48 9.52 7.33L10.47 7.09C10.62 7.05 10.8 6.91 10.88 6.78L11.41 5.96C11.74 5.45 12.26 5.45 12.59 5.96L13.12 6.78C13.2 6.91 13.38 7.05 13.53 7.09L14.48 7.33C15.06 7.48 15.23 7.99 14.84 8.45Z" fill="#072AC8"/>
                  <path opacity="0.4" d="M14.8397 8.45001L14.2197 9.21001C14.1197 9.32001 14.0497 9.54001 14.0597 9.69001L14.1197 10.67C14.1597 11.27 13.7297 11.58 13.1697 11.36L12.2597 11C12.1197 10.95 11.8797 10.95 11.7397 11L10.8297 11.36C10.2697 11.58 9.83975 11.27 9.87975 10.67L9.93975 9.69001C9.94975 9.54001 9.87975 9.32001 9.77975 9.21001L9.15975 8.45001C8.76975 7.99001 8.93975 7.48001 9.51975 7.33001L10.4697 7.09001C10.6197 7.05001 10.7997 6.91001 10.8797 6.78001L11.4097 5.96001C11.7397 5.45001 12.2597 5.45001 12.5897 5.96001L13.1197 6.78001C13.1997 6.91001 13.3797 7.05001 13.5297 7.09001L14.4797 7.33001C15.0597 7.48001 15.2297 7.99001 14.8397 8.45001Z" fill="#072AC8"/>
                </svg>
              :
                <img src="./images/cup.svg" alt="" />
              }
                <p className="ml-[10px]">Earn Points</p>
            </div>
          </Link>
        </div>

        <div className=" my-10 text-white">
          <p className="text-[12px] text-[#98A2B3] mb-2 px-3">FINANCE</p>
          <Link href='/top-up' className={ pathname === '/top-up' ? `flex items-center justify-between py-[10px] text-[#072AC8] bg-[#072AC81F] px-5` :`px-5 flex items-center justify-between py-[10px] text-[#101828]`}>
            <div className="flex items-center">
              {
                pathname === '/top-up'? 
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path opacity="0.8" d="M12.9002 2.52003L12.8702 2.59003L9.9702 9.32003H7.1202C6.4402 9.32003 5.8002 9.45003 5.2002 9.71003L6.9502 5.53003L6.9902 5.44003L7.0502 5.28003C7.0802 5.21003 7.1002 5.15003 7.1302 5.10003C8.4402 2.07003 9.9202 1.38003 12.9002 2.52003Z" fill="#072AC8"/>
                  <path d="M18.2897 9.52002C17.8397 9.39002 17.3697 9.32002 16.8797 9.32002H9.96973L12.8697 2.59002L12.8997 2.52002C13.0397 2.57002 13.1897 2.64002 13.3397 2.69002L15.5497 3.62002C16.7797 4.13002 17.6397 4.66002 18.1697 5.30002C18.2597 5.42002 18.3397 5.53002 18.4197 5.66002C18.5097 5.80002 18.5797 5.94002 18.6197 6.09002C18.6597 6.18002 18.6897 6.26002 18.7097 6.35002C18.9697 7.20002 18.8097 8.23002 18.2897 9.52002Z" fill="#072AC8"/>
                  <path opacity="0.4" d="M21.7602 14.2V16.15C21.7602 16.35 21.7502 16.55 21.7402 16.74C21.5502 20.24 19.6002 22 15.9002 22H8.10023C7.85023 22 7.62023 21.98 7.39023 21.95C4.21023 21.74 2.51023 20.04 2.29023 16.86C2.26023 16.62 2.24023 16.39 2.24023 16.15V14.2C2.24023 12.19 3.46023 10.46 5.20023 9.71001C5.80023 9.45001 6.44023 9.32001 7.12023 9.32001H16.8802C17.3702 9.32001 17.8402 9.39001 18.2902 9.52001C20.2902 10.13 21.7602 11.99 21.7602 14.2Z" fill="#072AC8"/>
                  <path opacity="0.6" d="M6.95023 5.53003L5.20023 9.71003C3.46023 10.46 2.24023 12.19 2.24023 14.2V11.27C2.24023 8.43003 4.26023 6.06003 6.95023 5.53003Z" fill="#072AC8"/>
                  <path opacity="0.6" d="M21.76 11.27V14.2C21.76 11.99 20.29 10.13 18.29 9.52003C18.81 8.23003 18.97 7.20003 18.71 6.35003C18.69 6.26003 18.66 6.18003 18.62 6.09003C20.49 7.06003 21.76 9.03003 21.76 11.27Z" fill="#072AC8"/>
                  <path d="M14.5 14.69H12.75V13C12.75 12.59 12.41 12.25 12 12.25C11.59 12.25 11.25 12.59 11.25 13V14.69H9.5C9.09 14.69 8.75 15.03 8.75 15.44C8.75 15.85 9.09 16.19 9.5 16.19H11.25V18C11.25 18.41 11.59 18.75 12 18.75C12.41 18.75 12.75 18.41 12.75 18V16.19H14.5C14.91 16.19 15.25 15.85 15.25 15.44C15.25 15.03 14.91 14.69 14.5 14.69Z" fill="#072AC8"/>
                </svg>
                :
                <img src="./images/top-up.svg"/>
              }
              <p className="ml-[10px]">Top-up</p>
            </div>
          </Link>
          <Link href='/payout' className={ pathname === '/payout' ? `flex items-center justify-between py-[10px] text-[#072AC8] bg-[#072AC81F] px-5` :`px-5 flex items-center justify-between py-[10px] text-[#101828]`}>
            <div className="flex items-center">
              {
                pathname === '/payout'? 
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path opacity="0.8" d="M12.9002 2.52003L12.8702 2.59003L9.9702 9.32003H7.1202C6.4402 9.32003 5.8002 9.45003 5.2002 9.71003L6.9502 5.53003L6.9902 5.44003L7.0502 5.28003C7.0802 5.21003 7.1002 5.15003 7.1302 5.10003C8.4402 2.07003 9.9202 1.38003 12.9002 2.52003Z" fill="#072AC8"/>
                    <path d="M18.2897 9.52002C17.8397 9.39002 17.3697 9.32002 16.8797 9.32002H9.96973L12.8697 2.59002L12.8997 2.52002C13.0397 2.57002 13.1897 2.64002 13.3397 2.69002L15.5497 3.62002C16.7797 4.13002 17.6397 4.66002 18.1697 5.30002C18.2597 5.42002 18.3397 5.53002 18.4197 5.66002C18.5097 5.80002 18.5797 5.94002 18.6197 6.09002C18.6597 6.18002 18.6897 6.26002 18.7097 6.35002C18.9697 7.20002 18.8097 8.23002 18.2897 9.52002Z" fill="#072AC8"/>
                    <path opacity="0.4" d="M21.7602 14.2V16.15C21.7602 16.35 21.7502 16.55 21.7402 16.74C21.5502 20.24 19.6002 22 15.9002 22H8.10023C7.85023 22 7.62023 21.98 7.39023 21.95C4.21023 21.74 2.51023 20.04 2.29023 16.86C2.26023 16.62 2.24023 16.39 2.24023 16.15V14.2C2.24023 12.19 3.46023 10.46 5.20023 9.71001C5.80023 9.45001 6.44023 9.32001 7.12023 9.32001H16.8802C17.3702 9.32001 17.8402 9.39001 18.2902 9.52001C20.2902 10.13 21.7602 11.99 21.7602 14.2Z" fill="#072AC8"/>
                    <path opacity="0.6" d="M6.95023 5.53003L5.20023 9.71003C3.46023 10.46 2.24023 12.19 2.24023 14.2V11.27C2.24023 8.43003 4.26023 6.06003 6.95023 5.53003Z" fill="#072AC8"/>
                    <path opacity="0.6" d="M21.76 11.27V14.2C21.76 11.99 20.29 10.13 18.29 9.52003C18.81 8.23003 18.97 7.20003 18.71 6.35003C18.69 6.26003 18.66 6.18003 18.62 6.09003C20.49 7.06003 21.76 9.03003 21.76 11.27Z" fill="#072AC8"/>
                    <path d="M14.5 16.75H9.5C9.09 16.75 8.75 16.41 8.75 16C8.75 15.59 9.09 15.25 9.5 15.25H14.5C14.91 15.25 15.25 15.59 15.25 16C15.25 16.41 14.91 16.75 14.5 16.75Z" fill="#072AC8"/>
                  </svg> 
                  : 
                  <img src="./images/payout.svg"/>
              }
                <p className="ml-[10px]">Payout</p>
            </div>
          </Link>
          <Link href='/transactions' className={ pathname === '/transactions' ? `flex items-center justify-between py-[10px] text-[#072AC8] px-5 bg-[#072AC81F]` :`px-5 flex items-center justify-between py-[10px] text-[#101828]`}>
            <div className="flex items-center">
              {
                pathname === '/transactions'?
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path opacity="0.4" d="M6.73 19.7C7.55 18.82 8.8 18.89 9.52 19.85L10.53 21.2C11.34 22.27 12.65 22.27 13.46 21.2L14.47 19.85C15.19 18.89 16.44 18.82 17.26 19.7C19.04 21.6 20.49 20.97 20.49 18.31V7.04C20.5 3.01 19.56 2 15.78 2H8.22C4.44 2 3.5 3.01 3.5 7.04V18.3C3.5 20.97 4.96 21.59 6.73 19.7Z" fill="#072AC8"/>
                  <path d="M16 7.75H8C7.59 7.75 7.25 7.41 7.25 7C7.25 6.59 7.59 6.25 8 6.25H16C16.41 6.25 16.75 6.59 16.75 7C16.75 7.41 16.41 7.75 16 7.75Z" fill="#072AC8"/>
                  <path d="M15 11.75H9C8.59 11.75 8.25 11.41 8.25 11C8.25 10.59 8.59 10.25 9 10.25H15C15.41 10.25 15.75 10.59 15.75 11C15.75 11.41 15.41 11.75 15 11.75Z" fill="#072AC8"/>
                </svg>
              :
                <img src="./images/receipt.svg" alt="" />
              }
                <p className="ml-[10px]">Transactions</p>
            </div>
          </Link>
        </div>

        <div className=" my-10 text-white">
          <p className="text-[12px] text-[#98A2B3] mb-2 px-3">ACCOUNT</p>
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
              <p className="ml-[10px]">Settings</p>
            </div>
          </Link>
          <Link href='/help-and-support' className={ pathname === '/help-and-support' ? `flex items-center justify-between py-[10px] text-[#072AC8] bg-[#072AC81F] px-5` :`px-5 flex items-center justify-between py-[10px] text-[#101828]`}>
            <div className="flex items-center">
              {
                pathname === '/help-and-support'? 
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path opacity="0.4" d="M17 18.4299H13L8.54999 21.39C7.88999 21.83 7 21.3599 7 20.5599V18.4299C4 18.4299 2 16.4299 2 13.4299V7.42993C2 4.42993 4 2.42993 7 2.42993H17C20 2.42993 22 4.42993 22 7.42993V13.4299C22 16.4299 20 18.4299 17 18.4299Z" fill="#072AC8"/>
                    <path d="M11.9998 12.11C11.5898 12.11 11.2498 11.77 11.2498 11.36V11.15C11.2498 9.99002 12.0998 9.42001 12.4198 9.20001C12.7898 8.95001 12.9098 8.78002 12.9098 8.52002C12.9098 8.02002 12.4998 7.60999 11.9998 7.60999C11.4998 7.60999 11.0898 8.02002 11.0898 8.52002C11.0898 8.93002 10.7498 9.27002 10.3398 9.27002C9.92984 9.27002 9.58984 8.93002 9.58984 8.52002C9.58984 7.19002 10.6698 6.10999 11.9998 6.10999C13.3298 6.10999 14.4098 7.19002 14.4098 8.52002C14.4098 9.66002 13.5698 10.23 13.2598 10.44C12.8698 10.7 12.7498 10.87 12.7498 11.15V11.36C12.7498 11.78 12.4098 12.11 11.9998 12.11Z" fill="#072AC8"/>
                    <path d="M12 14.6C11.58 14.6 11.25 14.26 11.25 13.85C11.25 13.44 11.59 13.1 12 13.1C12.41 13.1 12.75 13.44 12.75 13.85C12.75 14.26 12.42 14.6 12 14.6Z" fill="#072AC8"/>
                  </svg>
                  : 
                  <img src="./images/message-question.svg"/>
              }
                <p className="ml-[10px]">Help & Support</p>
            </div>
          </Link>
          <Link href='/' className='px-5 flex items-center justify-between py-[10px] text-[#101828]'>
            <div className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path opacity="0.4" d="M9 7.2V16.79C9 20 11 22 14.2 22H16.79C19.99 22 21.99 20 21.99 16.8V7.2C22 4 20 2 16.8 2H14.2C11 2 9 4 9 7.2Z" fill="#101828"/>
                <path d="M12.43 8.12002L15.78 11.47C16.07 11.76 16.07 12.24 15.78 12.53L12.43 15.88C12.14 16.17 11.66 16.17 11.37 15.88C11.08 15.59 11.08 15.11 11.37 14.82L13.44 12.75H2.75C2.34 12.75 2 12.41 2 12C2 11.59 2.34 11.25 2.75 11.25H13.44L11.37 9.18002C11.22 9.03002 11.15 8.84002 11.15 8.65002C11.15 8.46002 11.22 8.27002 11.37 8.12002C11.66 7.82002 12.13 7.82002 12.43 8.12002Z" fill="#101828"/>
              </svg>
              <p className="ml-[10px]">Logout</p>
            </div>
          </Link>
        </div>

        <div className="mx-[32px] mt-10">
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