import { useQueryClient } from "@tanstack/react-query"

function Playlists() {
  const queryClient = useQueryClient()
  const playlists = queryClient.getQueryData(['playlists'])
  if(!playlists){
    return null
  }
  return (
    <div className="mt-4 ">
      {playlists.items.map(playlist=>(
        <div key={playlist.id} className="flex items-center rounded-md space-x-4 m-2 p-2 font-medium hover:bg-[#2a2a2a] cursor-pointer">
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