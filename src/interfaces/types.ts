import { RowsActionsTypes } from '../store/actions'


export interface UpdateRowData {
  equipmentCosts: number
  estimatedProfit: number
  machineOperatorSalary: number
  mainCosts: number
  materials: number
  mimExploitation: number
  overheads: number
  rowName: string
  salary: number
  supportCosts: number
}

export interface NewRowData {
  equipmentCosts: number
  estimatedProfit: number
  machineOperatorSalary: number
  mainCosts: number
  materials: number
  mimExploitation: number
  overheads: number
  parentId: number | null
  rowName: string
  salary: number
  supportCosts: number
}

export interface RowDataResponse {
  equipmentCosts: number
  estimatedProfit: number
  id: number
  machineOperatorSalary: number
  mainCosts: number
  materials: number
  mimExploitation: number
  overheads: number
  rowName: string
  salary: number
  supportCosts: number
  total: number
}

export interface RowData extends RowDataResponse {
  child: RowData[],
}
export interface ApiResponse {
  "changed": RowDataResponse[],
  "current": RowDataResponse
}

export interface RowState {
  rows: RowData[],
  isLoading: boolean,
  errors: string
}

export interface RowAction {
  type: RowsActionsTypes
  payload: RowData[]
}