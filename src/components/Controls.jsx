import { faBackwardStep, faForwardStep, faPause, faPlay } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { nextTrack, previousTrack, resetTrack } from "../redux/reducers/currentTrackReducer"

function Controls({audioRef}) {
  const [isPlaying, setIsPlaying] = useState(false)
  const dispatch = useDispatch()
  const trackLength = useSelector(state=>state.playlistTracks?state.playlistTracks.length:0)
  const currentTrackIndex = useSelector(state=>state.currentTrack)

  useEffect(()=>{
    if(isPlaying){
      audioRef.current.play()
    }else{
      audioRef.current.pause()
    }
  },[isPlaying, audioRef])
  
  const togglePlayPause = () => {
    setIsPlaying((prev) => !prev)
  }

  const handleNext = () => {
    if(currentTrackIndex >= trackLength - 1){
      dispatch(resetTrack())
    }else{
      dispatch(nextTrack())
    }
  }

  const handlePrevious = () => {
    if(currentTrackIndex === 0){
      dispatch(resetTrack())
    }else{
      dispatch(previousTrack())
    }
  }

  return (
    <div className="flex space-x-8 mt-3 h-9">
      <button className="py-1 opacity-50 hover:opacity-100 h-8" onClick={handlePrevious}>
        <FontAwesomeIcon icon={faBackwardStep} style={{ color: "#ffffff", }} size="xl" />
      </button>
      <button className=" rounded-full bg-white w-8 h-8 text-center py-1" onClick={togglePlayPause}>
        {isPlaying ? <FontAwesomeIcon icon={faPause} style={{ color: "#000000", }} /> : <FontAwesomeIcon icon={faPlay} style={{ color: "#000000", }} />}
      </button>
      <button className="py-1 opacity-50 hover:opacity-100 h-8" onClick={handleNext}>
        <FontAwesomeIcon icon={faForwardStep} style={{ color: "#FFFFFF", }} size="xl" />
      </button>
    </div>
  )
}
export default Controls