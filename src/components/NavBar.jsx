import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useQuery } from "@tanstack/react-query"
import { getUserProfile } from "../services/spotifyApi"
import Skeleton from "./Skeleton"
import { useEffect, useState } from "react"

function NavBar() {
  const currentHour = new Date().getHours()
  const [greeting, setGreeting] = useState('')
  const { data, isLoading } = useQuery({
    queryKey: ['profile'],
    queryFn: getUserProfile
  })

  useEffect(() => {
    if (currentHour < 12) {
      setGreeting('Good morning')
    } else if (currentHour < 18) {
      setGreeting('Good afternoon')
    } else {
      setGreeting('Good evening')
    }
  }, [currentHour])

  if (isLoading) {
    return <Skeleton />
  }

  return (
    <div className="bg-gradient-to-b from-[#201158] to-[#1911392c] rounded-t ">
      <div className=" flex py-4 px-6 justify-between">
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
      <h1 className=" text-3xl font-semibold p-6">{greeting}</h1>
    </div>
  )
}
export default NavBar