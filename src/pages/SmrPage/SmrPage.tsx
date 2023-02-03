import React, { useEffect, useState } from 'react'
import { rowAPI } from '../../api/instance'
import SmrTable from '../../components/SmrTable/SmrTable'

import { newRowBlank } from '../../data/mockData'
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
		const newRows = rows.filter((row) => id !== row.id)
		setRows(newRows)
	}

	const addRow = (id: number, newRow: typeof newRowBlank) => {
		// /v1/outlay-rows/entity/{eID}/row/create
		console.log(id, newRow)
		// setRows(newRow)
	}

	const updateRow = async (newRow: RowData) => {
		const updateRowData = {
			equipmentCosts: newRow.equipmentCosts,
			estimatedProfit: newRow.estimatedProfit,
			machineOperatorSalary: newRow.machineOperatorSalary,
			mainCosts: newRow.mainCosts,
			materials: newRow.materials,
			mimExploitation: newRow.mimExploitation,
			overheads: newRow.overheads,
			rowName: newRow.rowName,
			salary: newRow.salary,
			supportCosts: newRow.supportCosts,
		}
		await rowAPI.updateRow(newRow.id, updateRowData)
		const newRows = rows.map((row) => {
			if (row.id === newRow.id) {
				return newRow
			}
			return row
		})
		setRows(newRows)
	}

	return (
		<article className='smrPage'>
			<SmrTable rows={rows} removeRow={removeRow} addRow={addRow} updateRow={updateRow} />
		</article>
	)
}
