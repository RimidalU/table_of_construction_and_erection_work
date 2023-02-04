import ky from 'ky'
import { getErrorMessage } from '../helpers/getErrorMessage'
import { NewRowData, Response, RowData, UpdateRowData } from '../interfaces/types'

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

  async createRow(newRow: NewRowData): Promise<Response> {
    try {
      return await api.post(`create`, { json: newRow }).json()
    } catch (error: unknown) {
      throw (getErrorMessage(error))
    }
  },

  async updateRow(rID: number, newRow: UpdateRowData): Promise<Response> {
    try {
      return await api.post(`${rID}/update`, {
        json: newRow
      }).json()
    } catch (error: unknown) {
      throw (getErrorMessage(error))
    }
  },

  async removeRow(rID: number): Promise<Response> {
    try {
      return await api.delete(`${rID}/delete`).json()
    } catch (error: unknown) {
      throw (getErrorMessage(error))
    }
  }
}
