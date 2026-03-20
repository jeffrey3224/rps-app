import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Standard from "./pages/Standard"
import Bonus from "./pages/Bonus"


function App() {

  return (
    <div className="w-full h-dvh py-10 px-7 md:px-15 flex flex-col">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/standard" element={<Standard />} />
        <Route path="/bonus" element={<Bonus />} />
      </Routes>
    </div>

  )
}

export default App
