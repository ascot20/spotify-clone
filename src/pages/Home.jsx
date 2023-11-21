import { useQuery } from "@tanstack/react-query"
import MainSection from "../components/MainSection"
import SideSection from "../components/SideSection"
import { getPlaylist } from "../services/spotifyApi"


function Home() {
  const {data} = useQuery({
    queryKey: ['playlists'],
    queryFn: getPlaylist
  })
  return (
    <div className=" flex">
      <SideSection/>
      <MainSection/>
    </div>
  )
}
export default Home