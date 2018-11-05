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
				name: 'ChIJZwsn9SQU9YgRk_Va2drUBtI',
				latLong: { lat: 33.9520968, lng: -84.54975999999999 },
				category: 'meal',
			},
			//--Stockyard Burger & Bones Restaurant-----------------------------------------------------------------
			{
				name: 'ChIJO6nWFiUU9YgRZOihUnrhhic',
				latLong: { lat: 33.9534894, lng: -84.55079619999999 },
				category: 'meal'
			},
			//--Thaicoon & Sushi Bar Restaurant---------------------------------------------------------------------
			{
				name: 'ChIJjRlOFyUU9YgRnjX1IOy8Mg0',
				latLong: { lat: 33.9535084, lng: -84.55093069999999 },
				category: 'meal'
			},
			//--The Marietta Local Restaurant-----------------------------------------------------------------------
			{
				name: 'ChIJU_sogSQU9YgReChPEDj0IQc',
				latLong: { lat: 33.9521314, lng: -84.5489214 },
				category: 'meal'
			},
			//--Shillings on the Square Restaurant------------------------------------------------------------------
			{
				name: 'ChIJ7Z9d6SQU9YgRDfaqhA6eFIc',
				latLong: { lat: 33.9533484, lng: -84.5500909 },
				category: 'meal'
			},
			//--Sarah Jean's Ice Cream------------------------------------------------------------------------------
			{
				name: 'ChIJAdhzliQU9YgRRJssulC5WqY',
				latLong: { lat: 33.9533606, lng: -84.5493699 },
				category: 'dessert-coffee'
			},
			//--Rocket Fizz Soda Shop & Candy Shop------------------------------------------------------------------
			{
				name: 'ChIJFxLxYSQU9YgROZNmHSMBSA8',
				latLong: { lat: 33.9521419, lng: -84.54943129999999 },
				category: 'dessert-coffee'
			},
			//--Cool Beans Coffee Roasters--------------------------------------------------------------------------
			{
				name: 'ChIJY6T74yQU9YgRxJGHa_pLOcE',
				latLong: { lat: 33.9531584, lng: -84.55075900000001 },
				category: 'dessert-coffee'
			},
			//--Sugar Cakes Patisserie & Bistro---------------------------------------------------------------------
			{
				name: 'ChIJs6REviQU9YgRZlaqoeZnN2k',
				latLong: { lat: 33.9533505, lng: -84.5495303 },
				category: 'dessert-coffee'
			},
			//--Tiny Bubbles Tea Bar and Gift Shop------------------------------------------------------------------
			{
				name: 'ChIJTbcY8SQU9YgRlcI2_opw3TI',
				latLong: { lat: 33.9525309, lng: -84.55036509999999 },
				category: 'dessert-coffee'
			},
			//--Earl and Rachel Smith Strand Theatre----------------------------------------------------------------
			{
				name: 'ChIJQasflyQU9YgRUbJHlgaQMqk',
				latLong: { lat: 33.95357000000001, lng: -84.54916799999999 },
				category: 'entertainment'
			},
			//--Marietta’s NEW Theatre in the Square----------------------------------------------------------------
			{
				name: 'ChIJJ2u7-CQU9YgR7XOPEKYPufA',
				latLong: { lat: 33.9520087, lng: -84.5505301 },
				category: 'entertainment'
			},
			//--Glover Park-----------------------------------------------------------------------------------------
			{
				name: 'ChIJ_bp36yQU9YgRsgrtQmbv7ig',
				latLong: { lat: 33.952769, lng: -84.54965869999999 },
				category: 'entertainment'
			},
			//--Marietta/Cobb Museum of Art-------------------------------------------------------------------------
			{
				name: 'ChIJXTWweiQU9YgRcIGMwQclZUs',
				latLong: { lat: 33.9513585, lng: -84.54932699999999 },
				category: 'entertainment'
			},
			//--Just Kiln' Time-------------------------------------------------------------------------------------
			{
				name: 'ChIJow1HeSQU9YgRMBVHbZ8iSKc',
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
