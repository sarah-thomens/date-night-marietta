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
    activeVenue: {}
	}

	//--onMarkerClick function that sets the state of the activeMarker and selectedPlace------------------------
	onMarkerClick = ( props, marker, e ) =>
	{
		fetch( 'https://api.foursquare.com/v2/venues/'+marker.name+'?client_id=SGUQAZSZCYVPMR2KFU1ZGRYJJEKIOJ2M1PLMSTXIGLQSVDYS&client_secret=ZFAZYEHSNGWXJYUABZFTN0F45SSS14GUASWQEOTG240HTQ3M&v=20180323')
			.then( (response) =>
			{
				return response.json( );
			})
			.then( (response) =>
			{
				this.setState(
				{
		      activeVenue: response.response.venue,
		      activeMarker: marker,
		      showingInfoWindow: true
		    });
			});
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
