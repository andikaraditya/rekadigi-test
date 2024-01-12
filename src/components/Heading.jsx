import React from "react"

function Heading() {
    return (
        <header>
            <h1 className='text-4xl font-bold text-slate-800'>Customer</h1>
            <p className="mt-3 text-xl font-semibold text-slate-400">You can manage and organize your customer and other things here</p>
            <div className="flex justify-end border-b-2">
                <div className="hover:cursor-pointer text-xl w-[230px] font-bold  h-[40px] text-center text-primary border-b-2 border-primary">
                    Customer
                </div>
                <div className="hover:cursor-pointer text-xl w-[230px] font-bold text-slate-400 h-[40px] text-center hover:text-primary hover:border-b-2 hover:border-primary transition-all duration-100">
                    Promo
                </div>
                <div className="hover:cursor-pointer text-xl w-[230px] font-bold text-slate-400 h-[40px] text-center hover:text-primary hover:border-b-2 hover:border-primary transition-all duration-100">
                    Voucher
                </div>
            </div>
        </header>
    );
}

export default Heading;