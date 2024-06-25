import { createSlice } from '@reduxjs/toolkit'

const counterASlice = createSlice({
    name: 'counter',
    initialState: { valueA: 0 },
    reducers: {
        counterAIncremented(state) {
            state.valueA = state.valueA + 1;
        },
        counterADecremented(state) {
            state.valueA = state.valueA - 1;
        },
    },
})

export const { counterAIncremented, counterADecremented } = counterASlice.actions
export default counterASlice.reducer