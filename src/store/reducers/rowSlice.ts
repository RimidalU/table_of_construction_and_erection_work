import { PayloadAction } from '@reduxjs/toolkit'

import { ApiResponse, ApiResponseWithId, RowData, RowState } from '../../interfaces/types'
import { createSlice, } from '@reduxjs/toolkit'
import { recursiveMap } from '../../helpers/recursiveMap'
import { recursiveFilter } from '../../helpers/recursiveFilter'
import { recursiveAddRow } from '../../helpers/recursiveAddRow'


const initialState: RowState = {
  rows: [],
  isLoading: false,
  isDisabledButtons: false,
  errors: '',
  editableContactId: null
}

export const rowsSlice = createSlice({
  name: 'rows',
  initialState,
  reducers: {
    fetchingRows(state) {
      state.isLoading = true
    },
    fetchingRowsSuccess(state, action: PayloadAction<RowData[]>) {
      state.isLoading = false
      state.rows = action.payload
    },
    fetchingRowsError(state, action: PayloadAction<string>) {
      state.isLoading = false
      state.errors = action.payload
    },

    updateRow(state, action: PayloadAction<ApiResponse>) {
      state.isDisabledButtons = true
      if (action.payload.current.id) {
        const newRows = recursiveMap(state.rows, action.payload.current.id, action.payload.current)
        state.rows = newRows
      }
      state.isDisabledButtons = false
    },

    createRow(state, action: PayloadAction<ApiResponseWithId>) {
      state.isDisabledButtons = true

      if (action.payload.current.id) {
        const updateRowData = { ...action.payload.current, child: [] }
        let newRows: RowData[] = []
        if (action.payload.id) {

          newRows = recursiveAddRow(state.rows, action.payload.id, updateRowData)
        } else {
          newRows = [updateRowData]
        }
        state.rows = newRows
        state.editableContactId = action.payload.current.id
      }
      state.isLoading = false
      state.isDisabledButtons = false
    },

    removeRow(state, action: PayloadAction<ApiResponseWithId>) {
      state.isDisabledButtons = true
      if (action.payload.current === null) {
        const newRows = recursiveFilter(state.rows, action.payload.id!)
        state.rows = newRows
      }
      state.isDisabledButtons = false
    },

    setEditableContactId(state, action: PayloadAction<number | null | string>) {
      state.editableContactId = action.payload
    }
  }
})

export default rowsSlice.reducer
