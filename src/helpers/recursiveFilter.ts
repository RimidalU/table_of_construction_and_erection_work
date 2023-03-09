import { RowData } from '../interfaces/types'

export const recursiveFilter = (arr: RowData[], id: number | string): RowData[] => {
  return arr.filter((row) => {
    const keep = row['id'] != id
    if (keep && row['child']) {
      row['child'] = recursiveFilter(row['child'], id)
    }
    return keep
  })
}