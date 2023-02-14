import { rowAPI } from '../../api/instance'
import { getErrorMessage } from '../../helpers/getErrorMessage'
import { rowsSlice } from '../reducers/rowSlice'
import { AppDispatch } from './../index'

export const fetchingRows = () => async (dispatch: AppDispatch) => {
  try {
    dispatch(rowsSlice.actions.fetchingRows())
    const responseData = await rowAPI.getAll()
    dispatch(rowsSlice.actions.fetchingRowsSuccess(responseData))
  } catch (error: unknown) {
    const errorMessageString = getErrorMessage(error)
    dispatch(rowsSlice.actions.fetchingRowsError(errorMessageString))
  }
}
