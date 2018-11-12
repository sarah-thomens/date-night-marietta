import React, { Component } from 'react';		// Imports React Library
import PropTypes from 'prop-types';					// Imports PropTypes

export class PlaceInfo extends Component
{
	//--PropTypes for PlaceInfo Component-----------------------------------------------------------------------
	static propTypes =
	{
		venue: PropTypes.object.isRequired		// current venue object
	}

	//--Rendering the information for each InfoWindow-----------------------------------------------------------
	render( )
	{
		const { venue } = this.props		// venue object prop
		let myPhoto;										// a variable to hold the venue picture url

		//--If the venue has a picture...-------------------------------------------------------------------------
		if( venue.picture )
		{
			//--Set myPhoto to the picture's url at size 150px------------------------------------------------------
			myPhoto = venue.picture.prefix + "150" + venue.picture.suffix
		}

		return(
			<div className="place-info">
				<h3 className="place-name">{venue.name || ""}</h3>
				<div className="place-address">{venue.address || ""}</div>
				<img src={myPhoto} alt={venue.name || "venue"}/>
				<div className="place-price"><span className="descriptor">Price: </span>{venue.price || ""}</div>
			</div>
		)
	}
}

export default PlaceInfo;
