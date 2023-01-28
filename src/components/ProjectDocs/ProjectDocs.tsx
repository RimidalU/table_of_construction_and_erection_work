import React from 'react'

import ProjectDocsItem from '../ProjectDocsItem/ProjectDocsItem'

import { projectDocsItems } from '../../data/ProjectDocsItems'

export default function ProjectDocs() {
	return (
		<ul className='projectDocs'>
			{projectDocsItems.map((item, index) => (
				<ProjectDocsItem item={item} key={index} />
			))}
		</ul>
	)
}
