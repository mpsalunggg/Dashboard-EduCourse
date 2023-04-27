import { Outlet } from "react-router-dom"
import LayoutNavSide from "../layouts/LayoutNavSide"

const AuthRoute = () => {
  return (
    <>
        <LayoutNavSide>
            <Outlet/>
        </LayoutNavSide>
    </>
  )
}
export default AuthRoute