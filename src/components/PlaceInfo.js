import React, { Component } from 'react';		// Imports React Library
import PropTypes from 'prop-types';					// Imports PropTypes

export class PlaceInfo extends Component
{
	//--PropTypes for PlaceInfo Component-----------------------------------------------------------------------
	static propTypes =
	{
		name: PropTypes.string.isRequired
	}

	//--Rendering the information for each InfoWindow-----------------------------------------------------------
	render( )
	{
		const { name } = this.props		// placeId number for each place

		return(
			<div className="place-info">
				<h1>{name}</h1>
			</div>
		)
	}
}

export default PlaceInfo;
