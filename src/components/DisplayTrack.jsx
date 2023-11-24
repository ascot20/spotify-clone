import { faXmark } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useDispatch, useSelector } from "react-redux"
import { hideDisplay } from "../redux/reducers/displayTrackReducer"

function DisplayTrack() {
  const display = useSelector(state => state.displayTrack)
  const dispatch = useDispatch()
  return (
    <div className={`${display} bg-[#121212] grow-[2] p-0 mr-2 mt-2 ml-2 shrink-0 overflow-hidden rounded-md`}>
      <div className="flex justify-between items-center p-2">
        <p>lddksd</p>
        <div className=" opacity-50 rounded-full w-6 h-6 hover:bg-[#2a2a2a] hover:opacity-100 cursor-pointer text-center" onClick={()=>dispatch(hideDisplay())}>
          <FontAwesomeIcon icon={faXmark} style={{ color: "#ffffff", }} />
        </div>
      </div>
    </div>
  )
}
export default DisplayTrack