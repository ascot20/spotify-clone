import { createSlice } from "@reduxjs/toolkit";

const playlistTracksSlice = createSlice({
  name: 'playListTracks',
  initialState: [],
  reducers:{
    addTracks:(_state,action)=>{
      return action.payload
    }
  }
})

export const {addTracks} = playlistTracksSlice.actions
export default playlistTracksSlice.reducer