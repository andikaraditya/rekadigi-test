import React from "react"
import "./App.css"
import Sidebar from "./components/Sidebar"
import Heading from "./components/Heading"

function App() {
    return (
        <>
            <div className="flex">
                <Sidebar />
                <div className="p-6 flex-1">
                    <Heading/>
                </div>
            </div>
        </>
    )
}

export default App
