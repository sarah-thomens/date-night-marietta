import React, { Component } from 'react';							// Imports React Library
import MapContainer from './components/MapContainer';	// Imports MapContainer Component
import ListView from './components/ListView';					// Imports ListView Component

import './App.css';																		// Imports the CSS for the app

class App extends Component
{
	//--An Array containing the id and category of Marietta Venues----------------------------------------------
	placeIdsArray =
	[
		//--Sugar Cakes Patisserie & Bistro---------------------------------------------------------------------
		{
			id: '4b64429ff964a520f3a62ae3',
			category: 'dessert'
		},
		//--Taqueria Tsunami Object-------------------------------------------------------------------------------
		{
			id: '4ec08a2b4fc6a7630f4faca7',
			category: 'meal'
		},
		//--Sarah Jean's Ice Cream Object-------------------------------------------------------------------------
		{
			id: '4a8f0d7cf964a520c01320e3',
			category: 'dessert'
		},
		//--Glover Park-----------------------------------------------------------------------------------------
		{
			id: '4bd465bf29eb9c74577591e1',
			category: 'fun'
		},
		//--Stockyard Burger & Bones Restaurant-----------------------------------------------------------------
		{
			id: '543dde90498e97d6322d9d0f',
			category: 'meal'
		},
		//--Earl Smith Strand Theatre Object----------------------------------------------------------------------
	 	{
			id: '4be413968a8cb713163ec4a0',
			category: 'fun'
		}
	];

	//--The states of the app-----------------------------------------------------------------------------------
  state =
	{
		venues: [], 							// array of venues in Marietta
		activeVenue: {},					// active venue object
		dateFilter: 'all',				// category filter for the date venues
		showingInfoWindow: false	// boolean to tell when info window is open
  };

