import React, { useState } from 'react'
import { newRowBlank } from '../../data/mockData'
import { RowData } from '../../interfaces/types'
import EditableSmrTableRow from '../EditableSmrTableRow/EditableSmrTableRow'
import SmrTableRow from '../SmrTableRow/SmrTableRow'

interface RowsProps {
	rows: RowData[]
	removeRow: (id: number) => void
	addRow: (id: number, newRow: typeof newRowBlank) => void
	updateRow: (newRow: RowData) => void
}

export default function SmrTable({ rows, removeRow, addRow, updateRow }: RowsProps) {
	const [editContactId, setEditContactId] = useState<number | null>(null)

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
				<tbody>
					{rows.map((row) => (
						<React.Fragment key={row.id}>
							{editContactId !== row.id ? (
								<SmrTableRow row={row} removeRow={removeRow} addRow={addRow} editRow={editRow} />
							) : (
								<EditableSmrTableRow
									row={row}
									removeRow={removeRow}
									addRow={addRow}
									updateRow={updateRow}
									setEditContactId={setEditContactId}
								/>
							)}
						</React.Fragment>
					))}
				</tbody>
			</table>
		</form>
	)
}
