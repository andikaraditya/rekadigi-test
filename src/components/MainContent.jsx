import React from "react"
import Banner from "./Banner"
import TableRow from "./TableRow"
const data = [
    {
        name: "Walter White",
        level: "warga",
        favoriteMenu: "Chicken & Ribs Combo",
        totalTransaction: 135000,
    },
    {
        name: "Dean Fox",
        level: "juragan",
        favoriteMenu: "Pizza",
        totalTransaction: 160332,
    },
    {
        name: "Isaac Tate",
        level: "juragan",
        favoriteMenu: "Taco",
        totalTransaction: 149678,
    },
    {
        name: "Chad Sanders",
        level: "juragan",
        favoriteMenu: "Chicken & Ribs Combo",
        totalTransaction: 158618,
    },
    {
        name: "Jeffrey Logan",
        level: "sultan",
        favoriteMenu: "American Pretzel",
        totalTransaction: 203327,
    },
    {
        name: "Jim White",
        level: "sultan",
        favoriteMenu: "McDonalds",
        totalTransaction: 186056,
    },
    {
        name: "Douglas Norman",
        level: "sultan",
        favoriteMenu: "Schwarma",
        totalTransaction: 153827,
    },
    {
        name: "Flora Garza",
        level: "konglomerat",
        favoriteMenu: "Chicken & Ribs Combo",
        totalTransaction: 141555,
    },
    {
        name: "Josie Hall",
        level: "konglomerat",
        favoriteMenu: "Chicken & Ribs Combo",
        totalTransaction: 125949,
    },
]

function MainContent() {
    return (
        <>
            <div className="flex-1">
                <Banner />
                <div className="flex flex-col mt-4 gap-3">
                    <div className="flex bg-slate-100 bg-opacity-50 h-[50px] rounded-t-lg mb-4">
                        <div className="table-head">
                            <p className="my-auto">Customer Name</p>
                        </div>
                        <div className="table-head">
                            <p className="my-auto">level</p>
                        </div>
                        <div className="table-head">
                            <p className="my-auto">Favourite Menu</p>
                        </div>
                        <div className="table-head">
                            <p className="my-auto">Total Transaction</p>
                        </div>
                        <div className="table-head">
                            <p className="my-auto">Action</p>
                        </div>
                    </div>
                    {data.map((el, index) => {
                        return <TableRow key={index} item={el} />
                    })}
                </div>
                <div className="mt-10 bg-slate-100 p-5 rounded-xl flex">
                    <p className="text-slate-400 font-semibold text-xl flex-1">Showing 10 Data Customers</p>
                    <div className="flex gap-2">
                        <p className="page-number bg-white shadow-md rounded-md text-black">1</p>
                        <p className="page-number">2</p>
                        <p className="page-number">3</p>
                        <p className="page-number">...</p>
                        <p className="page-number">38</p>
                        <p className="page-number">Next →</p>
                    </div>
                </div>
            </div>
            <div className="w-[270px] flex flex-col gap-4">
                <div className="bg-primary rounded-xl p-5 h-[300px] flex flex-col items-start justify-between">
                    <p className="text-white text-2xl w-4/5">
                        See analytics of the Customer Clearly
                    </p>
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
                            <p className="font-bold w-4/5">
                                Nasi Goreng Jamur Special Resto Pak Min
                            </p>
                        </div>
                        <p className="top-menu-item">2. Tangerang Sapi Gurih</p>
                        <p className="top-menu-item">3. Nasi Gudeg Ceker</p>
                        <p className="top-menu-item">4. Nasi Ayam Serundeng</p>
                        <p className="top-menu-item">5. Nasi Goreng Seafood</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MainContent