	//--This function was designed to test app data without using foursquare quota------------------------------
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
					category: "fun"
				},
				{
					name: "Sarah Jean's Ice Cream Shop",
					id: '4a8f0d7cf964a520c01320e3',
					position: { lat: 33.953182894707304, lng: -84.54938906649215 },
					address: "109 N Park Sq NE",
					price: "$",
					picture: { 	prefix: "https://fastly.4sqi.net/img/general/",
											suffix: "/VJCJ4F32CPGPCNREF0L0SVMJA2WUPZJVEG0GBTGKU2SS5JRT.jpg" },
					category: "dessert"
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
		);
	}

	//----------------------------------------------------------------------------------------------------------
	// componentDidMount Function
	//
	// Gets venue information from the foursquare API and sets the venues state
	//----------------------------------------------------------------------------------------------------------
	componentDidMount( )
	{
		//--This code gets uncommented when not using foursquare--------------------------------------------------
		// this.setState({
		// 	venues: this.getVenues( )
		// });
		//--Foreach venue in Marietta...(this entire block should be commented out to use without foursquare)-----
		this.placeIdsArray.forEach( (place) =>
		{
			//--Fetch the venue information from FourSquare API-----------------------------------------------------
			fetch( 'https://api.foursquare.com/v2/venues/'+place.id+'?client_id=SGUQAZSZCYVPMR2KFU1ZGRYJJEKIOJ2M1PLMSTXIGLQSVDYS&client_secret=ZFAZYEHSNGWXJYUABZFTN0F45SSS14GUASWQEOTG240HTQ3M&v=20180323')
			//--Turn information into a json file-------------------------------------------------------------------
			.then( (response) =>
			{
				return response.json( );
			})
			.then( (response) =>
			{
				let cost = '';		// cost variable for venue pricing

				//--if there is a price on the venue...---------------------------------------------------------------
				if( response.response.venue.price )
				{
					//--set the cost to dollar signs depending on tier level--------------------------------------------
					for( let i = 0; i < response.response.venue.price.tier; i++ )
					{
						cost += response.response.venue.price.currency;
					}
				}

				//--Set the venue information to a venue variable-----------------------------------------------------
				let venue =
				{
					name: response.response.venue.name,
					id: place.id,
					position: { lat: response.response.venue.location.lat, lng: response.response.venue.location.lng },
					address: response.response.venue.location.address,
					price: cost,
					picture: response.response.venue.bestPhoto,
					category: place.category
				};

				//--Add the new venue to the venues state-------------------------------------------------------------
				this.setState({
					venues: [...this.state.venues, venue ]
				});
			})
			//--If an error occurs, let the user know---------------------------------------------------------------
			.catch( e => { alert("Foursquare Loading Error: \n" + e); } )
		});
	}

	//----------------------------------------------------------------------------------------------------------
	// onMarkerClick function
	//
	// Sets the state of the activeVenue and ShowingInfoWindow.
	//----------------------------------------------------------------------------------------------------------
	onMarkerClick = ( props, marker, e ) =>
	{
		let myVenue;		// variable to hold the venue accessed by the marker click

		//--foreach venue in venues state...----------------------------------------------------------------------
		this.state.venues.forEach( (venue) =>
		{
			//--if the venue id equals the marker's name...---------------------------------------------------------
			if( venue.id === marker.name )
			{
				//--set the venue to myVenue variable-----------------------------------------------------------------
				myVenue = venue;
			}
		})

		//--If myVenue is not null...-----------------------------------------------------------------------------
		if( myVenue !== undefined )
		{
			//--Set states of activeVenue and ShowingInfoWindow-----------------------------------------------------
			this.setState(
			{
				activeVenue: myVenue,
				showingInfoWindow: true
			});
		}
		//--Else set a venue stating no information was found at the map center-----------------------------------
		else
		{
			this.setState(
			{
				activeVenue: { name: "No venue information found.",
											 id: "",
											 position: { lat: 33.95245160000001, lng: -84.54901659999999 },
											 address: "",
											 category: "all"},
				showingInfoWindow: true
			});
		}
	};

	//----------------------------------------------------------------------------------------------------------
	// onInfoWindowClose Function
	//
	// Closes the info window function by setting the showingInfoWindow boolean to false and the activeVenue
	// to an empty object.
	//----------------------------------------------------------------------------------------------------------
	onInfoWindowClose = (props) =>
	{
		//--If the Info Window is showing...----------------------------------------------------------------------
		if( this.state.showingInfoWindow )
		{
			//--Set the states to close the info window and clear the active venue----------------------------------
			this.setState(
			{
				showingInfoWindow: false,
				activeVenue: {}
			});
		}
	};

	//----------------------------------------------------------------------------------------------------------
	// updateFilter Function
	//
	// Updates the filter state to the passed filter option and closes the info window if needed.
	//----------------------------------------------------------------------------------------------------------
	updateFilter = ( theFilter ) =>
	{
		//--If theFilter has content, set the dateFilter state----------------------------------------------------
		if( theFilter !== '' )
		{
			this.setState({
				dateFilter: theFilter,
				showingInfoWindow: false,
				activeVenue: {}
			});
		}
		//--If theFilter does not have content, set it to the default, "all"--------------------------------------
		else
		{
			this.setState({
				dateFilter: "all"
			});
		}
	}

	//----------------------------------------------------------------------------------------------------------
	// updateActiveVenue Function
	//
	// Updates the activeVenue state to the current venue being viewed by the list view.
	//----------------------------------------------------------------------------------------------------------
	updateActiveVenue = ( theVenue ) =>
	{
		//--If theVenue is not an empty object, set the state of the activeVenue and open the info window---------
		if( theVenue !== undefined )
		{
			this.setState({
				activeVenue: theVenue,
				showingInfoWindow: true
			});
		}
	}

	//--Render function to render the application---------------------------------------------------------------
  render( )
	{
		let myVenues;		// variable to hold filtered venues array

		//--if the dateFilter is set to all, set myVenues to the state--------------------------------------------
		if( this.state.dateFilter === "all" )
		{
			myVenues = this.state.venues;
		}
		//--if the dateFilter is set to anything else, filter the venues array with that state--------------------
		else
		{
			myVenues = this.state.venues.filter( (venue) => venue.category === this.state.dateFilter );
		}

    return (
			<div className='app'>
				{/*--Main Page Header------------------------------------------------------------------------------*/}
				<header className='app-header'>
					Date Night Marietta
				</header>
				{/*--ListView--------------------------------------------------------------------------------------*/}
				<div className='list-view'>
					<ListView
						venues={myVenues}
						activeVenue={this.state.activeVenue || {}}
						dateFilter={this.state.dateFilter || ""}
						updateFilter={this.updateFilter}
						updateActiveVenue={this.updateActiveVenue}
					/>
				</div>
				{/*--Map-------------------------------------------------------------------------------------------*/}
				<MapContainer
					venues={myVenues}
					showingInfoWindow= {this.state.showingInfoWindow || false}
					activeVenue= {this.state.activeVenue || {}}
					onMarkerClick= {this.onMarkerClick}
					onInfoWindowClose= {this.onInfoWindowClose}
				/>
			</div>
  	);
  }
}

export default App;
