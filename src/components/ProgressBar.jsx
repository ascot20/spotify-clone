function ProgressBar() {
  return (
    <div className="w-1/3 text-white flex justify-between items-center space-x-2">
      <span className=" text-xs opacity-50">00:00</span>
      <div className=" grow flex">
      <input type="range" className="rounded h-1 w-full"/>
      </div>
      <span className="text-xs opacity-50">03:34</span>
    </div>
  )
}
export default ProgressBar