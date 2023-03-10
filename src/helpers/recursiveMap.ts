import { RowData } from '../interfaces/types'

export const recursiveMap = (
  oldArray: RowData[],
  id: number | string,
  updateRowData: Partial<RowData>,
  newArray: RowData[] = [],
): RowData[] => {
  if (oldArray.length <= 0) {
    return newArray
  } else {
    let [item, ...theRest] = oldArray
    if (item.child) {
      item = { ...item, child: recursiveMap(item.child, id, updateRowData) }
    }
    const interimArray = [...newArray, item.id === id ? item = { ...item,  ...updateRowData } : item]
    return recursiveMap(theRest, id, updateRowData, interimArray)
  }
}