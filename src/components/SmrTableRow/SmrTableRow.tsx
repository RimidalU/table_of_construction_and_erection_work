import React from 'react'
import { MockData, newRowBlank } from '../../data/mockData'
import LevelButtonsSet from '../LevelButtonsSet /LevelButtonsSet '

interface rowProps {
	row: MockData
	removeRow: (id: number) => void
	addRow: (id: number, newRow: typeof newRowBlank) => void
	editRow: (id: number) => void
}

export default function SmrTableRow({ row, removeRow, addRow, editRow }: rowProps) {
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
			<td>
				<LevelButtonsSet id={id} removeRow={removeRow} addRow={addRow} />
			</td>
			<td>{rowName}</td>
			<td>{salary}</td>
			<td>{equipmentCosts}</td>
			<td>{supportCosts}</td>
			<td>{estimatedProfit}</td>
		</tr>
	)
}
