// Import necessary modules
import { createSelector, createSlice } from '@reduxjs/toolkit'
import { store } from '../store'

// Initial state with some default data
const initialState = {
  categories: [],
}

// Create a Redux slice
export const categoriesDataSlice = createSlice({
  name: 'setCategoriesData',
  initialState,
  reducers: {
    setCategories: (state, action) => {
      const { data } = action.payload.data
      state.categories = data
      // console.log("In reducer-> ",action.payload.data)
    },
  }
})

// Export the categoryCount reducer and action
export const { setCategories } = categoriesDataSlice.actions
export default categoriesDataSlice.reducer

// Function to load category count data
export const setCategoriesData = data => {
  store.dispatch(setCategories({ data }))
}

// Selector function to get tempdata from the state
export const setCategioriesSelector = state => state.setCategoriesData

// Selector function to get categoryCount from the state
export const categoriesSelector = createSelector(setCategioriesSelector, setCategoriesData => setCategoriesData.categories)
