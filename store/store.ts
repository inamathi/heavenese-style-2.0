import { Tuple, configureStore } from '@reduxjs/toolkit'
import {
  TypedUseSelectorHook,
  useDispatch,
  useSelector,
  useStore
} from 'react-redux'
import { logger } from 'redux-logger'

import { userReducer } from '@/hooks/userSlice'
import { searchCondReducer } from '@/hooks/searchCondSlice'
import { hamburgerReducer } from '@/hooks/HamburgerSlice'

// const middlewares = []
// middlewares.push(logger)

export const store = configureStore({
  reducer: {
    hamburger: hamburgerReducer,
    searchCond: searchCondReducer,
    user: userReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
  // middleware: () => new Tuple(logger)
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

// TODO：これ以降あとで消す

// export const makeStore = () => {
//   return configureStore({
//     reducer: {
//       user: userReducer,
//       searchCond: searchCondReducer
//     }
//   })
// }

// export type AppStore = ReturnType<typeof makeStore>

// export type RootState = ReturnType<AppStore['getState']>
// export type AppDispatch = AppStore['dispatch']

// export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
// export const useAppSelector = useSelector.withTypes<RootState>()
// export const useAppStore = useStore.withTypes<AppStore>()
