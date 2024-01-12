import React from "react"
import Banner from "./Banner"
import Table from "./Table"
import SideContent from "./SideContent"
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
                <Table
                    data={data}
                />
            </div>
            <SideContent/>
        </>
    )
}

export default MainContent
