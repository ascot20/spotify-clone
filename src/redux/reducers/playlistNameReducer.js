import { createSlice } from "@reduxjs/toolkit";

const playlistNameSlice = createSlice({
  name: 'playlistName',
  initialState: '',
  reducers:{
    setName: (_state,action) => {
      return action.payload
    }
  }
})

export const {setName} = playlistNameSlice.actions
export default playlistNameSlice.reducer