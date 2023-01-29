import React from 'react'
import Navigation from '../Navigation/Navigation'
import ProjectDocType from '../ProjectDocType/ProjectDocType'
import ProjectSelector from '../ProjectSelector/ProjectSelector'

export default function Header() {
	return (
		<header className='header'>
			<Navigation />
			<ProjectSelector />
			<ProjectDocType />
		</header>
	)
}
