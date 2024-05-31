import React from 'react'

const MissionModal = ({setMissionModal} : {setMissionModal : any}) => {
  return (
    <div>
        <div className="h-full w-full fixed top-0 left-0 z-[99]" style={{ background: "rgba(14, 14, 14, 0.58)" }} onClick={() => setMissionModal(false)} ></div>
        <div className="bg-white w-[450px] fixed top-[50%] left-[50%] z-[100] rounded-[8px]" style={{ transform: "translate(-50%, -50%)" }}>
            <div className="w-full bg-gradient-to-r from-primary-color to-blue-400 text-white p-4 rounded-t-[8px] flex flex-col items-start">
                <p className="text-sm">Task 04</p>
                <p className="text-2xl font-bold mt-2">Make your first deposit</p>
            </div>
            <div className="flex flex-col items-center mt-10 gap-4">
                <button className="bg-blue-600 text-white py-2 px-8 rounded-[11px] flex items-center">
                + Execute
                </button>
                <button className="border border-blue-600 text-blue-600 py-2 px-8 rounded-[11px]">
                Claim Reward
                </button>
            </div>
        </div>
    </div>
  )
}

export default MissionModal