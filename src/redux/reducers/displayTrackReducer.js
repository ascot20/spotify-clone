import { createSlice } from "@reduxjs/toolkit";

const displayTrackSlice = createSlice({
  name: 'displayTrack',
  initialState: 'hidden',
  reducers: {
    showDisplay: (state, action)=>{
      return 'block'
    },
    hideDisplay: (state, action)=>{
      return 'hidden'
    }
  }
})

export const {showDisplay, hideDisplay} = displayTrackSlice.actions
export default displayTrackSlice.reducer