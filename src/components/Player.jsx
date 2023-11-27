import { useRef, useState } from "react"
import Controls from "./Controls"
import ProgressBar from "./ProgressBar"
import { useDispatch, useSelector } from "react-redux"
import { nextTrack, resetTrack } from "../redux/reducers/currentTrackReducer"
import VolumeController from "./VolumeController"

function Player() {
  const [timeProgress, setTimeProgress] = useState(0)
  const [duration, setDuration] = useState(0)
  const audioRef = useRef()
  const progressBarRef = useRef()
  const dispatch = useDispatch()
  const tracks = useSelector(state => state.playlistTracks)
  const currentTrack = useSelector(state => state.currentTrack)

  const handleNext = () => {
    if (currentTrack >= tracks.length - 1) {
      dispatch(resetTrack())
    } else {
      dispatch(nextTrack())
    }
  }

  const onLoadedMetadata = () => {
    setDuration(audioRef.current.duration)
    progressBarRef.current.max = audioRef.current.duration
  }

  return (
    <div className="absolute left-0 bottom-0 h-[10%] w-full">
      <div className="flex flex-col justify-center items-center h-full space-y-2">
        <audio src={tracks.length > 0 ? tracks[currentTrack].track.preview_url : undefined} ref={audioRef} onEnded={handleNext} onLoadedMetadata={onLoadedMetadata}></audio>
        <Controls audioRef={audioRef} progressBarRef={progressBarRef} duration={duration} setTimeProgress={setTimeProgress}/>
        <ProgressBar progressBarRef={progressBarRef} audioRef={audioRef} timeProgress={timeProgress} duration={duration}/>
      </div>
      <VolumeController audioRef={audioRef}/>
    </div>
  )
}
export default Player