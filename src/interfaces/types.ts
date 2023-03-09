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
  parentId: number | null | string
  rowName: string
  salary: number
  supportCosts: number
}

export interface RowDataResponse {
  equipmentCosts: number
  estimatedProfit: number
  id: number | string
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

export interface ApiResponseWithId extends ApiResponse {
  id: number | null | string
}
export interface RowState {
  rows: RowData[],
  isLoading: boolean,
  isDisabledButtons: boolean,
  errors: string,
  editableContactId: number | null | string
}
