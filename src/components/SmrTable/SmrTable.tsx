import React from 'react'
import { useAppSelector } from '../../hooks/useAppSelector'
import { NewRowData, RowData } from '../../interfaces/types'
import EditableSmrTableRow from '../EditableSmrTableRow/EditableSmrTableRow'
import SmrTableRow from '../SmrTableRow/SmrTableRow'
import { useAppDispatch } from '../../hooks/useAppSelector'
import { setEditableContactId } from '../../store/action-creators/rowActionsCreator'

interface RowsProps {
	rows: RowData[]
	removeRow: (id: number) => void
	addRow: (newRow: NewRowData) => void
	updateRow: (newRow: RowData) => void
	disabledButtons: boolean
}

export default function SmrTable({
	rows,
	removeRow,
	addRow,
	updateRow,
	disabledButtons,
}: RowsProps) {
	const { editableContactId } = useAppSelector((state) => state.rowReducer)
	let markup: JSX.Element[] = []
	const dispatch = useAppDispatch()

	const parsRows = (rows: RowData[], level: number = -1) => {
		level += 1
		rows.map((row) => {
			if (row.child.length) {
				markup.push(getRow(row, level))
				parsRows(row.child, level)
			} else {
				markup.push(getRow(row, level))
			}
		})
		return markup
	}

	const getRow = (row: RowData, level: number): JSX.Element => {
		return (
			<React.Fragment key={row.id}>
				{editableContactId !== row.id ? (
					<SmrTableRow
						row={row}
						removeRow={removeRow}
						addRow={addRow}
						editRow={editRow}
						level={level}
						disabledButtons={disabledButtons}
					/>
				) : (
					<EditableSmrTableRow
						row={row}
						removeRow={removeRow}
						addRow={addRow}
						updateRow={updateRow}
						level={level}
					/>
				)}
			</React.Fragment>
		)
	}

	const editRow = (id: number) => {
		dispatch(setEditableContactId(id))
		updateRow(rows[0])
	}

	return (
		<form action=''>
			<table className='smrTable'>
				<thead>
					<tr>
						<th>Уровень</th>
						<th>Наименование работ</th>
						<th>Основная з/п</th>
						<th>Оборудование</th>
						<th>Накладные расходы</th>
						<th>Сметная прибыль</th>
					</tr>
				</thead>
				<tbody>{parsRows(rows)}</tbody>
			</table>
		</form>
	)
}
