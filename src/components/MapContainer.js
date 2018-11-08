import React, { Component } from 'react';																			// Imports React Library
import PropTypes from 'prop-types';																						// Imports PropTypes
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';	// Imports Map functionality
import PlaceInfo from './PlaceInfo';																					// Imports PLaceInfo Component

export class MapContainer extends Component
{
	//--PropTypes for MapContainer Component--------------------------------------------------------------------
	static propTypes =
	{
		venues: PropTypes.array.isRequired		// venues array
	}

	//--The state of the map and its markers--------------------------------------------------------------------
	state =
	{
		showingInfoWindow: false,
    activeMarker: {},
    activeVenue: {}
	}

	//--onMarkerClick function that sets the state of the activeMarker and selectedPlace------------------------
	onMarkerClick = ( props, marker, e ) =>
	{
		let myVenue;

		this.props.venues.forEach( (venue) =>
		{
			if( venue.id === marker.name )
			{
				myVenue = venue;
			}
		})

		this.setState(
		{
			activeVenue: myVenue,
			activeMarker: marker,
			showingInfoWindow: true
		})
	};

	onMapClick = (props) =>
	{
		if( this.state.showingInfoWindow )
		{
			this.setState(
			{
				showingInfoWindow: false,
				activeMarker: {},
				activeVenue: {}
			});
		}
	};

	//--Renders the MapContainer Component----------------------------------------------------------------------
  render( )
	{
		const { venues } = this.props			// places array prop

    return (
			<div className="marietta-map">
				{/*--Map Component to center map on Marietta Square------------------------------------------------*/}
	      <Map
					google={this.props.google}
					zoom={18.2}
					initialCenter=
					{{
	          	lat: 33.95245160000001,
	            lng: -84.54961659999999
	        }}
				>
					{/*--Sets default markers on the map-------------------------------------------------------------*/}
					{
						venues.map( (venue) =>
						(
							<Marker
								onClick={this.onMarkerClick}
								name={ venue.id }
								position={ venue.position }
								key={ venue.id }
							/>
						)
					)}
					{/*--Sets up InfoWindows for each of the markers-------------------------------------------------*/}
					<InfoWindow
	          marker={this.state.activeMarker}
	          visible={this.state.showingInfoWindow}>
							{/*--Sets up the info for each marker using PlaceInfo Component------------------------------*/}
	            <PlaceInfo
	              name={this.state.activeVenue.name || ''}
							/>
	        </InfoWindow>
	      </Map>
			</div>
    );
  }
}

//--Exporting the GoogleApiWrapper with my apiKey-------------------------------------------------------------
export default GoogleApiWrapper(
{
  apiKey: ('AIzaSyBEyx5vBYp7gCKo1QP2knANxfZFnAD-4QM')
})( MapContainer )
