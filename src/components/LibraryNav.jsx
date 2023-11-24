import { faFloppyDisk, faList, faMagnifyingGlass, faPlus } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Pill from "./Pill"
import Playlists from "./Playlists"

function LibraryNav() {
  return (
    <div className="bg-[#121212] p-2 rounded-md mt-2 h-[85%]">
      <div className="flex m-4 items-center justify-between">
        <div className="flex items-center transition ease-in hover:opacity-100 opacity-50 cursor-pointer duration-300">
          <FontAwesomeIcon icon={faFloppyDisk} style={{ color: "#ffffff", }} />
          <h6 className=" font-medium ml-4">Your Library</h6>
        </div>
        <div className="hover:opacity-100 opacity-50 cursor-pointer">
          <FontAwesomeIcon icon={faPlus} style={{ color: "#ffffff", }} />
        </div>
      </div>
      <div className="flex space-x-1.5 m-4 ">
        <Pill content='Playlists' />
        <Pill content='Podcast & Shows' />
      </div>
      <div className="flex m-4 justify-between">
        <div className=" px-1 rounded-full opacity-50 hover:opacity-100 hover:bg-[#272727] cursor-pointer">
          <FontAwesomeIcon icon={faMagnifyingGlass} style={{ color: "#ffffff", }} />
        </div>
        <div className="flex items-center space-x-1 opacity-50 hover:opacity-100 cursor-pointer transition ease-in-out hover:scale-105 duration-300 ">
          <p className=" text-sm">Recents</p>
          <FontAwesomeIcon icon={faList} style={{ color: "#ffffff", }} />
        </div>
      </div>
      <Playlists/>
    </div>
  )
}
export default LibraryNav