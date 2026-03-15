import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Standard from "./pages/Standard"
import Spock from "./pages/Spock"


function App() {

  return (
    <main className="w-[100vw] h-screen flex justify-center items-center">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/standard" element={<Standard />} />
        <Route path="/spock" element={<Spock />} />
      </Routes>
    </main>
      
    
  )
}

export default App
