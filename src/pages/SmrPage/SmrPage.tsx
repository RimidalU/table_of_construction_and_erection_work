import React, { useState } from 'react'
import SmrTable from '../../components/SmrTable/SmrTable'

import { recursiveFilter } from '../../helpers/recursiveFilter'
import { recursiveAddRow } from '../../helpers/recursiveAddRow'
import { NewRowData, RowData } from '../../interfaces/types'
import { initialRowState } from '../../data/initialRowState'
import { recursiveMap } from '../../helpers/recursiveMap'
import { mockData } from '../../data/mockData'

export default function SmrPage() {
	const [rows, setRows] = useState<RowData[]>(mockData)
	const [disabledButtons, setDisabledButtons] = useState<boolean>(false)

	const removeRow = async (id: number) => {
		setDisabledButtons(true)
		const newRows = recursiveFilter(rows, id)
		setRows(newRows)
		setDisabledButtons(false)
	}

	const addRow = async (newRow: NewRowData) => {
		setDisabledButtons(true)

		let rowState = initialRowState
		rowState.id = new Date().valueOf()
		const newRows = recursiveAddRow(rows, newRow.parentId, rowState)
		setRows(newRows)
		setDisabledButtons(false)
	}

	const updateRow = async (newRow: RowData) => {
		setDisabledButtons(true)
		const newRows = recursiveMap(rows, newRow.id, newRow)
		setRows(newRows)
		setDisabledButtons(false)
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
