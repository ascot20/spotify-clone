import { faXmark } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useDispatch, useSelector } from "react-redux"
import { hideDisplay } from "../redux/reducers/displayTrackReducer"

function DisplayTrack() {
  const display = useSelector(state => state.displayTrack)
  const tracks = useSelector(state => state.playlistTracks)
  const currentTrackIndex = useSelector(state => state.currentTrack)
  const currentTrack = tracks[currentTrackIndex]
  const dispatch = useDispatch()
  return (
    <div className={`${display} bg-[#121212] grow-[2] p-0 mr-2 mt-2 ml-2 shrink-0 overflow-hidden rounded-md`}>
      <div className="flex justify-between items-center mt-4 space-x-6 mx-auto w-64">
        <p className="line-clamp-1 text-clip font-medium">{currentTrack && currentTrack.track.name}</p>
        <div className=" opacity-50 rounded-full w-6 h-6 hover:bg-[#2a2a2a] hover:opacity-100 cursor-pointer text-center" onClick={() => dispatch(hideDisplay())}>
          <FontAwesomeIcon icon={faXmark} style={{ color: "#ffffff", }} />
        </div>
      </div>
      <div className="w-64 mx-auto mt-4">
        <img className="rounded-lg" src={currentTrack && currentTrack.track.album.images[0].url} alt="" />
      </div>
    </div>
  )
}
export default DisplayTrack