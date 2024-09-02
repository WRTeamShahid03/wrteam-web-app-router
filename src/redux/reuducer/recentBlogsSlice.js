// Import necessary modules
import { createSelector, createSlice } from '@reduxjs/toolkit'
import { store } from '../store'

// Initial state with some default data
const initialState = {
  recentBlogs: [],
}

// Create a Redux slice
export const recentBlogsDataSlice = createSlice({
  name: 'setRecentBlogsData',
  initialState,
  reducers: {
    setRecentBlogs: (state, action) => {
      const { data } = action.payload.data
      state.recentBlogs = data
      // console.log("In reducer-> ",action.payload.data)
    },
  }
})

// Export the categoryCount reducer and action
export const { setRecentBlogs } = recentBlogsDataSlice.actions
export default recentBlogsDataSlice.reducer

// Function to load category count data
export const setRecentBlogsData = data => {
  store.dispatch(setRecentBlogs({ data }))
}

// Selector function to get tempdata from the state
export const setRecentBlogsSelector = state => state.setRecentBlogsData

// Selector function to get categoryCount from the state
export const recentBlogsSelector = createSelector(setRecentBlogsSelector, setRecentBlogsData => setRecentBlogsData.recentBlogs)
