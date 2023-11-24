import { configureStore } from "@reduxjs/toolkit";
import displayTrackReducer from "./reducers/displayTrackReducer";

export const store = configureStore({
  reducer: {
    displayTrack: displayTrackReducer
  }
})