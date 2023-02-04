import React, { useEffect, useState } from 'react'
import { rowAPI } from '../../api/instance'
import SmrTable from '../../components/SmrTable/SmrTable'

import { getUpdateRowData } from '../../helpers/getUpdateRowData'
import { recursiveFilter } from '../../helpers/recursiveFilter'
import { recursiveAddRow } from '../../helpers/recursiveAddRow'
import { NewRowData, RowData, RowDataResponse } from '../../interfaces/types'
import { initialRowState } from '../../data/initialRowState'
import { recursiveMap } from '../../helpers/recursiveMap'

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
		const { current, changed } = await rowAPI.removeRow(id)
		changed && updateState(changed)
		const newRows = recursiveFilter(rows, id)
		setRows(newRows)
	}

	const addRow = async (newRow: NewRowData) => {
		const { current, changed } = await rowAPI.createRow(newRow)
		const rowState = initialRowState

		changed && updateState(changed)

		if (current.id) {
			rowState.id = current.id
			const newRows = recursiveAddRow(rows, newRow.parentId, rowState)
			setRows(newRows)
		}
	}

	const updateRow = async (newRow: RowData) => {
		const { current, changed } = await rowAPI.updateRow(newRow.id, getUpdateRowData(newRow))
		changed && updateState(changed)
		const newRows = recursiveMap(rows, newRow.id, newRow)
		setRows(newRows)
	}

	const updateState = (changed: RowDataResponse[]) => {
		changed &&
			changed.forEach((newRow) => {
				const newRows = recursiveMap(rows, newRow.id, newRow)
				setRows(newRows)
			})
	}
	return (
		<article className='smrPage'>
			<SmrTable rows={rows} removeRow={removeRow} addRow={addRow} updateRow={updateRow} />
		</article>
	)
}
