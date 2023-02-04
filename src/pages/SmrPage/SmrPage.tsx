import React, { useEffect, useState } from 'react'
import { rowAPI } from '../../api/instance'
import SmrTable from '../../components/SmrTable/SmrTable'

import { newRowBlank } from '../../data/mockData'
import { getUpdateRowData } from '../../helpers/getUpdateRowData'
import { recursiveFilter } from '../../helpers/recursiveFilter'
import { recursiveMap } from '../../helpers/recursiveMap'
import { RowData } from '../../interfaces/types'

export default function SmrPage() {
	const [rows, setRows] = useState<RowData[]>([])

	useEffect(() => {
		getRows()
	}, [])

	const getRows = async () => {
		const newState = await rowAPI.getAll()
		setRows(newState)
	}

	const removeRow = async (id: number) => {
		await rowAPI.removeRow(id)
		const newRows = recursiveFilter(rows, id)
		setRows(newRows)
	}

	const addRow = (id: number, newRow: typeof newRowBlank) => {
		// /v1/outlay-rows/entity/{eID}/row/create
		console.log(id, newRow)
		// setRows(newRow)
	}

	const updateRow = async (newRow: RowData) => {
		await rowAPI.updateRow(newRow.id, getUpdateRowData(newRow))
		const newRows = recursiveMap(rows, newRow.id, newRow)
		setRows(newRows)
	}

	return (
		<article className='smrPage'>
			<SmrTable rows={rows} removeRow={removeRow} addRow={addRow} updateRow={updateRow} />
		</article>
	)
}
