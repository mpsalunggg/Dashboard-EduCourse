import {
  HiOutlineHome,
  HiOutlineMail,
  HiOutlineFolderOpen,
  HiOutlineIdentification,
} from 'react-icons/hi'
import { useState } from 'react'
import { FiAlignLeft } from 'react-icons/fi'
import Logo from '../../assets/logo.png'
import { dataSidebar } from '../../utils/dataSidebar'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { toggleSidebar } from '../../features/sidebar/sidebarSlice'

const Sidebar = () => {
  const {open} = useSelector((store) => store.sidebar)
  const dispatch = useDispatch()
  // const [open, setOpen] = useState(false)
  const navigate = useNavigate()

  return (
    <section className="py-4 pl-4">
      <div
        className={`hidden bg-transparet lg:block lg:p-4 pr-0 transition-all ${
          open ? 'w-[230px]' : 'w-[70px]'
        }`}
      ></div>
      <div
        className={`bg-white ${
          open ? 'w-[230px]' : 'w-[70px]'
        } transition-all z-[99] top-0 bottom-0 ${
          open ? '' : '-left-20'
        } lg:left-5 fixed my-4 drop-shadow-xl rounded-xl flex flex-col items-center justify-between`}
      >
        <div className="w-full">
          {/* Logo & Hamburger Menu */}
          <div
            className={`h-[70px] w-full flex ${
              open ? 'justify-between gap-5 px-6' : 'justify-center'
            } items-center text-2xl`}
          >
            {open ? <img src={Logo} className="w-[120px]" /> : null}
            <FiAlignLeft
              className="cursor-pointer text-edu-blue"
              onClick={() => dispatch(toggleSidebar())}
            />
          </div>
          <div className={`${open ? 'px-5' : ''}`}>
            <hr className="border-gray-200 w-full mt-2" />
          </div>
          {/* <span className="border-b-[1px] w-full"></span> */}
          {dataSidebar.map((item) => {
            const { id, title } = item
            return (
              <div
                key={id}
                className={`flex w-full p-4 hover:bg-slate-200 cursor-pointer ${
                  open ? 'gap-8 px-6' : 'justify-center'
                } items-center`}
                onClick={() => {
                  title === 'Home'
                    ? navigate('/')
                    : title === 'Mail'
                    ? navigate('/mail')
                    : navigate('/data')
                  dispatch(toggleSidebar())
                }}
              >
                {(title === 'Home' && (
                  <HiOutlineHome className="text-2xl text-edu-blue" />
                )) ||
                  (title === 'Mail' && (
                    <HiOutlineMail className="text-2xl text-edu-blue" />
                  )) ||
                  (title === 'Data' && (
                    <HiOutlineFolderOpen className="text-2xl text-edu-blue" />
                  ))}
                {open ? (
                  <p className="text-edu-blue cursor-pointer">{title}</p>
                ) : null}
              </div>
            )
          })}
          {/* Garis pemisah */}
        </div>
        <div className="w-full h-28">
          <div className={`${open ? 'px-5' : ''}`}>
            <hr className="border-gray-200 w-full mt-2" />
          </div>
          <div
            className={`flex w-full p-4 hover:bg-slate-200 cursor-pointer ${
              open ? 'gap-8 px-6' : 'justify-center'
            } items-center`}
          >
            <HiOutlineIdentification className="text-2xl text-edu-blue" />
            {open ? (
              <p className="text-edu-blue cursor-pointer">Profile</p>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Sidebar
