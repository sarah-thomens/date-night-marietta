import React, { Component } from 'react';
import MapContainer from './components/MapContainer';

import './App.css';

class App extends Component
{

	//--The state of the markers array for the app--------------------------------------------------------------
  state =
	{
		dateFilter: [ 'all' ],
		places:
		[
			{
				name: 'ChIJZwsn9SQU9YgRk_Va2drUBtI',
				latLong: { lat: 33.9520968, lng: -84.54975999999999 },
				category: 'meal',
			},
			{
				name: 'ChIJO6nWFiUU9YgRZOihUnrhhic',
				latLong: { lat: 33.9534894, lng: -84.55079619999999 },
				category: 'meal'
			},
			{
				name: 'ChIJjRlOFyUU9YgRnjX1IOy8Mg0',
				latLong: { lat: 33.9535084, lng: -84.55093069999999 },
				category: 'meal'
			},
			{
				name: 'ChIJU_sogSQU9YgReChPEDj0IQc',
				latLong: { lat: 33.9521314, lng: -84.5489214 },
				category: 'meal'
			},
			{
				name: 'ChIJ7Z9d6SQU9YgRDfaqhA6eFIc',
				latLong: { lat: 33.9533484, lng: -84.5500909 },
				category: 'meal'
			},
			{
				name: 'ChIJAdhzliQU9YgRRJssulC5WqY',
				latLong: { lat: 33.9533606, lng: -84.5493699 },
				category: 'dessert-coffee'
			},
			{
				name: 'ChIJFxLxYSQU9YgROZNmHSMBSA8',
				latLong: { lat: 33.9521419, lng: -84.54943129999999 },
				category: 'dessert-coffee'
			},
			{
				name: 'ChIJY6T74yQU9YgRxJGHa_pLOcE',
				latLong: { lat: 33.9531584, lng: -84.55075900000001 },
				category: 'dessert-coffee'
			},
			{
				name: 'ChIJs6REviQU9YgRZlaqoeZnN2k',
				latLong: { lat: 33.9533505, lng: -84.5495303 },
				category: 'dessert-coffee'
			},
			{
				name: 'ChIJTbcY8SQU9YgRlcI2_opw3TI',
				latLong: { lat: 33.9525309, lng: -84.55036509999999 },
				category: 'dessert-coffee'
			},
			{
				name: 'ChIJQasflyQU9YgRUbJHlgaQMqk',
				latLong: { lat: 33.95357000000001, lng: -84.54916799999999 },
				category: 'entertainment'
			},
			{
				name: 'ChIJJ2u7-CQU9YgR7XOPEKYPufA',
				latLong: { lat: 33.9520087, lng: -84.5505301 },
				category: 'entertainment'
			},
			{
				name: 'ChIJ_bp36yQU9YgRsgrtQmbv7ig',
				latLong: { lat: 33.952769, lng: -84.54965869999999 },
				category: 'entertainment'
			},
			{
				name: 'ChIJXTWweiQU9YgRcIGMwQclZUs',
				latLong: { lat: 33.9513585, lng: -84.54932699999999 },
				category: 'entertainment'
			},
			{
				name: 'ChIJow1HeSQU9YgRMBVHbZ8iSKc',
				latLong: { lat: 33.9516177, lng: -84.5488199 },
				category: 'entertainment'
			}
		]
  }

  render( )
	{
    return (
			<div className='app'>
				<div className='app-title'>
					<h1>Date Night Marietta</h1>
				</div>
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
