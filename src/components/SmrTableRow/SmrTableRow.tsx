import React from 'react'
import { NewRowData, RowData } from '../../interfaces/types'
import LevelButtonsSet from '../LevelButtonsSet /LevelButtonsSet '

interface rowProps {
	row: RowData
	level: number
	removeRow: (id: number) => void
	addRow: (newRow: NewRowData) => void
	editRow: (id: number) => void
	disabledButtons: boolean
}

export default function SmrTableRow({ row, removeRow, addRow, editRow, level, disabledButtons }: rowProps) {
	const {
		equipmentCosts,
		estimatedProfit,
		id,
		machineOperatorSalary,
		mainCosts,
		materials,
		mimExploitation,
		overheads,
		rowName,
		salary,
		supportCosts,
		total,
	} = row

	return (
		<tr className='smrTableRow' onDoubleClick={() => editRow(id)}>
			<td className={disabledButtons ? 'editableButtonsSet' : ''}>
				<LevelButtonsSet id={id} removeRow={removeRow} addRow={addRow} level={level} />
			</td>
			<td>{rowName}</td>
			<td>{salary}</td>
			<td>{equipmentCosts}</td>
			<td>{supportCosts}</td>
			<td>{estimatedProfit}</td>
		</tr>
	)
}
