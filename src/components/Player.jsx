import Controls from "./Controls"
import ProgressBar from "./ProgressBar"

function Player() {
  return (
    <div className="absolute left-0 bottom-0 border h-[10%] w-full">
      <div>
      <audio src="" controls></audio>
      <Controls/>
      <ProgressBar/>
      </div>
    </div>
  )
}
export default Player