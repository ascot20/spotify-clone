import { useQueryClient } from "@tanstack/react-query"
import { useDispatch } from "react-redux"
import { getPlaylistTracks } from "../services/spotifyApi"
import { addTracks } from "../redux/reducers/playlistTracksReducer"
import { resetTrack } from "../redux/reducers/currentTrackReducer"
import { showDisplay } from "../redux/reducers/displayTrackReducer"
import { setName } from "../redux/reducers/playlistNameReducer"

function Playlists() {
  const dispatch = useDispatch()
  const queryClient = useQueryClient()
  const playlists = queryClient.getQueryData(['playlists'])
  if(!playlists){
    return null
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
    <div className="mt-4 ">
      {playlists.items.map(playlist=>(
        <div key={playlist.id} className="flex items-center rounded-md space-x-4 m-2 p-2 font-medium hover:bg-[#2a2a2a] cursor-pointer" onClick={()=>handleGetTracks(playlist.id,playlist.name)}>
          <div className=" w-16">
            <img src={playlist.images[0].url} alt="" className=" object-contain rounded-md" />
          </div>
          <div>
            <h3>{playlist.name}</h3>
            <p className=" text-sm font-normal opacity-50">Playlist <span className="border inline-block bg-white w-1 h-1 rounded-full"></span> {playlist.owner.display_name}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
export default Playlists