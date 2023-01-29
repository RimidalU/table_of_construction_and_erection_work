import React, { useState } from 'react'
import SmrTable from '../../components/SmrTable/SmrTable'

import {mockData} from '../../data/mockData'


export default function SmrPage() {

	const [rows, setRows] =useState(mockData)

	return (
		<article className='smrPage'>
			<SmrTable rows={rows} />
		</article>
	)
}
