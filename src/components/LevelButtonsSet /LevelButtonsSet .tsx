import React, { useState } from 'react'

import itemIco from '../../assets/images/item.svg'
import removeIco from '../../assets/images/remove.svg'

export default function LevelButtonsSet() {
	const [isShown, setIsShown] = useState(false)

	return (
		<div
			className='levelButtonsSet'
			onMouseEnter={() => setIsShown(true)}
			onMouseLeave={() => setIsShown(false)}
		>
			<img src={itemIco} alt='create row' />
			{isShown && <img src={removeIco} alt='remove row' />}
		</div>
	)
}
