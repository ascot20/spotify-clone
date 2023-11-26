import { useQuery } from "@tanstack/react-query"
import MainSection from "../components/MainSection"
import SideSection from "../components/SideSection"
import { getPlaylist } from "../services/spotifyApi"
import Skeleton from "../components/Skeleton"
import DisplayTrack from "../components/DisplayTrack"


function Home() {
  const {data, isLoading} = useQuery({
    queryKey: ['playlists'],
    queryFn: getPlaylist
  })
  if (isLoading){
    return <Skeleton/>
  }
  return (
    <div className="flex h-[90%] space-x-2 p-2">
      <SideSection/>
      <MainSection/>
      <DisplayTrack/>
    </div>
  )
}
export default Home