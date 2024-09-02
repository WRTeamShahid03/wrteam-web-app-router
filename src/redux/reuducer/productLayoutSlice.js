// Import necessary modules
import { createSelector, createSlice } from '@reduxjs/toolkit'
import { store } from '../store'

// Initial state with some default data
const initialState = {
    layout: null,
    productData: [],
    supportLinksData: [],
}

// Create a Redux slice
export const productLayoutDataSlice = createSlice({
    name: 'setLayoutData',
    initialState,
    reducers: {
        setLayout: (state, action) => {
            const { data } = action.payload.data
            state.layout = data
        },
        setProductData: (state, action) => {
            const { data } = action.payload.data
            state.productData = data
        },
        setSupportLinks: (state, action) => {
            const { data } = action.payload.data
            state.supportLinksData = data
        },
    }
})


export const { setLayout, setProductData, setSupportLinks } = productLayoutDataSlice.actions
export default productLayoutDataSlice.reducer


export const setLayoutData = data => {
    store.dispatch(setLayout({ data }))
}

export const setProductDetails = data => {
    store.dispatch(setProductData({ data }))
}

export const setSupportLinksData = data => {
    store.dispatch(setSupportLinks({ data }))
} 

export const setLayoutSelector = state => state.setLayoutData

export const layoutSelector = createSelector(setLayoutSelector, setLayoutData => setLayoutData.layout)

export const productDataSelector = createSelector(setLayoutSelector, setLayoutData => setLayoutData.productData)

export const supportLinksDataSelector = createSelector(setLayoutSelector, setLayoutData => setLayoutData.supportLinksData)

