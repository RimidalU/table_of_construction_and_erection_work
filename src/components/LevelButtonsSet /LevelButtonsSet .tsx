import React, { useState } from 'react'

import itemIco from '../../assets/images/item.svg'
import removeIco from '../../assets/images/remove.svg'
import { newRowBlank } from '../../data/mockData'

interface ButtonSetProps {
	id: number
	level: number
	removeRow: (id: number) => void
	addRow: (id: number, newRow: typeof newRowBlank) => void
}

export default function LevelButtonsSet({ id, removeRow, addRow, level }: ButtonSetProps) {
	const [isShown, setIsShown] = useState(false)
	const shiftSet = level * 20

	return (
		<div
			style={{marginLeft: `${shiftSet}px`}}
			className='levelButtonsSet'
			onMouseEnter={() => setIsShown(true)}
			onMouseLeave={() => setIsShown(false)}
		>
			<img src={itemIco} alt='create row' onClick={() => addRow(id, newRowBlank)} />
			{isShown && <img src={removeIco} alt='remove row' onClick={() => removeRow(id)} />}
		</div>
	)
}
