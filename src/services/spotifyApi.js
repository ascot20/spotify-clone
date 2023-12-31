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
  try {
    const response = await axios.get(url, config)
    return response.data
  } catch (error) {
    localStorage.removeItem('token')
  }
}

export const getUserProfile = async () => {
  const url = 'https://api.spotify.com/v1/me'

  const response = await axios.get(url, config)
  return response.data
}

export const getCategories = async () => {
  const url = 'https://api.spotify.com/v1/browse/categories'

  const response = await axios.get(url, config)
  return response.data
}

export const getCategoryPlaylists = async (id) =>{
  const url = `https://api.spotify.com/v1/browse/categories/${id}/playlists`

  const response = await axios.get(url, config)
  return response.data.playlists.items
}

export const getPlaylistTracks = async (id) => {
  const url = `https://api.spotify.com/v1/playlists/${id}/tracks`

  const response = await axios.get(url, config)
  return response.data.items
}
