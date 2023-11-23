import { useQuery } from "@tanstack/react-query"
import MainSection from "../components/MainSection"
import SideSection from "../components/SideSection"
import { getPlaylist } from "../services/spotifyApi"
import Skeleton from "../components/Skeleton"


function Home() {
  const {data, isLoading} = useQuery({
    queryKey: ['playlists'],
    queryFn: getPlaylist
  })
  if (isLoading){
    return <Skeleton/>
  }
  return (
    <div className="flex h-[90%] ">
      <SideSection/>
      <MainSection/>
    </div>
  )
}
export default Home