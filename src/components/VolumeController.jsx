import { faVolumeHigh, faVolumeLow, faVolumeXmark } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useEffect, useRef, useState } from "react"

function VolumeController({ audioRef }) {
  const [volume, setVolume] = useState(60)
  const [muteVolume, setMuteVolume] = useState(false)

  useEffect(() => {
    if (audioRef) {
      audioRef.current.volume = volume / 100
      audioRef.current.muted = muteVolume
    }
  }, [volume, audioRef, muteVolume])
  return (
    <div className=" absolute right-2 top-1/4 flex items-center space-x-2">
      <div>
        <button onClick={() => setMuteVolume(prev => !prev)}>
          {muteVolume || volume < 5 ? (
            <FontAwesomeIcon icon={faVolumeXmark} style={{ color: "#ffffff", }} className=" opacity-50 hover:opacity-100" />
          ) : volume < 40 ? (
            <FontAwesomeIcon icon={faVolumeLow} style={{ color: "#ffffff", }} className=" opacity-50 hover:opacity-100" />
          ) :
            <FontAwesomeIcon icon={faVolumeHigh} style={{ color: "#ffffff", }} className=" opacity-50 hover:opacity-100" />
          }
        </button>
      </div>
      <div className=" flex">
        <input type="range" min={0} max={100} value={volume} onChange={(e) => setVolume(e.target.value)} className=" w-full h-1 rounded" style={{ background: `linear-gradient(to right, #1db954 ${volume}%, #4d4d4d ${volume}%)` }} />
      </div>
    </div>
  )
}
export default VolumeController