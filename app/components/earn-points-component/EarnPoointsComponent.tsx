import React from 'react'
import SideNav from '../side-nav/SideNav'
import TopNav from '../top-nav/TopNav'
import { GoArrowRight } from "react-icons/go";
import { FaDiscord, FaGlobe, FaTwitter } from 'react-icons/fa';
import Link from 'next/link';

const EarnPoointsComponent = () => {
  return (
    <div>
        <>
            <SideNav />
            <div className="w-[84%] bg-[#F5F5F5] ml-auto h-[100dvh]">
                <TopNav />
                <div className="p-[10px] bg-white mt-5 mx-[30px]">
                    <div className='flex items-start gap-5 p-3'>
                        <div className='w-[50%] bg-[#C7C7C71F] rounded-[12px] p-4'>
                            <p className='text-primary-color text-[30px]'>Onboarding: Earn Rehoboth Rewards</p>
                            <p className='text-[#5D5D5D] text-[14px]'>Complete the series of tasks to be able to claim your own Rehoboth NFT and keep developing it to receive more reward points.</p>
                            <div className='w-full'>
                                <div className='grid grid-cols-5 bg-[#F1F1F1] mt-[4.5rem] items-center gap-4'>
                                    <img src="./images/cookie-image.svg" alt="" />
                                    <img src="./images/cookie-image1.svg" alt="" />
                                    <img src="./images/cookie-image2.svg" alt="" />
                                    <img src="./images/cookie-image3.svg" alt="" />
                                    <img src="./images/cookie-image4.svg" className='w-[70%] ml-auto' alt="" />
                                </div>
                            </div>
                        </div>
                        <div className='w-[50%]'>
                            <div className="flex items-center justify-between bg-primary-color rounded-[11px] text-white p-4">
                                <div>
                                    <h2 className="font-[500] text-[17px]">My Reward Rank</h2>
                                    <p className='text-[12px] font-[300]'>Check your reward amount and eligibility</p>
                                    <button className="bg-white text-blue-600 py-2 px-4 rounded-md flex items-center gap-2 mt-7">
                                        <p>Go to leader board</p>
                                        <GoArrowRight />
                                    </button>
                                </div>
                                <div className="flex items-center">
                                    <div className="ml-4">
                                        <img src="./images/chart.svg" alt="" />
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center justify-between bg-[#C7C7C71F] border border-[#BDBDBD] my-3 rounded-[11px] text-white p-4">
                                <div>
                                    <h2 className="font-[500] text-[17px] text-[#121212]">Invite friends for bigger rewards</h2>
                                    <p className='text-[12px] font-[300] text-[#5D5D5D]'>Check your reward amount and eligibility</p>
                                    <button className="bg-primary-color py-2 px-4 rounded-md flex items-center gap-2 mt-7">
                                        <p>Go to Referrals</p>
                                        <GoArrowRight />
                                    </button>
                                </div>
                                <div className="flex items-center">
                                    <div className="ml-4">
                                        <img src="./images/announcement.svg" alt="" />
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center justify-between bg-[#C7C7C71F] border border-[#BDBDBD] my-3 rounded-[11px] text-white p-4">
                                <div>
                                    <h2 className="font-[500] text-[17px] text-[#121212]">Make some transactions to boost your scores</h2>
                                    <p className='text-[12px] font-[300] text-[#5D5D5D]'>Check your reward amount and eligibility</p>
                                    <button className="bg-primary-color py-2 px-4 rounded-md flex items-center gap-2 mt-7">
                                        <p>Explore ecosystem</p>
                                        <GoArrowRight />
                                    </button>
                                </div>
                                <div className="flex items-center">
                                    <div className="ml-4">
                                        <img src="./images/lightning.svg" alt="" />
                                    </div>
                                </div>
                            </div>
                            <div className="mx-auto bg-white rounded-[11px] overflow-hidden border border-[#BDBDBD]">
                                <div className="py-4">
                                    <h2 className="text-xl font-semibold text-gray-800 mb-4 px-4">Social Links</h2>
                                    <div className="flex items-center justify-between py-2 border-t border-gray-200 px-4">
                                        <div className="flex items-center">
                                            <img src="./images/global-search.svg" alt="" />
                                            <span className="ml-2 text-gray-700">Website</span>
                                        </div>
                                        <Link href="https://www.rehobothfinance.com/" className="text-[12px] underline">
                                            https://www.rehobothfinance.com
                                        </Link>
                                    </div>
                                    <div className="flex items-center justify-between py-4 px-4">
                                        <div className="flex items-center">
                                            <img src="./images/twitter-x.svg" alt="" />
                                            <span className="ml-2 text-gray-700">Twitter</span>
                                        </div>
                                        <Link href="https://x.com/rehobothfinance_com" className="text-[12px] underline">
                                            https://x.com/rehobothfinance_com
                                        </Link>
                                    </div>
                                    <div className="flex items-center justify-between px-4 pt-4">
                                        <div className="flex items-center">
                                            <img src="./images/discord.svg" alt="" />
                                            <span className="ml-2 text-gray-700">Discord</span>
                                        </div>
                                        <Link href="https://discord.com/invite/rehobothfinance" className="text-[12px] underline">
                                            https://discord.com/invite/rehobothfinance
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    </div>
  )
}

export default EarnPoointsComponent