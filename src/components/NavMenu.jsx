import { faHouse, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react"

function NavMenu() {
  const [active, setActive] = useState('home')

  return (
    <div className=" bg-[#121212] p-2 rounded-md">
      <div className=" flex m-4 items-center hover:cursor-pointer" style={active === 'home' ? {} : { opacity: 0.5 }} onClick={()=>{setActive('home')}}>
        <FontAwesomeIcon icon={faHouse} style={{ color: "#ffffff", }} />
        <h6 className=" font-medium ml-4">Home</h6>
      </div>
      <div className=" flex m-4 items-center hover:cursor-pointer" style={active === 'search' ? {} : { opacity: 0.5 }} onClick={()=>{setActive('search')}}>
        <FontAwesomeIcon icon={faMagnifyingGlass} style={{ color: "#ffffff", }} />
        <h6 className=" font-medium ml-4">Search</h6>
      </div>
    </div>
  )
}
export default NavMenu