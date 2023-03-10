import React, { useEffect } from 'react'

import SmrTable from '../../components/SmrTable/SmrTable'
import { getUpdateRowData } from '../../helpers/getUpdateRowData'
import { NewRowData, RowData } from '../../interfaces/types'
import { useAppDispatch, useAppSelector } from '../../hooks/useAppSelector'
import {
	fetchingRows,
	updatedRow,
	removedRow,
	createdRow,
} from '../../store/action-creators/rowActionsCreator'

export default function SmrPage() {
	const { rows, isLoading, isDisabledButtons } = useAppSelector((state) => state.rowReducer) //TODO:add loader and error popup
	const dispatch = useAppDispatch()

	useEffect(() => {
		dispatch(fetchingRows())
	}, [])

	const removeRow = async (id: number | string) => {
		await dispatch(removedRow(id))
	}

	const addRow = async (newRow: NewRowData) => {
		await dispatch(createdRow(newRow))
	}

	const updateRow = async (newRow: RowData) => {
		await dispatch(updatedRow(newRow.id, getUpdateRowData(newRow)))
	}

	return (
		<article className='smrPage'>
			{isLoading ? (
				<div className='spinier'></div>
			) : (
				<SmrTable
					rows={rows}
					removeRow={removeRow}
					addRow={addRow}
					updateRow={updateRow}
					disabledButtons={isDisabledButtons}
				/>
			)}
		</article>
	)
}
