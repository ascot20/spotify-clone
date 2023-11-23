import { useQuery } from "@tanstack/react-query"
import NavBar from "./NavBar"
import { getCategories } from "../services/spotifyApi"
import Categories from "./Categories"
import Skeleton from "./Skeleton"

function MainSection() {
  const {data, isPending} = useQuery({
    queryKey: ['categories'],
    queryFn: getCategories
  })

  if(isPending) {
    return <Skeleton/>
  }


  return (
    <div className="bg-[#121212] grow-[10] p-0 mt-2 mr-2 rounded">
      <NavBar/>
      <Categories/>
    </div>
  )
}
export default MainSection