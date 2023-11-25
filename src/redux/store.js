import { configureStore } from "@reduxjs/toolkit";
import displayTrackReducer from "./reducers/displayTrackReducer";
import playlistTracksReducer from "./reducers/playlistTracksReducer";
import currentTrackReducer from "./reducers/currentTrackReducer";

export const store = configureStore({
  reducer: {
    displayTrack: displayTrackReducer,
    playlistTracks: playlistTracksReducer,
    currentTrack: currentTrackReducer,
  }
})