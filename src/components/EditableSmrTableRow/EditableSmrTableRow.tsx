import React, { KeyboardEvent, useEffect, useState } from 'react'
import { rowAPI } from '../../api/instance'
import { initialRowState } from '../../data/initialRowState'
import { newRowBlank } from '../../data/mockData'
import { RowData } from '../../interfaces/types'
import LevelButtonsSet from '../LevelButtonsSet /LevelButtonsSet '

interface rowProps {
	row: RowData
	removeRow: (id: number) => void
	addRow: (id: number, newRow: typeof newRowBlank) => void
	updateRow: (newRow: RowData) => void
	setEditContactId: (id: null) => void
}

export default function EditableSmrTableRow({
	row,
	removeRow,
	addRow,
	updateRow,
	setEditContactId,
}: rowProps) {
	const [rowValue, setRowValue] = useState<RowData>(initialRowState)

	useEffect(() => {
		setRowValue(row)
	}, [])

	const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
		if (event.key === 'Enter') {
			const updateRowData = {
				equipmentCosts,
				estimatedProfit,
				machineOperatorSalary,
				mainCosts,
				materials,
				mimExploitation,
				overheads,
				rowName,
				salary,
				supportCosts,
			}
			updateRow(rowValue)
			setEditContactId(null)
			rowAPI.updateRow(id, updateRowData)
		}
	}

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
	} = rowValue

	return (
		<tr className='editableSmrTableRow' onDoubleClick={() => updateRow(row)}>
			<td>
				<LevelButtonsSet id={id} removeRow={removeRow} addRow={addRow} />
			</td>
			<td>
				<input
					type='text'
					value={rowName}
					onChange={(e) => setRowValue((prev) => ({ ...prev, rowName: e.target.value }))}
					onKeyDown={handleKeyDown}
				/>
			</td>
			<td>
				<input
					type='number'
					value={salary}
					onChange={(e) => setRowValue((prev) => ({ ...prev, salary: +e.target.value }))}
					onKeyDown={handleKeyDown}
				/>
			</td>
			<td>
				<input
					type='number'
					value={equipmentCosts}
					onChange={(e) => setRowValue((prev) => ({ ...prev, equipmentCosts: +e.target.value }))}
					onKeyDown={handleKeyDown}
				/>
			</td>
			<td>
				<input
					type='number'
					value={supportCosts}
					onChange={(e) => setRowValue((prev) => ({ ...prev, supportCosts: +e.target.value }))}
					onKeyDown={handleKeyDown}
				/>
			</td>
			<td>
				<input
					type='number'
					value={estimatedProfit}
					onChange={(e) => setRowValue((prev) => ({ ...prev, estimatedProfit: +e.target.value }))}
					onKeyDown={handleKeyDown}
				/>
			</td>
		</tr>
	)
}
