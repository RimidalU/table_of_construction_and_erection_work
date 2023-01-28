import React from 'react'

import itemIco from '../../assets/images/navbutton.svg'

type ItemProps = {
	item: string
}
export default function ProjectDocsItem({ item }: ItemProps) {
	return (
		<li className='projectDocsItem'>
			<img src={itemIco} alt='project item' />
			<span>{item}</span>
		</li>
	)
}
