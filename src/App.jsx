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
                    </div>
                </div>
            </div>
        </>
    )
}

export default App
