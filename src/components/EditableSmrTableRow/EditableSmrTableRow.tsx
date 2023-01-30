import React from 'react'
import { MockData, newRowBlank } from '../../data/mockData'
import LevelButtonsSet from '../LevelButtonsSet /LevelButtonsSet '

interface rowProps {
	row: MockData
	removeRow: (id: number) => void
	addRow: (id: number, newRow: typeof newRowBlank) => void
	updateRow: (newRow: MockData) => void
}

export default function EditableSmrTableRow({ row, removeRow, addRow, updateRow }: rowProps) {
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
		<tr className='editableSmrTableRow' onDoubleClick={() => updateRow(row)}>
			<td>
				<LevelButtonsSet id={id} removeRow={removeRow} addRow={addRow} />
			</td>
			<td><input type='text' required placeholder={rowName}/></td>
			<td><input type='text' placeholder={`${salary}`}/></td>
			<td><input type='text' placeholder={`${equipmentCosts}`}/></td>
			<td><input type='text' placeholder={`${supportCosts}`}/></td>
			<td><input type='text' placeholder={`${estimatedProfit}`}/></td>
		</tr>
	)
}
