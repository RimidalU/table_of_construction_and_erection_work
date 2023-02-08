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
	const [disabledButtons, setDisabledButtons] = useState<boolean>(false)

	useEffect(() => {
		getRows()
	}, [])

	const getRows = async () => {
		const newState = await rowAPI.getAll()
		setRows(newState)
	}

	const removeRow = async (id: number) => {
		const { current, changed } = await rowAPI.removeRow(id)
		if (current.id) {
			changed.length && updateState(changed)
			const newRows = recursiveFilter(rows, id)
			setRows(newRows)
		}
	}

	const addRow = async (newRow: NewRowData) => {
		setDisabledButtons(true)
		const { current, changed } = await rowAPI.createRow(newRow)

		if (current.id) {
			console.log(current.id)
			changed.length && updateState(changed)

			const rowState = initialRowState
			rowState.id = current.id
			const newRows = recursiveAddRow(rows, newRow.parentId, rowState)
			setRows(newRows)
			setDisabledButtons(false)
		}
	}

	const updateRow = async (newRow: RowData) => {
		setDisabledButtons(true)
		const { current, changed } = await rowAPI.updateRow(newRow.id, getUpdateRowData(newRow))
		if (current.id) {
			changed.length && updateState([...changed, current])
			const newRows = recursiveMap(rows, newRow.id, newRow)
			setRows(newRows)
		}
	}

	const updateState = (changed: RowDataResponse[]) => {
		changed.length &&
			changed.forEach((newRow) => {
				const newRows = recursiveMap(rows, newRow.id, newRow)
				setRows(newRows)
			})
	}
	return (
		<article className='smrPage'>
			<SmrTable
				rows={rows}
				removeRow={removeRow}
				addRow={addRow}
				updateRow={updateRow}
				disabledButtons={disabledButtons}
			/>
		</article>
	)
}
