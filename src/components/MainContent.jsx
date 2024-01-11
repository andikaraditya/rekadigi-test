import React from "react"
import Banner from "./Banner"
import TableRow from "./TableRow"
const data = [
    {
        name: "Walter White",
        level: "warga",
        favoriteMenu: "Chicken & Ribs Combo",
        totalTransaction: 135000
    },
    {
        name: "Dean Fox",
        level: "juragan",
        favoriteMenu: "Pizza",
        totalTransaction: 160332
    },
    {
        name: "Isaac Tate",
        level: "juragan",
        favoriteMenu: "Taco",
        totalTransaction: 149678
    },
    {
        name: "Chad Sanders",
        level: "juragan",
        favoriteMenu: "Chicken & Ribs Combo",
        totalTransaction: 158618
    },
    {
        name: "Jeffrey Logan",
        level: "sultan",
        favoriteMenu: "American Pretzel",
        totalTransaction: 203327
    },
    {
        name: "Jim White",
        level: "sultan",
        favoriteMenu: "McDonalds",
        totalTransaction: 186056
    },
    {
        name: "Douglas Norman",
        level: "sultan",
        favoriteMenu: "Schwarma",
        totalTransaction: 153827
    },
    {
        name: "Flora Garza",
        level: "konglomerat",
        favoriteMenu: "Chicken & Ribs Combo",
        totalTransaction: 141555
    },
    {
        name: "Josie Hall",
        level: "konglomerat",
        favoriteMenu: "Chicken & Ribs Combo",
        totalTransaction: 125949
    },
]

function MainContent() {
    return (
        <div className="flex-1">
            <Banner/>
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
                    return <TableRow 
                    key={index}
                    item={el}
                    />
                })}
            </div>
        </div>
    )
}

export default MainContent
