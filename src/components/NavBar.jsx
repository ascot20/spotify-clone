import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useQuery } from "@tanstack/react-query"
import { getUserProfile } from "../services/spotifyApi"
import Skeleton from "./Skeleton"

function NavBar() {

  const { data, isLoading } = useQuery({
    queryKey: ['profile'],
    queryFn: getUserProfile
  })



  if (isLoading) {
    return <Skeleton />
  }

  return (
      <div className="bg-[#201158] rounded-t flex py-4 px-6 justify-between sticky top-0">
        <div className="flex space-x-2">
          <div className="bg-[#131313] flex items-center justify-center rounded-full w-5 h-5 p-3">
            <FontAwesomeIcon icon={faChevronLeft} style={{ color: "#ffffff", }} />
          </div>
          <div className="bg-[#131313] flex items-center justify-center rounded-full w-5 h-5 p-3">
            <FontAwesomeIcon icon={faChevronRight} style={{ color: "#ffffff", }} />
          </div>
        </div>
        <div className="w-6 h-6">
          <img src={data.images[0].url} alt="User's profile" className="rounded-full" />
        </div>
      </div>
  )
}
export default NavBar