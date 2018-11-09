import React, { Component } from 'react';		// Imports React Library
import PropTypes from 'prop-types';					// Imports PropTypes

export class PlaceInfo extends Component
{
	//--PropTypes for PlaceInfo Component-----------------------------------------------------------------------
	static propTypes =
	{
		venue: PropTypes.object.isRequired
	}

	//--Rendering the information for each InfoWindow-----------------------------------------------------------
	render( )
	{
		const { venue } = this.props		// placeId number for each place
		let myPhoto = "";								// a variable to hold the venue picture url

		if( venue.picture )
		{
			myPhoto = venue.picture.prefix + "300" + venue.picture.suffix
		}

		return(
			<div className="place-info">
				<h1 className="place-name">{venue.name}</h1>
				<div className="place-address">{venue.address || ""} - {venue.price || ""}</div>
				<img src={myPhoto} alt={venue.name || "venue"}/>
			</div>
		)
	}
}

export default PlaceInfo;
