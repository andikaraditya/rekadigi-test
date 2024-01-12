import React from "react"
import ChartLine from "../assets/chart-lines.svg"
import ellips1 from "../assets/ellips1.svg";
import ellips2 from "../assets/ellips2.svg";
import ellips3 from "../assets/ellips3.svg";
import curve1 from "../assets/curve1.svg";
import curve2 from "../assets/curve2.svg";

function SideContent() {
    return (
        <div className="w-[270px] flex flex-col gap-4 2xl:w-[200px]">
            <div className="bg-primary rounded-xl p-5 h-[300px] flex flex-col items-start justify-between relative overflow-hidden">
                <p className="text-white text-2xl w-4/5 z-40">See analytics of the Customer Clearly</p>
                <button className="p-3 bg-white bg-opacity-20 rounded-xl text-white z-50">
                    See Analytics
                </button>
                <img src={curve1} className="absolute top-0 left-0 z-0" alt="" />
                <img src={curve2} className="absolute top-0 left-0 z-0" alt="" />
                <img src={ellips1} className="absolute bottom-0 right-0 z-20" alt="" />
                <img src={ellips2} className="absolute bottom-0 right-0 z-10" alt="" />
                <img src={ellips3} className="absolute bottom-0 right-0 z-0" alt="" />
            </div>
            <div className="bg-gradient-to-b from-slate-100 to-slate-50 bg-opacity-10 p-5 flex-1 rounded-xl relative overflow-hidden">
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
                    <img src={ChartLine} className="absolute bottom-0 w-[100%] left-[-10px] scale-125" alt="" />
            </div>
        </div>
    )
}

export default SideContent
