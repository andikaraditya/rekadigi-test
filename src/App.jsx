import React from "react"
import "./App.css"
import Sidebar from "./components/Sidebar"
import Heading from "./components/Heading"
import MainContent from "./components/MainContent"

function App() {
    return (
        <>
            <div className="flex">
                <Sidebar />
                <div className="p-6 flex-1">
                    <Heading/>
                    <div className="flex mt-5 gap-5">
                        <MainContent/>
                        <div className="w-[300px]">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci cumque nobis ab dignissimos ea quisquam rem atque totam ducimus accusamus quaerat, corrupti illo labore necessitatibus quo ad architecto sit deleniti.
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default App
