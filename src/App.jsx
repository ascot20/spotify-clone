import { useQuery } from "@tanstack/react-query"
import Home from "./pages/Home"
import { getAccessToken, redirectToAuthCodeFlow } from "./services/token"
import { useEffect } from "react"
import { setToken } from "./services/spotifyApi"
import Skeleton from "./components/Skeleton"
import ErrorPage from "./pages/ErrorPage"


function App() {
  const params = new URLSearchParams(window.location.search)
  const code = params.get('code')
  const clientId = import.meta.env.VITE_CLIENT_ID
  const token = JSON.parse(localStorage.getItem('token'))

  const { data, isLoading, isSuccess, isError } = useQuery({
    queryKey: ['token'],
    queryFn: () => {
      if (!token) {
        return getAccessToken(clientId, code)
      }
      return token
    }
  })

  useEffect(() => {
    if (!code) {
      redirectToAuthCodeFlow(clientId)
    }
  }, [code, clientId])

  if (isLoading) {
    return <Skeleton/>
  }

  if (isError){
    return <ErrorPage/>
  }

  if (isSuccess) {
    setToken(data.access_token)
    localStorage.setItem('token', JSON.stringify(data))
  }

  return (
    <div className="h-screen">
      <Home />
    </div>
  )
}

export default App
