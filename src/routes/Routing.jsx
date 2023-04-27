import { Route, Routes } from "react-router-dom"
import LayoutNavSide from "../layouts/LayoutNavSide"
import Data from "../pages/Data"
import Home from "../pages/Home"
import Mail from "../pages/Mail"
import AuthRoute from "./AuthRoute"

const Routing = () => {
  return (
    <Routes>
      <Route element={<AuthRoute />}>
        <Route path="/" element={<Home/>} />
        <Route path="/mail" element={<Mail/>} />
        <Route path="/data" element={<Data/>} />
      </Route>
    </Routes>
  )
}
export default Routing