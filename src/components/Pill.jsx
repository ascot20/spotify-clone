function Pill({content}) {
  return (
    <span className=" rounded-full bg-[#2a2a2a] text-white text-xs py-2 px-4 cursor-pointer opacity-80 hover:opacity-100">
      {content}
    </span>
  )
}
export default Pill