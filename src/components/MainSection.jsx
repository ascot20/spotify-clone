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
    <div className=" basis-[45%] bg-[#121212] grow-[5] mt-2 mr-2 rounded-md overflow-y-auto">
      <NavBar/>
      <Categories/>
    </div>
  )
}
export default MainSection