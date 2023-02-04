import { RowData, UpdateRowData } from '../interfaces/types'

export const getUpdateRowData = (newRow: RowData): UpdateRowData => {
  return {
    equipmentCosts: newRow.equipmentCosts,
    estimatedProfit: newRow.estimatedProfit,
    machineOperatorSalary: newRow.machineOperatorSalary,
    mainCosts: newRow.mainCosts,
    materials: newRow.materials,
    mimExploitation: newRow.mimExploitation,
    overheads: newRow.overheads,
    rowName: newRow.rowName,
    salary: newRow.salary,
    supportCosts: newRow.supportCosts,
  }
}