import LibraryNav from "./LibraryNav"
import NavMenu from "./NavMenu"

function SideSection() {
  return (
    <div className="grow-[1] p-0 mr-2 mt-2 ml-2 shrink-0 ">
      <NavMenu/>
      <LibraryNav/>
    </div>
  )
}
export default SideSection