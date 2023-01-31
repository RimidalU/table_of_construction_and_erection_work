import ky from 'ky'
import { getErrorMessage } from '../helpers/getErrorMessage'
import { RowData, UpdateRowData } from '../interfaces/types'

const api = ky.create({
  prefixUrl: import.meta.env.VITE_BASE_URL
})

export const rowAPI = {
  async getAll(): Promise<RowData[]> {
    try {
      return await api.get('list').json()
    } catch (error: unknown) {
      throw (getErrorMessage(error))
    }
  },
  // async setRow(rID, newRow) {
  //   try {
  //     return await api.post(`${rID}/create`, { json: newRow }).json()
  //   } catch (error: unknown) {
  //     console.log(getErrorMessage(error))
  //   }
  // },
  async updateRow(rID: number, newRow: UpdateRowData) {
    try {
      return await api.post(`${rID}/update`, {
        json: newRow
      }).json()
    } catch (error: unknown) {
      console.log(getErrorMessage(error))
    }
  },
  async removeRow(rID: number) {
    try {
      return await api.delete(`${rID}/delete`).json()
    } catch (error: unknown) {
      console.log(getErrorMessage(error))
    }
  }
}
