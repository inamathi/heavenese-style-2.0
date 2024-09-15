import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  showMenuButton: false,
  showDialog: false
}

export const HamburgerSlice = createSlice({
  name: 'hamburger',
  initialState,
  reducers: {
    showMenuButton: (state, action) => {
      state.showDialog = action.payload
    },
    showDialog: (state) => {
      state.showDialog = false
    }
  }
})

export const { showMenuButton, showDialog } = HamburgerSlice.actions
export const hamburgerReducer = HamburgerSlice.reducer
