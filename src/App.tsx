import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Standard from "./pages/Standard"
import Bonus from "./pages/Bonus"


function App() {

  return (
    <div className="w-[100vw] min-h-screen flex justify-center items-center">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/standard" element={<Standard />} />
        <Route path="/bonus" element={<Bonus />} />
      </Routes>
    </div>

  )
}

export default App
