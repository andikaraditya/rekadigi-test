import React from "react"
import TableRow from "./TableRow";

function Table({ data }) {
    return (
        <div className="flex flex-col mt-4 gap-3">
            <div className="flex bg-slate-100 bg-opacity-50 h-[50px] rounded-t-lg">
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
            <div className="mt-10 bg-slate-100 p-5 rounded-xl flex">
                <p className="text-slate-400 font-semibold text-xl flex-1">
                    Showing 10 Data Customers
                </p>
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
    )
}

export default Table
