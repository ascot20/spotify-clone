function ProgressBar({progressBarRef, audioRef, timeProgress, duration}) {
  const handleProgressChange = () => {
    audioRef.current.currentTime = progressBarRef.current.value
  }

  const formatTime = (time) => {
    if(time && !isNaN(time)){
      const minutes = Math.floor(time/60)
      const formatMinutes = minutes < 10? `0${minutes}`: `${minutes}`
      const seconds = Math.floor(time%60)
      const formatSeconds = seconds < 10? `0${seconds}`: `${seconds}`
      return `${formatMinutes}:${formatSeconds}`
    }
    return '00:00'
  }
  return (
    <div className="w-1/3 text-white flex justify-between items-center space-x-2">
      <span className=" text-xs opacity-50">{formatTime(timeProgress)}</span>
      <div className=" grow flex">
      <input type="range" ref={progressBarRef} defaultValue="0" onChange={handleProgressChange} className="rounded h-1 w-full"/>
      </div>
      <span className="text-xs opacity-50">{formatTime(duration)}</span>
    </div>
  )
}
export default ProgressBar