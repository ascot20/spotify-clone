import LibraryNav from "./LibraryNav"
import NavMenu from "./NavMenu"

function SideSection() {
  return (
    <div className="grow-[2] p-0 shrink-0 overflow-hidden rounded-md">
      <NavMenu/>
      <LibraryNav/>
    </div>
  )
}
export default SideSection