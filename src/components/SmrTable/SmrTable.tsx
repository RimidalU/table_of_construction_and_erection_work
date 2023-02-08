import React, { useState } from 'react'
import { NewRowData, RowData } from '../../interfaces/types'
import EditableSmrTableRow from '../EditableSmrTableRow/EditableSmrTableRow'
import SmrTableRow from '../SmrTableRow/SmrTableRow'

interface RowsProps {
	rows: RowData[]
	removeRow: (id: number) => void
	addRow: (newRow: NewRowData) => void
	updateRow: (newRow: RowData) => void
	disabledButtons: boolean
}

export default function SmrTable({ rows, removeRow, addRow, updateRow, disabledButtons }: RowsProps) {
	const [editContactId, setEditContactId] = useState<number | null>(null)

	let markup: JSX.Element[] = []

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
				{editContactId !== row.id ? (
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
						setEditContactId={setEditContactId}
						level={level}
					/>
				)}
			</React.Fragment>
		)
	}

	const editRow = (id: number) => {
		setEditContactId(id)
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
