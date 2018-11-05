import React, { Component } from 'react';		// Imports React Library
import PropTypes from 'prop-types';					// Imports PropTypes

export class PlaceInfo extends Component
{
	//--PropTypes for PlaceInfo Component-----------------------------------------------------------------------
	static propTypes =
	{
		placeId: PropTypes.string.isRequired
	}

	//--The state of the marker information---------------------------------------------------------------------
	state =
	{
		name: '',
		address: ''
	}

	//--Rendering the information for each InfoWindow-----------------------------------------------------------
	render( )
	{
		const { placeId } = this.props		// placeId number for each place

		return(
			<div>
				<h1>{placeId}</h1>
			</div>
		)
	}
}

export default PlaceInfo;
