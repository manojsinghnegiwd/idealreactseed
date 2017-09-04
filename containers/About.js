import React from 'react';
import {Link} from 'react-router-dom';

export default class About extends React.Component {
	render () {
		return (
			<div>
				About
				<Link to="/">
                    <button>Go Home</button>
                </Link>
			</div>
		)
	}
}