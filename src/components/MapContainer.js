import React, { Component } from 'react';
import PropTypes from 'prop-types';					// Imports PropTypes capability
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import PlaceInfo from './PlaceInfo';

export class MapContainer extends Component
{
	static propTypes =
	{
		places: PropTypes.array.isRequired
	}

	state =
	{
		showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {}
	}

	onMarkerClick = ( props, marker, e ) =>
	{
    this.setState(
		{
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });
	};

  render( )
	{
		const { places } = this.props


    return (
      <Map
				google={this.props.google}
				zoom={18}
				initialCenter=
				{{
          	lat: 33.95275160000001,
            lng: -84.54961659999999
        }}
			>
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
				<InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}>
            <PlaceInfo
              placeId={this.state.selectedPlace.name || ''}
						/>
        </InfoWindow>
      </Map>
    );
  }
}

export default GoogleApiWrapper(
{
  apiKey: ('AIzaSyBEyx5vBYp7gCKo1QP2knANxfZFnAD-4QM')
})( MapContainer )
