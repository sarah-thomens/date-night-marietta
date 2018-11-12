import React, { Component } from 'react';																			// Imports React Library
import PropTypes from 'prop-types';																						// Imports PropTypes
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';	// Imports Map functionality
import PlaceInfo from './PlaceInfo';																					// Imports PLaceInfo Component

export class MapContainer extends Component
{
	//--PropTypes for MapContainer Component--------------------------------------------------------------------
	static propTypes =
	{
		venues: PropTypes.array.isRequired,						// venues array
		showingInfoWindow: PropTypes.bool.isRequired,	// boolean to tell when info window is open
		activeMarker: PropTypes.object.isRequired,		// active marker object
		activeVenue: PropTypes.object.isRequired,			// active venue object
		onMarkerClick: PropTypes.func.isRequired,			// on Marker Click Function
		onInfoWindowClose: PropTypes.func.isRequired	// on InfoWindow Closing function
	}

	//--Renders the MapContainer Component----------------------------------------------------------------------
  render( )
	{
		const { venues, showingInfoWindow, activeMarker, activeVenue, onMarkerClick, onInfoWindowClose } = this.props			// places array prop

    return (
			<div className="marietta-map" aria-label="map">
				{/*--Map Component to center map on Marietta Square------------------------------------------------*/}
	      <Map
					google={this.props.google}
					zoom={18}
					draggable={false}
					zoomControl={false}
					clickableIcons={false}
					mapTypeControl={false}
					streetViewControl={false}
					fullScreenControl={false}
					scaleControl={false}
					styles={[
						{
							featureType: "poi",
							elementType:"labels",
							stylers: [
								{ visibility: "off" }
							]
						}
					]}
					initialCenter=
					{{
	          	lat: 33.95245160000001,
	            lng: -84.54901659999999
	        }}
					onClick={onInfoWindowClose}
				>
					{/*--Sets default markers on the map-------------------------------------------------------------*/}
					{
						venues.map( (venue) =>
						(
							<Marker
								onClick={onMarkerClick}
								name={ venue.id }
								position={ venue.position }
								key={ venue.id }
							/>
						)
					)}
					{/*--Sets up InfoWindows for each of the markers-------------------------------------------------*/}
					<InfoWindow
	          position={activeVenue.position}
	          visible={showingInfoWindow}
						onClose={onInfoWindowClose}>
							{/*--Sets up the info for each marker using PlaceInfo Component------------------------------*/}
	            <PlaceInfo
	              venue={activeVenue || {}}
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
