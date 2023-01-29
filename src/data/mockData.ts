export interface MockData {
  child: [
    number | null
  ],
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

export const mockData: MockData[] = [
  {
    "child": [
      null
    ],
    "equipmentCosts": 0,
    "estimatedProfit": 0,
    "id": 1,
    "machineOperatorSalary": 0,
    "mainCosts": 0,
    "materials": 0,
    "mimExploitation": 0,
    "overheads": 0,
    "rowName": "string",
    "salary": 0,
    "supportCosts": 0,
    "total": 0
  },
  {
    "child": [
      1
    ],
    "equipmentCosts": 10,
    "estimatedProfit": 10,
    "id": 0,
    "machineOperatorSalary": 10,
    "mainCosts": 10,
    "materials": 10,
    "mimExploitation": 10,
    "overheads": 10,
    "rowName": "string 10",
    "salary": 10,
    "supportCosts": 10,
    "total": 10
  },
  {
    "child": [
      1
    ],
    "equipmentCosts": 20,
    "estimatedProfit": 20,
    "id": 2,
    "machineOperatorSalary": 20,
    "mainCosts": 20,
    "materials": 20,
    "mimExploitation": 20,
    "overheads": 20,
    "rowName": "string 20",
    "salary": 20,
    "supportCosts": 20,
    "total": 20
  }
]