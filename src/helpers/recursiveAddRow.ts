import { RowData } from '../interfaces/types'

export const recursiveAddRow = (
  oldArray: RowData[],
  parentId: number | null,
  updateRowData: RowData,
  newArray: RowData[] = [],
): RowData[] => {
  if (oldArray.length <= 0) {
    return newArray
  } else {
    let [item, ...theRest] = oldArray
    if (item.child) {
      item = { ...item, child: recursiveAddRow(item.child, parentId, updateRowData) }
    }
    const interimArray = [...newArray, item.id === parentId ? item = { ...item, child: [...item.child, updateRowData] } : item]
    return recursiveAddRow(theRest, parentId, updateRowData, interimArray)
  }
}