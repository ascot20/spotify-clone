import { faXmark } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useDispatch, useSelector } from "react-redux"
import { hideDisplay } from "../redux/reducers/displayTrackReducer"

function DisplayTrack() {
  const display = useSelector(state => state.displayTrack)
  const tracks = useSelector(state => state.playlistTracks)
  const currentTrackIndex = useSelector(state => state.currentTrack)
  const playlistName = useSelector(state => state.playlistName)
  const currentTrack = tracks[currentTrackIndex]
  const dispatch = useDispatch()
  return (
    <div className={`${display} bg-[#121212] p-0 overflow-hidden rounded-md h-min `}>
      <div className="m-4 flex flex-col space-y-4 max-w-sm h-auto">
        <div className="flex justify-between">
          <p className="line-clamp-1 text-clip font-semibold">{playlistName}</p>
          <div className=" opacity-50 rounded-full w-6 h-6 hover:bg-[#2a2a2a] hover:opacity-100 cursor-pointer text-center" onClick={() => dispatch(hideDisplay())}>
            <FontAwesomeIcon icon={faXmark} style={{ color: "#ffffff", }} />
          </div>
        </div>
        <div>
          <img className="rounded-lg" src={currentTrack && currentTrack.track.album.images[0].url} alt="" />
        </div>
        <div>
          <p className="line-clamp-1 text-clip font-semibold text-xl">{currentTrack && currentTrack.track.name}</p>
          <p className="line-clamp-1 text-clip font-medium opacity-50 text-sm">{currentTrack && currentTrack.track.artists[0].name}</p>
        </div>
      </div>
    </div>
  )
}
export default DisplayTrack