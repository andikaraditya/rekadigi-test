import React, { useEffect, useState } from "react"
import logo from "../assets/logo.svg";

const items1 = [
    "Dashboard",
    "Stock",
    "Customer",
    "Restaurant",
    "Design",
    "Report",
    "Role & Admin",
    "Settings",
]

const items2 = ["Stock", "Supply"]

function Sidebar() {
    return (
        <nav className="bg-slate-50 w-[300px] pt-7 flex flex-col min-h-[100vh] border-e-2 relative">
            <div className="flex justify-center gap-3">
                <img src={logo} alt="" className="w-[30px]" />
                <p className="text-primary text-5xl font-bold text-center">square</p>
            </div>
            <p className="text-slate-600 text-xl mt-7 px-7">Menu</p>
            {items1.map((el, index) => {
                return <SidebarItem key={index} name={el} />
            })}
            <p className="text-slate-600 text-xl mt-7 px-7">Integration</p>
            {items2.map((el, index) => {
                return <SidebarItem key={index} name={el} />
            })}
            <div className="border-t-2 w-[100%] py-5 absolute bottom-0 flex flex-col items-center">
                <div className="flex gap-4 items-center">
                    <img
                        src="https://cdn-icons-png.flaticon.com/512/4646/4646084.png"
                        alt=""
                        className="w-10 h-10"
                    />
                    <div>
                        <p className="font-bold text-xl">Savannah N</p>
                        <p className="text-sm">Food Quality Manager</p>
                    </div>
                </div>
                <div className="w-4/5 mt-7 bg-red-100 text-red-800 font-bold py-2 rounded-lg flex justify-center items-center gap-2 hover:cursor-pointer">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        viewBox="0 0 16 16"
                    >
                        <path
                            fill-rule="evenodd"
                            d="M6 12.5a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-8a.5.5 0 0 0-.5.5v2a.5.5 0 0 1-1 0v-2A1.5 1.5 0 0 1 6.5 2h8A1.5 1.5 0 0 1 16 3.5v9a1.5 1.5 0 0 1-1.5 1.5h-8A1.5 1.5 0 0 1 5 12.5v-2a.5.5 0 0 1 1 0z"
                        />
                        <path
                            fill-rule="evenodd"
                            d="M.146 8.354a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L1.707 7.5H10.5a.5.5 0 0 1 0 1H1.707l2.147 2.146a.5.5 0 0 1-.708.708z"
                        />
                    </svg>
                    Logout
                </div>
            </div>
        </nav>
    )
}

function SidebarItem({ name }) {

    const [active, setActive] = useState(false)

    useEffect(() => {
        if (name === "Customer") {
            setActive(true)
        }
    }, [])
    return (
        <div className={`nav-item 
            ${active && "active"}
        `}>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
                className="w-6 h-6"
            >
                <path d="M8.186 1.113a.5.5 0 0 0-.372 0L1.846 3.5 8 5.961 14.154 3.5zM15 4.239l-6.5 2.6v7.922l6.5-2.6V4.24zM7.5 14.762V6.838L1 4.239v7.923zM7.443.184a1.5 1.5 0 0 1 1.114 0l7.129 2.852A.5.5 0 0 1 16 3.5v8.662a1 1 0 0 1-.629.928l-7.185 2.874a.5.5 0 0 1-.372 0L.63 13.09a1 1 0 0 1-.63-.928V3.5a.5.5 0 0 1 .314-.464z" />
            </svg>
            <p className="ms-4">{name}</p>
            {name === "Dashboard" && <span className="absolute right-6 bg-gradient-to-br from-orange-300 to-orange-600 w-[30px] h-[30px] rounded-full text-center text-white text-[1rem]">4</span>}
        </div>
    )
}

export default Sidebar
