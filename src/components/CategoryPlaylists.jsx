import { useQuery } from "@tanstack/react-query"
import { getCategoryPlaylists, getPlaylistTracks } from "../services/spotifyApi"
import Skeleton from "./Skeleton"
import { useDispatch } from "react-redux"
import { addTracks } from "../redux/reducers/playlistTracksReducer"
import { resetTrack } from "../redux/reducers/currentTrackReducer"
import { showDisplay } from "../redux/reducers/displayTrackReducer"
import {setName} from "../redux/reducers/playlistNameReducer.js"

function CategoryPlaylists({ id }) {
  const dispatch = useDispatch()
  const { data, isLoading } = useQuery({
    queryKey: ['categoryPlaylists', id],
    queryFn: () => getCategoryPlaylists(id)
  })
  if (isLoading) {
    return <Skeleton />
  }

  const handleGetTracks = async (id,name) => {
    try {
      const response = await getPlaylistTracks(id)
      dispatch(addTracks(response))
      dispatch(resetTrack())
      dispatch(showDisplay())
      dispatch(setName(name))
    } catch (error) {
      throw new Error(error)
    }

  }
  return (
    <div className=" flex space-x-4 overflow-x-auto container-snap">
      {
        data.map(playlist => (
          playlist &&
          <div key={playlist.id} className="bg-[#181818] p-4 rounded-lg cursor-pointer transition ease-out hover:bg-[#282828]  duration-500" onClick={() => handleGetTracks(playlist.id,playlist.name)}>
            <div className=" w-32">
              <img src={playlist.images[0].url} alt="image" className=" rounded-lg" />
            </div>
            <div className="w-32 mt-2 overflow-hidden">
              <h3 className="truncate font-semibold">{playlist.name}</h3>
              <p className="mt-2 opacity-50 text-sm line-clamp-2">{playlist.description}</p>
            </div>
          </div>
        ))

      }

    </div>
  )
}
export default CategoryPlaylists