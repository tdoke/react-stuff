import { createSlice } from '@reduxjs/toolkit'

const counterBSlice = createSlice({
    name: 'counter',
    initialState: { valueB: 0 },
    reducers: {
        counterBIncremented(state) {
            state.valueB = state.valueB + 1;
        },
        counterBDecremented(state) {
            state.valueB = state.valueB - 1;
        },
    },
})

export const { counterBIncremented, counterBDecremented } = counterBSlice.actions
export default counterBSlice.reducer