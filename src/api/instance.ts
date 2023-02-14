import ky from 'ky'

import { getErrorMessage } from '../helpers/getErrorMessage'
import { ApiResponse, NewRowData, RowData, UpdateRowData } from '../interfaces/types'

const api = ky.create({
  prefixUrl: import.meta.env.VITE_BASE_URL,
  // hooks:{
  //   beforeRequest: [request => {
  //     console.log(request)}],
  //   afterResponse:[(_request, _options, response) => {
  //     console.log(response)}]
  // }
})

export const rowAPI = {

  async getAll(): Promise<RowData[]> {
    return await api.get('list').json()
  },

  async updateRow(rID: number, newRow: UpdateRowData): Promise<ApiResponse> {
    return await api.post(`${rID}/update`, { json: newRow }).json()
  },

  async createRow(newRow: NewRowData): Promise<ApiResponse> {
    return await api.post(`create`, { json: newRow }).json()
  },

  async removeRow(rID: number): Promise<ApiResponse> {
    return await api.delete(`${rID}/delete`, { json: rID }).json()
  }
}
