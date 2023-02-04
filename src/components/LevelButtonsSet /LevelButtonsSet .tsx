import React, { useState } from 'react'

import itemIco from '../../assets/images/item.svg'
import removeIco from '../../assets/images/remove.svg'
import { initialNewRowData } from '../../data/initialNewRowData'
import { NewRowData } from '../../interfaces/types'

interface ButtonSetProps {
	id: number
	level: number
	removeRow: (id: number) => void
	addRow: (newRow: NewRowData) => void
}

export default function LevelButtonsSet({ id, removeRow, addRow, level }: ButtonSetProps) {
	const [isShown, setIsShown] = useState(false)
	const shiftSet = level * 20

	const createNewRowBlank = (id: number | null = null) => {
		let newRow = initialNewRowData
		newRow.parentId = id
		addRow(newRow)
	}

	return (
		<div
			style={{ marginLeft: `${shiftSet}px` }}
			className='levelButtonsSet'
			onMouseEnter={() => setIsShown(true)}
			onMouseLeave={() => setIsShown(false)}
		>
			<img src={itemIco} alt='create row' onClick={() => createNewRowBlank(id)} />
			{isShown && <img src={removeIco} alt='remove row' onClick={() => removeRow(id)} />}
		</div>
	)
}
