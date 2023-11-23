import { useQueryClient } from "@tanstack/react-query"
import ErrorPage from "../pages/ErrorPage"

function Categories() {
  const queryClient = useQueryClient()
  const categoriesObject = queryClient.getQueryData(['categories'])
  if(!categoriesObject){
    return <ErrorPage/>
  }
  const categories = categoriesObject.categories.items
  return (
    <div className="border">
      {categories.map(category=>(
        <div key={category.id}>
          <h1>{category.name}</h1>
        </div>
      ))}
    </div>
  )
}
export default Categories