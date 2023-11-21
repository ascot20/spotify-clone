import axios from 'axios'

let token
let config

export const setToken = (newToken) => {
  token = newToken
  config = {
    headers: {
      Authorization: 'Bearer ' + token,
    },
  }
}

export const getPlaylist = async () => {
  const url = 'https://api.spotify.com/v1/me/playlists'
  const response = await axios.get(url, config)
  console.log(response.data)
  return response.data
}
