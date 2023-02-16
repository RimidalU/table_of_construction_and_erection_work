import React, { KeyboardEvent, useEffect, useState } from 'react'
import { initialRowState } from '../../data/initialRowState'
import { NewRowData, RowData } from '../../interfaces/types'
import LevelButtonsSet from '../LevelButtonsSet /LevelButtonsSet '
import { useAppDispatch } from '../../hooks/useAppSelector'
import { setEditableContactId } from '../../store/action-creators/rowActionsCreator'

interface rowProps {
	row: RowData
	level: number
	removeRow: (id: number) => void
	addRow: (newRow: NewRowData) => void
	updateRow: (newRow: RowData) => void
}

export default function EditableSmrTableRow({
	row,
	level,
	removeRow,
	addRow,
	updateRow,
}: rowProps) {
	const [rowValue, setRowValue] = useState<RowData>(initialRowState)

	useEffect(() => {
		setRowValue(row)
	}, [])

	const dispatch = useAppDispatch()

	const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
		if (event.key === 'Enter') {
			updateRow(rowValue)
			dispatch(setEditableContactId(null))
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

	const handleFocus = (event: React.FocusEvent<HTMLInputElement>) => event.target.select()

	return (
		<tr className='editableSmrTableRow' onDoubleClick={() => updateRow(row)}>
			<td className='editableButtonsSet'>
				<LevelButtonsSet id={id} removeRow={removeRow} addRow={addRow} level={level} />
			</td>
			<td>
				<input
					type='text'
					onFocus={(event) => handleFocus(event)}
					autoFocus
					value={rowName}
					onChange={(e) => setRowValue((prev) => ({ ...prev, rowName: e.target.value }))}
					onKeyDown={handleKeyDown}
				/>
			</td>
			<td>
				<input
					type='number'
					onFocus={(event) => handleFocus(event)}
					value={salary}
					onChange={(e) => setRowValue((prev) => ({ ...prev, salary: +e.target.value }))}
					onKeyDown={handleKeyDown}
				/>
			</td>
			<td>
				<input
					type='number'
					onFocus={(event) => handleFocus(event)}
					value={equipmentCosts}
					onChange={(e) => setRowValue((prev) => ({ ...prev, equipmentCosts: +e.target.value }))}
					onKeyDown={handleKeyDown}
				/>
			</td>
			<td>
				<input
					type='number'
					onFocus={(event) => handleFocus(event)}
					value={supportCosts}
					onChange={(e) => setRowValue((prev) => ({ ...prev, supportCosts: +e.target.value }))}
					onKeyDown={handleKeyDown}
				/>
			</td>
			<td>
				<input
					type='number'
					onFocus={(event) => handleFocus(event)}
					value={estimatedProfit}
					onChange={(e) => setRowValue((prev) => ({ ...prev, estimatedProfit: +e.target.value }))}
					onKeyDown={handleKeyDown}
				/>
			</td>
		</tr>
	)
}
