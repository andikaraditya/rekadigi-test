import React from "react"

function SideContent() {
    return (
        <div className="w-[270px] flex flex-col gap-4">
            <div className="bg-primary rounded-xl p-5 h-[300px] flex flex-col items-start justify-between">
                <p className="text-white text-2xl w-4/5">See analytics of the Customer Clearly</p>
                <button className="p-3 bg-white bg-opacity-20 rounded-xl text-white">
                    See Analytics
                </button>
            </div>
            <div className="bg-gradient-to-b from-slate-100 to-slate-50 bg-opacity-10 p-5 flex-1 rounded-xl">
                <p className="text-3xl w-4/5 font-bold">
                    Top Menu <span className="text-[#F17300]">This Week</span>
                </p>
                <p className="my-4 text-slate-600">10 - 12 Agustus 2023</p>
                <div className="flex flex-col gap-7">
                    <div className="bg-white p-2 rounded-xl shadow-md shadow-slate-200 relative">
                        <div className="rank-1 rotate-12">1</div>
                        <p className="font-bold w-4/5">Nasi Goreng Jamur Special Resto Pak Min</p>
                    </div>
                    <p className="top-menu-item">2. Tangerang Sapi Gurih</p>
                    <p className="top-menu-item">3. Nasi Gudeg Ceker</p>
                    <p className="top-menu-item">4. Nasi Ayam Serundeng</p>
                    <p className="top-menu-item">5. Nasi Goreng Seafood</p>
                </div>
            </div>
        </div>
    )
}

export default SideContent
