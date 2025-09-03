import { NavLink, Route } from "react-router-dom"
import Mainpage from "./Components/mainpage"
import Mealinfo from "./Components/Mealinfo"
import { Router, Routes } from "react-router-dom"
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Mainpage />} />
        <Route path="/:mealid" element={<Mealinfo />} />
      </Routes>
    </>
  )
}
export default App
