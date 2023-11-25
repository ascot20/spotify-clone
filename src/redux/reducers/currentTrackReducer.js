import { createSlice } from "@reduxjs/toolkit";

const currentTrackSlice = createSlice({
  name: 'currentTrack',
  initialState: 0,
  reducers: {
    nextTrack:(state)=>{
      return state + 1
    },
    previousTrack:(state)=>{
      return state -1
    },
    resetTrack:()=>{
      return 0
    }
  }
})
export const {nextTrack, previousTrack,resetTrack} = currentTrackSlice.actions
export default currentTrackSlice.reducer