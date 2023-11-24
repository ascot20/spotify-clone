import { useQueryClient } from "@tanstack/react-query"
import ErrorPage from "../pages/ErrorPage"
import CategoryPlaylists from "./CategoryPlaylists"
import { useEffect, useState } from "react"

function Categories() {
  const currentHour = new Date().getHours()
  const [greeting, setGreeting] = useState('')
  const queryClient = useQueryClient()
  const categoriesObject = queryClient.getQueryData(['categories'])

  useEffect(() => {
    if (currentHour < 12) {
      setGreeting('Good morning')
    } else if (currentHour < 18) {
      setGreeting('Good afternoon')
    } else {
      setGreeting('Good evening')
    }
  }, [currentHour])

  if(!categoriesObject){
    return <ErrorPage/>
  }
  const categories = categoriesObject.categories.items
  return (
    <div className="">
       <h1 className="text-3xl font-semibold mb-2 pb-8 px-6 pt-6 bg-gradient-to-b from-[#201158] to-[#161226]">{greeting}</h1>
      {categories.map(category=>(
        <div key={category.id} className=" mb-10 pl-6 px-6">
          <h1 className=" text-2xl font-semibold mb-6">{category.name}</h1>
          <CategoryPlaylists id={category.id}/>
        </div>
      ))}
    </div>
  )
}
export default Categories