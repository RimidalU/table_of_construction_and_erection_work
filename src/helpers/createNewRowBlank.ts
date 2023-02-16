import { initialNewRowData } from '../data/initialNewRowData'

export const createNewRowBlank = (id: number | null = null) => {
  let newRow = initialNewRowData
  newRow.parentId = id
  return newRow
}
