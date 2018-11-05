import React, { Component } from 'react';																			// Imports React Library
import PropTypes from 'prop-types';																						// Imports PropTypes
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';	// Imports Map functionality
import PlaceInfo from './PlaceInfo';																					// Imports PLaceInfo Component

export class MapContainer extends Component
{
	//--PropTypes for MapContainer Component--------------------------------------------------------------------
	static propTypes =
	{
		places: PropTypes.array.isRequired		// places array
	}

	//--The state of the map and its markers--------------------------------------------------------------------
	state =
	{
		showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {}
	}

	//--onMarkerClick function that sets the state of the activeMarker and selectedPlace------------------------
	onMarkerClick = ( props, marker, e ) =>
	{
    this.setState(
		{
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });
	};

	//--Renders the MapContainer Component----------------------------------------------------------------------
  render( )
	{
		const { places } = this.props			// places array prop

    return (
			<div className="marietta-map">
				{/*--Map Component to center map on Marietta Square------------------------------------------------*/}
	      <Map
					google={this.props.google}
					zoom={18}
					initialCenter=
					{{
	          	lat: 33.95275160000001,
	            lng: -84.54961659999999
	        }}
				>
					{/*--Sets default markers on the map-------------------------------------------------------------*/}
					{
						places.map( (place) =>
						(
							<Marker
								onClick={this.onMarkerClick}
								name={ place.name }
								position={ place.latLong }
								key={ place.name }
							/>
						)
					)}
					{/*--Sets up InfoWindows for each of the markers-------------------------------------------------*/}
					<InfoWindow
	          marker={this.state.activeMarker}
	          visible={this.state.showingInfoWindow}>
							{/*--Sets up the info for each marker using PlaceInfo Component------------------------------*/}
	            <PlaceInfo
	              placeId={this.state.selectedPlace.name || ''}
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
