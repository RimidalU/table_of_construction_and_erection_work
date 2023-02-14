import { PayloadAction } from '@reduxjs/toolkit'

import { ApiResponse, RowData, RowState } from '../../interfaces/types'
import { mockData } from '../../data/mockData'
import { createSlice, } from '@reduxjs/toolkit'


const initialState: RowState = {
  rows: mockData,
  isLoading: false,
  errors: ''
}

export const rowsSlice = createSlice({
  name: 'rows',
  initialState,
  reducers: {
    fetchingRows(state) {
      state.isLoading = true
    },
    fetchingRowsSuccess(state, action: PayloadAction<RowData[]>) {
      state.isLoading = false,
        state.rows = action.payload
    },
    fetchingRowsError(state, action: PayloadAction<string>) {
      state.isLoading = false
      state.errors = action.payload
    }

    // createRow(state, action: PayloadAction<ApiResponse>) {
    //   state.isLoading = false,
    //   state.rows = action.payload.current
    // },
    // updateRow(state, action: PayloadAction<RowData[]>) {
    //   state.isLoading = false,
    //   state.rows = action.payload.current
    // },
    // removeRow(state, action: PayloadAction<RowData[]>) {
    //   state.isLoading = false,
    //   state.rows = action.payload.current
    // },
  }
})

export default rowsSlice.reducer
