import React from 'react'

import menuIco from '../../assets/images/menu.svg'
import backIco from '../../assets/images/back.svg'

export default function Navigation() {
	return (
		<ul className='navigation'>
			<li className='navigationImg'>
				<img src={menuIco} alt='menu' />
			</li>
			<li className='navigationImg'>
				<img src={backIco} alt='back' />
			</li>
			<li className='navigationSpan active'>Просмотр</li>
			<li className='navigationSpan'>Управление</li>
		</ul>
	)
}
