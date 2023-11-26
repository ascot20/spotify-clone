import { configureStore } from "@reduxjs/toolkit";
import displayTrackReducer from "./reducers/displayTrackReducer";
import playlistTracksReducer from "./reducers/playlistTracksReducer";
import currentTrackReducer from "./reducers/currentTrackReducer";
import playlistNameReducer from "./reducers/playlistNameReducer";

export const store = configureStore({
  reducer: {
    displayTrack: displayTrackReducer,
    playlistTracks: playlistTracksReducer,
    currentTrack: currentTrackReducer,
    playlistName: playlistNameReducer
  }
})