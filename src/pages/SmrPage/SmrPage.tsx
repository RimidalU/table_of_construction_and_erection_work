import React, { useEffect, useState } from 'react'

import { rowAPI } from '../../api/instance'
import SmrTable from '../../components/SmrTable/SmrTable'
import { getUpdateRowData } from '../../helpers/getUpdateRowData'
import { recursiveFilter } from '../../helpers/recursiveFilter'
import { recursiveAddRow } from '../../helpers/recursiveAddRow'
import { NewRowData, RowData, RowDataResponse } from '../../interfaces/types'
import { initialRowState } from '../../data/initialRowState'
import { recursiveMap } from '../../helpers/recursiveMap'
import { useAppDispatch, useAppSelector } from '../../hooks/useAppSelector'
import { fetchingRows } from '../../store/action-creators/rowActionsCreator'

export default function SmrPage() {
	// const [rows, setRows] = useState<RowData[]>([])
	const [disabledButtons, setDisabledButtons] = useState<boolean>(false)

	const { rows, isLoading } = useAppSelector((state) => state.rowReducer) //TODO:add loader and error popup
	const dispatch = useAppDispatch()

	useEffect(() => {
		dispatch(fetchingRows())
	}, [])

	const removeRow = async (id: number) => {
		setDisabledButtons(true)
		const { current, changed } = await rowAPI.removeRow(id)
		if (current === null) {
			changed.length && updateState(changed)
			const newRows = recursiveFilter(rows, id)
			setRows(newRows)
		} else {
			updateState(changed)
		}
		setDisabledButtons(false)
	}

	const addRow = async (newRow: NewRowData) => {
		setDisabledButtons(true)
		const { current, changed } = await rowAPI.createRow(newRow)

		if (current.id) {
			changed.length && updateState(changed)

			let rowState = initialRowState
			rowState.id = current.id
			const newRows = recursiveAddRow(rows, newRow.parentId, rowState)
			setRows(newRows)
		}
		setDisabledButtons(false)
	}

	const updateRow = async (newRow: RowData) => {
		setDisabledButtons(true)
		const { current, changed } = await rowAPI.updateRow(newRow.id, getUpdateRowData(newRow))
		if (current.id) {
			changed.length && updateState([...changed, current])
			const newRows = recursiveMap(rows, newRow.id, newRow)
			setRows(newRows)
		}
		setDisabledButtons(false)
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
			{isLoading ? (
				<h2>isLoading</h2>
			) : (
				<SmrTable
					rows={rows}
					removeRow={removeRow}
					addRow={addRow}
					updateRow={updateRow}
					disabledButtons={disabledButtons}
				/>
			)}
		</article>
	)
}
