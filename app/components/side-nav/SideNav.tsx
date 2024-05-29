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
                  <path opacity="0.4" d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81V16.18C2 19.83 4.17 22 7.81 22H16.18C19.82 22 21.99 19.83 21.99 16.19V7.81C22 4.17 19.83 2 16.19 2Z" fill="#292D32"/>
                  <path d="M8.82043 9.75C7.97043 9.75 7.12043 9.43 6.47043 8.78C6.18043 8.49 6.18043 8.01 6.47043 7.72C6.76043 7.43 7.24043 7.43 7.53043 7.72C8.24043 8.43 9.40043 8.43 10.1104 7.72C10.4004 7.43 10.8804 7.43 11.1704 7.72C11.4604 8.01 11.4604 8.49 11.1704 8.78C10.5204 9.42 9.67043 9.75 8.82043 9.75Z" fill="#292D32"/>
                  <path d="M15.1798 9.75C14.3298 9.75 13.4798 9.43 12.8298 8.78C12.5398 8.49 12.5398 8.01 12.8298 7.72C13.1198 7.43 13.5998 7.43 13.8898 7.72C14.5998 8.43 15.7598 8.43 16.4698 7.72C16.7598 7.43 17.2398 7.43 17.5298 7.72C17.8198 8.01 17.8198 8.49 17.5298 8.78C16.8798 9.42 16.0298 9.75 15.1798 9.75Z" fill="#292D32"/>
                  <path d="M15.5999 12.62H8.39988C7.69988 12.62 7.12988 13.19 7.12988 13.9C7.12988 16.59 9.31988 18.78 12.0099 18.78C14.6999 18.78 16.8899 16.59 16.8899 13.9C16.8799 13.2 16.2999 12.62 15.5999 12.62Z" fill="#292D32"/>
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
                  <path opacity="0.4" d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81V16.18C2 19.83 4.17 22 7.81 22H16.18C19.82 22 21.99 19.83 21.99 16.19V7.81C22 4.17 19.83 2 16.19 2Z" fill="#292D32"/>
                  <path d="M8.82043 9.75C7.97043 9.75 7.12043 9.43 6.47043 8.78C6.18043 8.49 6.18043 8.01 6.47043 7.72C6.76043 7.43 7.24043 7.43 7.53043 7.72C8.24043 8.43 9.40043 8.43 10.1104 7.72C10.4004 7.43 10.8804 7.43 11.1704 7.72C11.4604 8.01 11.4604 8.49 11.1704 8.78C10.5204 9.42 9.67043 9.75 8.82043 9.75Z" fill="#292D32"/>
                  <path d="M15.1798 9.75C14.3298 9.75 13.4798 9.43 12.8298 8.78C12.5398 8.49 12.5398 8.01 12.8298 7.72C13.1198 7.43 13.5998 7.43 13.8898 7.72C14.5998 8.43 15.7598 8.43 16.4698 7.72C16.7598 7.43 17.2398 7.43 17.5298 7.72C17.8198 8.01 17.8198 8.49 17.5298 8.78C16.8798 9.42 16.0298 9.75 15.1798 9.75Z" fill="#292D32"/>
                  <path d="M15.5999 12.62H8.39988C7.69988 12.62 7.12988 13.19 7.12988 13.9C7.12988 16.59 9.31988 18.78 12.0099 18.78C14.6999 18.78 16.8899 16.59 16.8899 13.9C16.8799 13.2 16.2999 12.62 15.5999 12.62Z" fill="#292D32"/>
                </svg>
                :
                <img src="./images/emoji-normal.svg"/>
              }
              <p className="ml-[10px]">Top-up</p>
            </div>
          </Link>
          <Link href='/payout' className={ pathname === '/payout' ? `flex items-center justify-between py-[10px] text-[#072AC8] bg-[#072AC81F] px-5` :`px-5 flex items-center justify-between py-[10px] text-[#101828]`}>
            <div className="flex items-center">
              {
                pathname === '/payout'? 
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path opacity="0.4" d="M22 8.52V3.98C22 2.57 21.36 2 19.77 2H15.73C14.14 2 13.5 2.57 13.5 3.98V8.51C13.5 9.93 14.14 10.49 15.73 10.49H19.77C21.36 10.5 22 9.93 22 8.52Z" fill="#072AC8"/>
                    <path d="M22 19.77V15.73C22 14.14 21.36 13.5 19.77 13.5H15.73C14.14 13.5 13.5 14.14 13.5 15.73V19.77C13.5 21.36 14.14 22 15.73 22H19.77C21.36 22 22 21.36 22 19.77Z" fill="#072AC8"/>
                    <path d="M10.5 8.52V3.98C10.5 2.57 9.86 2 8.27 2H4.23C2.64 2 2 2.57 2 3.98V8.51C2 9.93 2.64 10.49 4.23 10.49H8.27C9.86 10.5 10.5 9.93 10.5 8.52Z" fill="#072AC8"/>
                    <path opacity="0.4" d="M10.5 19.77V15.73C10.5 14.14 9.86 13.5 8.27 13.5H4.23C2.64 13.5 2 14.14 2 15.73V19.77C2 21.36 2.64 22 4.23 22H8.27C9.86 22 10.5 21.36 10.5 19.77Z" fill="#072AC8"/>
                  </svg> 
                  : 
                  <img src="./images/overview.svg"/>
              }
                <p className="ml-[10px]">Payout</p>
            </div>
          </Link>
          <Link href='/transactions' className={ pathname === '/transactions' ? `flex items-center justify-between py-[10px] text-[#072AC8] px-5 bg-[#072AC81F]` :`px-5 flex items-center justify-between py-[10px] text-[#101828]`}>
            <div className="flex items-center">
              {
                pathname === '/transactions'?
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
                  <path opacity="0.4" d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81V16.18C2 19.83 4.17 22 7.81 22H16.18C19.82 22 21.99 19.83 21.99 16.19V7.81C22 4.17 19.83 2 16.19 2Z" fill="#292D32"/>
                  <path d="M8.82043 9.75C7.97043 9.75 7.12043 9.43 6.47043 8.78C6.18043 8.49 6.18043 8.01 6.47043 7.72C6.76043 7.43 7.24043 7.43 7.53043 7.72C8.24043 8.43 9.40043 8.43 10.1104 7.72C10.4004 7.43 10.8804 7.43 11.1704 7.72C11.4604 8.01 11.4604 8.49 11.1704 8.78C10.5204 9.42 9.67043 9.75 8.82043 9.75Z" fill="#292D32"/>
                  <path d="M15.1798 9.75C14.3298 9.75 13.4798 9.43 12.8298 8.78C12.5398 8.49 12.5398 8.01 12.8298 7.72C13.1198 7.43 13.5998 7.43 13.8898 7.72C14.5998 8.43 15.7598 8.43 16.4698 7.72C16.7598 7.43 17.2398 7.43 17.5298 7.72C17.8198 8.01 17.8198 8.49 17.5298 8.78C16.8798 9.42 16.0298 9.75 15.1798 9.75Z" fill="#292D32"/>
                  <path d="M15.5999 12.62H8.39988C7.69988 12.62 7.12988 13.19 7.12988 13.9C7.12988 16.59 9.31988 18.78 12.0099 18.78C14.6999 18.78 16.8899 16.59 16.8899 13.9C16.8799 13.2 16.2999 12.62 15.5999 12.62Z" fill="#292D32"/>
                </svg>
                :
                <img src="./images/emoji-normal.svg"/>
              }
              <p className="ml-[10px]">Settings</p>
            </div>
          </Link>
          <Link href='/help-and-support' className={ pathname === '/help-and-support' ? `flex items-center justify-between py-[10px] text-[#072AC8] bg-[#072AC81F] px-5` :`px-5 flex items-center justify-between py-[10px] text-[#101828]`}>
            <div className="flex items-center">
              {
                pathname === '/help-and-support'? 
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path opacity="0.4" d="M22 8.52V3.98C22 2.57 21.36 2 19.77 2H15.73C14.14 2 13.5 2.57 13.5 3.98V8.51C13.5 9.93 14.14 10.49 15.73 10.49H19.77C21.36 10.5 22 9.93 22 8.52Z" fill="#072AC8"/>
                    <path d="M22 19.77V15.73C22 14.14 21.36 13.5 19.77 13.5H15.73C14.14 13.5 13.5 14.14 13.5 15.73V19.77C13.5 21.36 14.14 22 15.73 22H19.77C21.36 22 22 21.36 22 19.77Z" fill="#072AC8"/>
                    <path d="M10.5 8.52V3.98C10.5 2.57 9.86 2 8.27 2H4.23C2.64 2 2 2.57 2 3.98V8.51C2 9.93 2.64 10.49 4.23 10.49H8.27C9.86 10.5 10.5 9.93 10.5 8.52Z" fill="#072AC8"/>
                    <path opacity="0.4" d="M10.5 19.77V15.73C10.5 14.14 9.86 13.5 8.27 13.5H4.23C2.64 13.5 2 14.14 2 15.73V19.77C2 21.36 2.64 22 4.23 22H8.27C9.86 22 10.5 21.36 10.5 19.77Z" fill="#072AC8"/>
                  </svg> 
                  : 
                  <img src="./images/overview.svg"/>
              }
                <p className="ml-[10px]">Help & Support</p>
            </div>
          </Link>
          <Link href='/' className='px-5 flex items-center justify-between py-[10px] text-[#101828]'>
            <div className="flex items-center">
            <img src="./images/cup.svg" alt="" />
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