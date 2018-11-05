import React, { Component } from 'react';
import PropTypes from 'prop-types';					// Imports PropTypes capability

export class PlaceInfo extends Component
{
	static propTypes =
	{
		placeId: PropTypes.string.isRequired
	}

	state =
	{
		name: '',
		address: ''
	}

	render( )
	{
		const { placeId } = this.props
		console.log( placeId )

		return(
			<div>
				<h1>{placeId}</h1>
			</div>
		)
	}
}

export default PlaceInfo;
