import React, { Component } from 'react';							// Imports React Library
import MapContainer from './components/MapContainer';	// Imports MapContainer Component

import './App.css';																		// Imports the CSS for the app

class App extends Component
{
	placeIdsArray = [
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
		dateFilter: [ 'all' ],
		//--An array of places in Marietta to use for markers on the date map-------------------------------------
		venues: []
  }

	//--Function that gets venue information from the foursquare API and sets the venues state------------------
	componentDidMount( )
	{
		this.placeIdsArray.forEach( (place) =>
		{
			fetch( 'https://api.foursquare.com/v2/venues/'+place.id+'?client_id=SGUQAZSZCYVPMR2KFU1ZGRYJJEKIOJ2M1PLMSTXIGLQSVDYS&client_secret=ZFAZYEHSNGWXJYUABZFTN0F45SSS14GUASWQEOTG240HTQ3M&v=20180323')
			.then( (response) =>
			{
				return response.json( );
			})
			.then( (response) =>
			{
				let cost = '';
				if( response.response.venue.price )
				{
					for( let i = 0; i < response.response.venue.price.tier; i++ )
					{
						cost += response.response.venue.price.currency
					}
				}

				let venue =
				{
					name: response.response.venue.name,
					position: { lat: response.response.venue.location.lat, lng: response.response.venue.location.lng },
					address: response.response.venue.location.address,
					price: cost,
					picture: response.response.venue.bestPhoto,
					category: place.category
				}

				this.setState({
					venues: [...this.state.venues, venue ]
				});

				console.log(venue);
			});
		})
	}

	//--Render function to render the application---------------------------------------------------------------
  render( )
	{
    return (
			<div className='app'>
				{/*--Main Page Header------------------------------------------------------------------------------*/}
				<div className='app-title'>
					<h1>Date Night Marietta</h1>
				</div>
				{/*--Map-------------------------------------------------------------------------------------------*/}
				<div className='map'>
					{/*<MapContainer
						places={this.state.places}
					/>*/}
				</div>
			</div>
  	);
  }
}

export default App;
