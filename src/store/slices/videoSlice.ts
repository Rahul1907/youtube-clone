import { createSlice } from '@reduxjs/toolkit'
import { InitialState } from '../../Types'

const initialState: InitialState = {
    videos: [],
    currentPlaying: [],
    searchTerm: '',
    searchResults: [],
    nextPageToken: null,
    recommendedVideos: []
}

const YoutubeSlice = createSlice({
    name: 'youtube',
    initialState,
    reducers: {},
    extraReducers: (builder) => { }
})

// export const {} YoutubeSlice

export default YoutubeSlice.reducer