import React from 'react'

import menuIco from '../../assets/images/menu.svg'
import backIco from '../../assets/images/back.svg'

export default function Navigation() {
	return (
		<ul className='navigation'>
			<li>
				<img src={menuIco} alt='menu' className='navigationImg'/>
			</li>
			<li>
				<img src={backIco} alt='back' className='navigationImg'/>
			</li>
			<li className='navigationSpan active'>
        Просмотр
        </li>
			<li className='navigationSpan'>
        Управление
        </li>
		</ul>

		// <div className='navigation'>
		// 	<img src={menuIco} alt='menu' />
		// 	<img src={backIco} alt='back' />
		// 	<span className='linkActive'>Просмотр</span>
		// 	<span>Управление</span>
		// </div>
	)
}
