import React, { useState } from 'react'

import itemIco from '../../assets/images/item.svg'
import removeIco from '../../assets/images/remove.svg'
import { createNewRowBlank } from '../../helpers/createNewRowBlank'
import { NewRowData } from '../../interfaces/types'

interface ButtonSetProps {
	id: number | string
	level: number
	removeRow: (id: number | string) => void
	addRow: (newRow: NewRowData) => void
}

export default function LevelButtonsSet({ id, removeRow, addRow, level }: ButtonSetProps) {
	const [isShown, setIsShown] = useState(false)
	const shiftSet = level * 20

	const handleCreateNewRowBlank = (id: number | string) => {
		addRow(createNewRowBlank(id))
	}

	return (
		<div
			style={{ marginLeft: `${shiftSet}px` }}
			className='levelButtonsSet'
			onMouseEnter={() => setIsShown(true)}
			onMouseLeave={() => setIsShown(false)}
		>
			<img src={itemIco} alt='create row' onClick={() => handleCreateNewRowBlank(id)} />
			{isShown && <img src={removeIco} alt='remove row' onClick={() => removeRow(id)} />}
		</div>
	)
}
