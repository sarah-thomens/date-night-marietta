import React, { Component } from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

export class MapContainer extends Component
{
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
						name={ place.name }
						position={ place.latLong }
						key={ place.id }
						style={{ color: myColor }}
					/>
				)
			)}
      </Map>
    );
  }
}

export default GoogleApiWrapper(
{
  apiKey: ('AIzaSyBEyx5vBYp7gCKo1QP2knANxfZFnAD-4QM')
})( MapContainer )
