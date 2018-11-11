import React, { Component } from 'react';							// Imports React Library
import MapContainer from './components/MapContainer';	// Imports MapContainer Component
import ListView from './components/ListView';					// Imports ListView Component

import './App.css';																		// Imports the CSS for the app

class App extends Component
{
	placeIdsArray =
	[
		{
			id: '4ec08a2b4fc6a7630f4faca7',
			category: 'meal'
		},
		{
			id: '4a8f0d7cf964a520c01320e3',
			category: 'dessert-coffee'
		},
	 	{
			id: '4be413968a8cb713163ec4a0',
			category: 'entertainment'
		}
	];

	//--The state of the markers array for the app--------------------------------------------------------------
  state =
	{
		//--A filter for the part of the date to search for-------------------------------------------------------
		dateFilter: 'all',
		//--An array of places in Marietta to use for markers on the date map-------------------------------------
		venues: [],
		showingInfoWindow: false,	// boolean to tell when info window is open
		activeMarker: {},					// active marker object
		activeVenue: {}						// active venue object
  }

	getVenues( )
	{
		return(
			[
				{
					name: "Earl Smith Strand Theatre",
					id: '4be413968a8cb713163ec4a0',
					position: { lat: 33.953420661252444, lng: -84.54915785942272 },
					address: "117 N Park Sq NE",
					price: "",
					picture: { 	prefix: "https://fastly.4sqi.net/img/general/",
											suffix: "/31766099_wPSTdWjq_RCvlz1DQKuipOcOcR0zkoMupcSOKqaM_Qo.jpg" },
					category: "entertainment"
				},
				{
					name: "Sarah Jean's Ice Cream Shop",
					id: '4a8f0d7cf964a520c01320e3',
					position: { lat: 33.953182894707304, lng: -84.54938906649215 },
					address: "109 N Park Sq NE",
					price: "$",
					picture: { 	prefix: "https://fastly.4sqi.net/img/general/",
											suffix: "/VJCJ4F32CPGPCNREF0L0SVMJA2WUPZJVEG0GBTGKU2SS5JRT.jpg" },
					category: "dessert-coffee"
				},
				{
					name: "Taqueria Tsunami",
					id: '4ec08a2b4fc6a7630f4faca7',
					position: { lat: 33.95231669467316, lng: -84.54972668142698 },
					address: "70 S Park Sq NE",
					price: "$$",
					picture: { 	prefix: "https://fastly.4sqi.net/img/general/",
											suffix: "/38060631_6XzUSBpqesmn_d-NFrMl9FjU0KroDH1OgXBz9GnJq-U.jpg" },
					category: "meal"
				}
			]
		)
	}

	//--Function that gets venue information from the foursquare API and sets the venues state------------------
	componentDidMount( )
	{
		this.setState({
			venues: this.getVenues( )
		});
		// this.placeIdsArray.forEach( (place) =>
		// {
		// 	fetch( 'https://api.foursquare.com/v2/venues/'+place.id+'?client_id=SGUQAZSZCYVPMR2KFU1ZGRYJJEKIOJ2M1PLMSTXIGLQSVDYS&client_secret=ZFAZYEHSNGWXJYUABZFTN0F45SSS14GUASWQEOTG240HTQ3M&v=20180323')
		// 	.then( (response) =>
		// 	{
		// 		return response.json( );
		// 	})
		// 	.then( (response) =>
		// 	{
		// 		let cost = '';
		// 		if( response.response.venue.price )
		// 		{
		// 			for( let i = 0; i < response.response.venue.price.tier; i++ )
		// 			{
		// 				cost += response.response.venue.price.currency
		// 			}
		// 		}
		//
		// 		let venue =
		// 		{
		// 			name: response.response.venue.name,
		// 			id: place.id,
		// 			position: { lat: response.response.venue.location.lat, lng: response.response.venue.location.lng },
		// 			address: response.response.venue.location.address,
		// 			price: cost,
		// 			picture: response.response.venue.bestPhoto,
		// 			category: place.category
		// 		}
		//
		// 		this.setState({
		// 			venues: [...this.state.venues, venue ]
		// 		});
		//
		// 		console.log(response);
		// 	});
		// })
	}

	//--onMarkerClick function that sets the state of the activeMarker and selectedPlace------------------------
	onMarkerClick = ( props, marker, e ) =>
	{
		let myVenue;

		this.state.venues.forEach( (venue) =>
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

	onInfoWindowClose = (props) =>
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

	updateFilter = ( theFilter ) =>
	{
		this.setState({
			dateFilter: theFilter,
			showingInfoWindow: false
		})
	}

	updateActiveVenue = ( theVenue ) =>
	{
		this.setState({
			activeVenue: theVenue,
			showingInfoWindow: true
		})
	}

	//--Render function to render the application---------------------------------------------------------------
  render( )
	{
		let myVenues;

		if( this.state.dateFilter === "all" )
		{
			myVenues = this.state.venues;
		}
		else
		{
			myVenues = this.state.venues.filter( (venue) => venue.category === this.state.dateFilter );
		}

    return (
			<div className='app'>
				{/*--Main Page Header------------------------------------------------------------------------------*/}
				<div className='app-header'>
					<h1>Date Night Marietta</h1>
				</div>
				{/*--ListView--------------------------------------------------------------------------------------*/}
				<div className='list-view'>
					<ListView
						venues={myVenues}
						activeVenue={this.state.activeVenue}
						updateFilter={this.updateFilter}
						updateActiveVenue={this.updateActiveVenue}
					/>
				</div>
				{/*--Map-------------------------------------------------------------------------------------------*/}
				<div className='my-map'>
					<MapContainer
						venues={myVenues}
						showingInfoWindow= {this.state.showingInfoWindow}
						activeMarker= {this.state.activeMarker}
						activeVenue= {this.state.activeVenue}
						onMarkerClick= {this.onMarkerClick}
						onInfoWindowClose= {this.onInfoWindowClose}
					/>
				</div>
			</div>
  	);
  }
}

export default App;
