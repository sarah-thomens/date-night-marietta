import React, { Component } from 'react';
import PropTypes from 'prop-types'					// Imports PropTypes capability

export class PlaceInfo extends Component
{
	static propTypes =
	{
		placeId: PropTypes.string.isRequired
	}

	render( )
	{
		return(
			<div>
				<h1>{this.state.selectedPlace.name}</h1>
			</div>
		)
	}
}

export default PlaceInfo;
