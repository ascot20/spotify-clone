import LibraryNav from "./LibraryNav"
import NavMenu from "./NavMenu"

function SideSection() {
  return (
    <div className="grow-[2] p-0 mr-2 mt-2 ml-2 shrink-0 overflow-hidden rounded-md">
      <NavMenu/>
      <LibraryNav/>
    </div>
  )
}
export default SideSection