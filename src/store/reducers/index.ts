import { combineReducers } from '@reduxjs/toolkit'
import rowReducer from './rowSlice'

export const rootReducer = combineReducers({
  rowReducer
})

export type RootState = ReturnType<typeof rootReducer>