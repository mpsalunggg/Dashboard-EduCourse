import Navbar from '../../components/Navbar'
import Sidebar from '../../components/Sidebar'

const LayoutNavSide = ({children}) => {
  return (
    <section className="w-full flex">
      <Sidebar />
      <div className="mx-5 flex-1 flex flex-col min-w-0">
        <Navbar />
        {children}
      </div>
    </section>
  )
}
export default LayoutNavSide
