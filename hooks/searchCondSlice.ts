import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  searchCond: '',
  showDialog: false
}

export const searchCondSlice = createSlice({
  name: 'searchCond',
  initialState,
  reducers: {
    setCond: (state, action) => {
      state.searchCond = action.payload
    },
    clearCond: (state) => {
      state.searchCond = ''
    },
    showSearchCondDialog: (state) => {
      state.showDialog = true
    },
    closeSearchCondDialog: (state) => {
      state.showDialog = false
    }
  }
})

export const {
  setCond,
  clearCond,
  showSearchCondDialog,
  closeSearchCondDialog
} = searchCondSlice.actions
export const searchCondReducer = searchCondSlice.reducer
