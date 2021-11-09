import { createSlice } from '@reduxjs/toolkit'

export const resultSlice = createSlice({
  name: 'result',
  initialState: {
    value: 0,
  },
  reducers: {
    multiply: (state, action) => {
      state.value = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { multiply } = resultSlice.actions

export default resultSlice.reducer
