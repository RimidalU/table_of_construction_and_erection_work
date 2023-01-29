import React from 'react'

import moreIco from '../../assets/images/more.svg'

export default function ProjectSelector() {
	return (
		<div className='projectSelector'>
			<div>
				<p className='projectTitle'>Название проекта</p>
				<p className='projectAbbr'>Аббревиатура</p>
			</div>
			<div>
				<img src={moreIco} alt='open projects' />
			</div>
		</div>
	)
}
