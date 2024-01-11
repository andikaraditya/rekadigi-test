import React from "react"

const items1 = [
    "Dashboard",
    "Stock",
    "Customer",
    "Restaurant",
    "Design",
    "Report",
    "Role & Admin",
    "Settings"
]

const items2 = [
    "Stock",
    "Supply"
]

function Sidebar() {
    return (
        <nav className="bg-slate-50 w-[300px] px-9 pt-7 flex flex-col min-h-[100vh]">
            <p className="text-primary text-5xl font-bold text-center">square</p>
            <p className="text-slate-600 text-xl mt-7">Menu</p>
            {items1.map((el, index) => {
                return <SidebarItem
                    key={index}
                    name={el}
                />
            })}
            <p className="text-slate-600 text-xl mt-7">Integration</p>
            {items2.map((el, index) => {
                return <SidebarItem
                key={index}
                    name={el}
                />
            })}
        </nav>
    )
}

function SidebarItem({name}){

    return(
        <div className="mt-9 text-slate-600 flex items-center text-xl font-bold hover:cursor-pointer">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                    className="w-7 h-7"
                >
                    <path d="M8.186 1.113a.5.5 0 0 0-.372 0L1.846 3.5 8 5.961 14.154 3.5zM15 4.239l-6.5 2.6v7.922l6.5-2.6V4.24zM7.5 14.762V6.838L1 4.239v7.923zM7.443.184a1.5 1.5 0 0 1 1.114 0l7.129 2.852A.5.5 0 0 1 16 3.5v8.662a1 1 0 0 1-.629.928l-7.185 2.874a.5.5 0 0 1-.372 0L.63 13.09a1 1 0 0 1-.63-.928V3.5a.5.5 0 0 1 .314-.464z"/>
                </svg>
                <p className="ms-4">{name}</p>
            </div>
    )
}

export default Sidebar
