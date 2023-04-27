import { configureStore } from '@reduxjs/toolkit'
import sidebarSlice from '../features/sidebar/sidebarSlice'

export const store = configureStore({
  reducer: {
    sidebar: sidebarSlice,
  },
})
