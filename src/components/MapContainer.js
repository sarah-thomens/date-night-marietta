import React, { Component } from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

export class MapContainer extends Component
{
	state =
	{
		showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {}
	}

	onMarkerClick = ( props, marker, e ) =>
    this.setState(
		{
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });

  render( )
	{
		const { places } = this.props
		let myColor = '#0000FF';

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
							key={ place.id }
						/>
					)
				)}
				<InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}>
            <div>
              <h1>{this.state.selectedPlace.name}</h1>
            </div>
        </InfoWindow>
      </Map>
    );
  }
}

export default GoogleApiWrapper(
{
  apiKey: ('AIzaSyBEyx5vBYp7gCKo1QP2knANxfZFnAD-4QM')
})( MapContainer )
