import { initialNewRowData } from './../../data/initialNewRowData'
import { rowAPI } from '../../api/instance'
import { getErrorMessage } from '../../helpers/getErrorMessage'
import { NewRowData, UpdateRowData } from '../../interfaces/types'
import { rowsSlice } from '../reducers/rowSlice'
import { AppDispatch } from './../index'

export const fetchingRows = () => async (dispatch: AppDispatch) => {
  try {
    dispatch(rowsSlice.actions.fetchingRows())
    const responseData = await rowAPI.getAll()

    if (responseData.length === 0) {
      await dispatch(createdRow(initialNewRowData))
    } else {
      dispatch(rowsSlice.actions.fetchingRowsSuccess(responseData))
    }
  } catch (error: unknown) {
    const errorMessageString = getErrorMessage(error)
    dispatch(rowsSlice.actions.fetchingRowsError(errorMessageString))
  }
}

export const updatedRow = (rID: number | string, newRow: UpdateRowData) => async (dispatch: AppDispatch) => {
  try {
    const responseData = await rowAPI.updateRow(rID, newRow)
    dispatch(rowsSlice.actions.updateRow(responseData))
  } catch (error: unknown) {
    const errorMessageString = getErrorMessage(error)
    dispatch(rowsSlice.actions.fetchingRowsError(errorMessageString))
  }
}

export const removedRow = (rID: number | string) => async (dispatch: AppDispatch) => {
  try {
    const responseData = await rowAPI.removeRow(rID)
    const responseDataWithId = { ...responseData, id: rID }
    dispatch(rowsSlice.actions.removeRow(responseDataWithId))
  } catch (error: unknown) {
    const errorMessageString = getErrorMessage(error)
    dispatch(rowsSlice.actions.fetchingRowsError(errorMessageString))
  }
}

export const createdRow = (newRow: NewRowData) => async (dispatch: AppDispatch) => {
  try {
    const responseData = await rowAPI.createRow(newRow)
    const responseDataWithId = { ...responseData, id: newRow.parentId }

    dispatch(rowsSlice.actions.createRow(responseDataWithId))
  } catch (error: unknown) {
    const errorMessageString = getErrorMessage(error)
    dispatch(rowsSlice.actions.fetchingRowsError(errorMessageString))
  }
}

export const setEditableContactId = (id: number | null | string) => (dispatch: AppDispatch) => {
  dispatch(rowsSlice.actions.setEditableContactId(id))
}