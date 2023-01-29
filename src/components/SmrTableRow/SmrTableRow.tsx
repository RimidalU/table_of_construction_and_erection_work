import React from 'react'
import { MockData } from '../../data/mockData'

interface rowProps {
  row: MockData,
}

export default function SmrTableRow({row}: rowProps) {
	const {
		equipmentCosts,
		estimatedProfit,
		id,
		machineOperatorSalary,
		mainCosts,
		materials,
		mimExploitation,
		overheads,
		rowName,
		salary,
		supportCosts,
		total,
	} = row

	return (
		<tr className='smrTableRow'>
			<td>Level</td>
			<td>{rowName}</td>
			<td>{mainCosts}</td>
			<td>{equipmentCosts}</td>
			<td>{supportCosts}</td>
			<td>{estimatedProfit}</td>
		</tr>
	)
}
