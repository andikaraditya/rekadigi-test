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
    const [open, setOpen] = useState(true)

    const handleResize = () => {
        if (window.innerWidth > 1080) {
            setOpen(true)
        } else {
            setOpen(false)
        }
    }
    
    useEffect(() => {
        window.addEventListener("resize", handleResize)
    })

    return (
        <nav className={`bg-slate-50 pt-7 flex flex-col min-h-[100vh] border-e-2 relative transition-all duration-200
        ${open ? "w-[300px]" : "w-[100px]"}
        `}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"  viewBox="0 0 16 16"
                className={`absolute w-[40px] rotate-180 h-auto text-primary  bg-white rounded-full cursor-pointer
                ${!open ? "rotate-0 top-3 left-9" : "right-[-20px] top-[8rem]"}
                `}
                onClick={() => setOpen(!open)}
            >
                <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z"/>
            </svg>
            <div className="flex justify-center gap-3">
                <img src={logo} alt="" className={`w-[30px] ${!open && "hidden"}`} />
                <p className={`text-primary text-5xl font-bold text-center ${!open && "hidden"}`}>square</p>
            </div>
            <p className="text-slate-600 text-xl mt-7 px-7">Menu</p>
            {items1.map((el, index) => {
                return <SidebarItem key={index} open={open} name={el} />
            })}
            <p className="text-slate-600 text-xl mt-7 px-7 overflow-hidden">Integration</p>
            {items2.map((el, index) => {
                return <SidebarItem key={index} open={open} name={el} />
            })}
            <div className="border-t-2 w-[100%] py-5 absolute bottom-0 flex flex-col items-center">
                <div className={`flex gap-4 items-center ${!open && "hidden"}`}>
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

function SidebarItem({ name, open }) {

    const [active, setActive] = useState(false)

    useEffect(() => {
        if (name === "Customer") {
            setActive(true)
        }
    }, [])
    return (
        <div className={`nav-item 
            ${active && "active"}
            ${!open && "mt-3 ms-8 px-2 py-2"}
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
            <p className={`ms-4 ${!open && "hidden"}`}>{name}</p>
            {name === "Dashboard" && <span className={`absolute right-6 bg-gradient-to-br from-orange-300 to-orange-600 w-[30px] h-[30px] rounded-full text-center text-white text-[1rem] block xl:hidden 
            ${!open && "hidden"}
            `}>4</span>}
        </div>
    )
}

export default Sidebar
