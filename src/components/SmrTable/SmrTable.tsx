import React from 'react'
import { MockData } from '../../data/mockData'
import SmrTableRow from '../SmrTableRow/SmrTableRow'

interface RowsProps {
	rows: MockData[]
}

export default function SmrTable({ rows }: RowsProps) {
	return (
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
					<SmrTableRow row={row} key={row.id} />
				))}
			</tbody>
		</table>
	)
}
