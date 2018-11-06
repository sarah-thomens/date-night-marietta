import React, { Component } from 'react';							// Imports React Library
import MapContainer from './components/MapContainer';	// Imports MapContainer Component

import './App.css';																		// Imports the CSS for the app

class App extends Component
{

	//--The state of the markers array for the app--------------------------------------------------------------
  state =
	{
		//--A filter for the part of the date to search for-------------------------------------------------------
		dateFilter: [ 'all' ],
		//--An array of places in Marietta to use for markers on the date map-------------------------------------
		places:
		[
			//--Taqueria Tsunami Restaurant-------------------------------------------------------------------------
			{
				name: '4ec08a2b4fc6a7630f4faca7',
				latLong: { lat: 33.9520968, lng: -84.54975999999999 },
				category: 'meal',
			},
			//--Stockyard Burger & Bones Restaurant-----------------------------------------------------------------
			{
				name: '543dde90498e97d6322d9d0f',
				latLong: { lat: 33.9534894, lng: -84.55079619999999 },
				category: 'meal'
			},
			//--Thaicoon & Sushi Bar Restaurant---------------------------------------------------------------------
			{
				name: '4a871abbf964a520950220e3',
				latLong: { lat: 33.9535084, lng: -84.55093069999999 },
				category: 'meal'
			},
			//--The Marietta Local Restaurant-----------------------------------------------------------------------
			{
				name: '53aabf4e498ecfdaecb1f2cb',
				latLong: { lat: 33.9521314, lng: -84.5489214 },
				category: 'meal'
			},
			//--Shillings on the Square Restaurant------------------------------------------------------------------
			{
				name: '40e0b100f964a52064071fe3',
				latLong: { lat: 33.9533484, lng: -84.5500909 },
				category: 'meal'
			},
			//--Sarah Jean's Ice Cream------------------------------------------------------------------------------
			{
				name: '4a8f0d7cf964a520c01320e3',
				latLong: { lat: 33.9533606, lng: -84.5493699 },
				category: 'dessert-coffee'
			},
			//--Rocket Fizz Soda Shop & Candy Shop------------------------------------------------------------------
			{
				name: '56fed8c8498eb1b0f644a25f',
				latLong: { lat: 33.9521419, lng: -84.54943129999999 },
				category: 'dessert-coffee'
			},
			//--Cool Beans Coffee Roasters--------------------------------------------------------------------------
			{
				name: '4ab3820df964a520b36d20e3',
				latLong: { lat: 33.9531584, lng: -84.55075900000001 },
				category: 'dessert-coffee'
			},
			//--Sugar Cakes Patisserie & Bistro---------------------------------------------------------------------
			{
				name: '4b64429ff964a520f3a62ae3',
				latLong: { lat: 33.9533505, lng: -84.5495303 },
				category: 'dessert-coffee'
			},
			//--Tiny Bubbles Tea Bar and Gift Shop------------------------------------------------------------------
			{
				name: '54d17e47498e31dad9afc03e',
				latLong: { lat: 33.9525309, lng: -84.55036509999999 },
				category: 'dessert-coffee'
			},
			//--Earl and Rachel Smith Strand Theatre----------------------------------------------------------------
			{
				name: '4be413968a8cb713163ec4a0',
				latLong: { lat: 33.95357000000001, lng: -84.54916799999999 },
				category: 'entertainment'
			},
			//--Marietta’s NEW Theatre in the Square----------------------------------------------------------------
			{
				name: '4b93dceef964a520e85534e3',
				latLong: { lat: 33.9520087, lng: -84.5505301 },
				category: 'entertainment'
			},
			//--Glover Park-----------------------------------------------------------------------------------------
			{
				name: '4bd465bf29eb9c74577591e1',
				latLong: { lat: 33.952769, lng: -84.54965869999999 },
				category: 'entertainment'
			},
			//--Marietta/Cobb Museum of Art-------------------------------------------------------------------------
			{
				name: '4b6b10f2f964a5206ff02be3',
				latLong: { lat: 33.9513585, lng: -84.54932699999999 },
				category: 'entertainment'
			},
			//--Just Kiln' Time-------------------------------------------------------------------------------------
			{
				name: '4b6e3003f964a52078b02ce3',
				latLong: { lat: 33.9516177, lng: -84.5488199 },
				category: 'entertainment'
			}
		]
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
					<MapContainer
						places={this.state.places}
					/>
				</div>
			</div>
    );
  }
}

export default App;
