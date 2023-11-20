import LibraryNav from "./LibraryNav"
import NavMenu from "./NavMenu"

function SideSection() {
  return (
    <div className="grow-[1] p-0 m-2">
      <NavMenu/>
      <LibraryNav/>
    </div>
  )
}
export default SideSection