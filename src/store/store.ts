import { configureStore } from "@reduxjs/toolkit";
import videoSlice from "./slices/videoSlice";
export const store = configureStore({
    reducer:{
        youtube: videoSlice
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;