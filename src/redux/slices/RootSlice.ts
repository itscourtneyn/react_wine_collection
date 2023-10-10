import { createSlice } from '@reduxjs/toolkit'

const rootSlice = createSlice({
    name: "root",
    initialState: {
        upc: "UPC",
        type: "Type",
        brand: "Brand",
        color: "Color",
        alcohol_percentage: "Alcohol Percentage",
    },
    reducers: {
        chooseUpc: (state, action) => { state.upc = action.payload},
        chooseType: (state, action) => { state.type = action.payload},
        chooseBrand: (state, action) => { state.brand = action.payload},
        chooseColor: (state, action) => { state.color = action.payload},
        chooseAlcoholPercentage: (state, action) => { state.alcohol_percentage = action.payload}
    }
})

export const reducer = rootSlice.reducer;
export const { chooseUpc, chooseType, chooseBrand, chooseColor, chooseAlcoholPercentage} = rootSlice.actions