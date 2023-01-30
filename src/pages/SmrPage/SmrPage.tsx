import React, { useState } from 'react'
import SmrTable from '../../components/SmrTable/SmrTable'

import { MockData, mockData, newRowBlank } from '../../data/mockData'

export default function SmrPage() {
	const [rows, setRows] = useState(mockData)

	const removeRow = (id: number) => {
		const newRows = rows.filter((row) => id !== row.id)
		setRows(newRows)
	}

	const addRow = (id: number, newRow: typeof newRowBlank) => { // /v1/outlay-rows/entity/{eID}/row/create
		console.log(id, newRow)
		// setRows(newRow)
	}

	const updateRow = (newRow: MockData) => {
		console.log(newRow.salary)
	}

	return (
		<article className='smrPage'>
			<SmrTable rows={rows} removeRow={removeRow} addRow={addRow} updateRow={updateRow} />
		</article>
	)
}
