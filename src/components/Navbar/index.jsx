import { FiAlignLeft } from "react-icons/fi"
import { useDispatch } from "react-redux"
import { toggleSidebar } from "../../features/sidebar/sidebarSlice"

const Navbar = () => {
  const dispatch = useDispatch()
  return (
    <section className="py-4 sticky top-0">
      <nav className="w-full top-0 z-50 bg-edu-blue h-[70px] rounded-xl flex items-center p-4 drop-shadow-xl justify-between">
        <div className="flex items-center gap-3">
          <FiAlignLeft
            className="cursor-pointer text-white text-xl lg:hidden"
            onClick={() => dispatch(toggleSidebar())}
          />
          <h1 className="text-white">Dashboard Educourse</h1>
        </div>
        <img
          src="https://profilemagazine.com/wp-content/uploads/2020/04/Ajmere-Dale-Square-thumbnail.jpg"
          className="w-10 rounded-full"
        />
      </nav>
    </section>
  )
}
export default Navbar