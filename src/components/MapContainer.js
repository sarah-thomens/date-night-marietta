import React, { Component } from 'react';																			// Imports React Library
import PropTypes from 'prop-types';																						// Imports PropTypes
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';	// Imports Map functionality
import PlaceInfo from './PlaceInfo';																					// Imports PlaceInfo Component

export class MapContainer extends Component
{
	//--PropTypes for MapContainer Component--------------------------------------------------------------------
	static propTypes =
	{
		venues: PropTypes.array.isRequired,						// venues array
		showingInfoWindow: PropTypes.bool.isRequired,	// boolean to tell when info window is open
		activeVenue: PropTypes.object.isRequired,			// active venue object
		onMarkerClick: PropTypes.func.isRequired,			// onMarkerClick Function
		onInfoWindowClose: PropTypes.func.isRequired	// onInfoWindowClose function
	}

	//--Renders the MapContainer Component----------------------------------------------------------------------
  render( )
	{
		const {venues, showingInfoWindow, activeVenue, onMarkerClick, onInfoWindowClose} = this.props	//all props

    return (
			<div className="marietta-map" aria-label="map">
				{/*--Map Component to center map on Marietta Square------------------------------------------------*/}
	      <Map
					google={this.props.google}
					zoom={18}
					initialCenter=
					{{
	          	lat: 33.95245160000001,
	            lng: -84.54901659999999
	        }}
					onClick={onInfoWindowClose}
					draggable={false}
					zoomControl={false}
					clickableIcons={false}
					mapTypeControl={false}
					streetViewControl={false}
					fullscreenControl={false}
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
				>
					{/*--Sets default markers on the map-------------------------------------------------------------*/}
					{
						venues.map( (venue) =>
						(
							<Marker
								onClick={onMarkerClick}
								name={venue.id || ''}
								position={venue.position}
								key={venue.id || ''}
							/>
						)
					)}
					{/*--Sets up InfoWindows for each of the markers-------------------------------------------------*/}
					<InfoWindow
	          position={activeVenue.position}
	          visible={showingInfoWindow || false}
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
