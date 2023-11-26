import { useEffect, useRef } from "react"
import Controls from "./Controls"
import ProgressBar from "./ProgressBar"
import { useDispatch, useSelector } from "react-redux"
import { nextTrack, resetTrack } from "../redux/reducers/currentTrackReducer"

function Player() {
  const audioRef = useRef()
  const dispatch = useDispatch()
  const tracks = useSelector(state=>state.playlistTracks)
  const currentTrack = useSelector(state=>state.currentTrack)

  const handleNext = () => {
    if(currentTrack >= tracks.length - 1){
      dispatch(resetTrack())
    }else{
      dispatch(nextTrack())
    }
  }

  return (
    <div className="absolute left-0 bottom-0 h-[10%] w-full">
      <div className="flex flex-col justify-center items-center h-full space-y-2">
        <audio src={tracks.length > 0?tracks[currentTrack].track.preview_url: undefined} ref={audioRef} onEnded={handleNext}></audio>
        <Controls audioRef={audioRef}/>
        <ProgressBar />
      </div>
    </div>
  )
}
export default Player