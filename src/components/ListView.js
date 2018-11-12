import React, { Component } from 'react';					// Imports React Library
import PropTypes from 'prop-types';								// Imports PropTypes

export class ListView extends Component
{
	//--PropTypes for ListView Component------------------------------------------------------------------------
	static propTypes =
	{
		venues: PropTypes.array.isRequired,						// venues array
		activeVenue: PropTypes.object.isRequired,			// active venue object
		dateFilter: PropTypes.string.isRequired,			// current date filter category
		updateFilter: PropTypes.func.isRequired,			// updateFilter function
		updateActiveVenue: PropTypes.func.isRequired	// updateActiveVenue function
	}

	//--Renders the ListView Component--------------------------------------------------------------------------
  render( )
	{
		const { venues, activeVenue, dateFilter, updateFilter, updateActiveVenue } = this.props	//all props

		return (
			<div className="list">
				{/*--Venues List Header----------------------------------------------------------------------------*/}
				<h2 className="list-title">Venues</h2>
				{/*--Date Category Filter Option Buttons-----------------------------------------------------------*/}
				<div className="filter-options" role="group" aria-label="Filter Buttons">
					{/*--All Filter Option Button--------------------------------------------------------------------*/}
					<button
						className={( dateFilter === "all" ) ? "all active-filter-button" : "all"}
						onClick= {() => updateFilter("all")}
					>
						All
					</button>
					{/*--Meal Filter Option Button-------------------------------------------------------------------*/}
					<button
						className={( dateFilter === "meal" ) ? "meal active-filter-button" : "meal"}
						onClick= {() => updateFilter("meal")}
					>
						Food
					</button>
					{/*--Dessert & Coffee Filter Option Button-------------------------------------------------------*/}
					<button
						className={( dateFilter === "dessert-coffee" ) ? "dessert-coffee active-filter-button" : "dessert-coffee"}
						onClick= {() => updateFilter("dessert-coffee")}
					>
						Dessert & Coffee
					</button>
					{/*--Entertainment Filter Option Button----------------------------------------------------------*/}
					<button
						className={( dateFilter === "entertainment" ) ? "entertainment active-filter-button" : "entertainment"}
						onClick= {() => updateFilter("entertainment")}
					>
						Entertainment
					</button>
				</div>
				{/*--List of Venues--------------------------------------------------------------------------------*/}
				<ul className="venues-list" role="group" aria-label="Venue List">
					{ venues.map( (venue) =>
						{
							let activeClass = venue.category;

							if( activeVenue.id && venue.id === activeVenue.id )
							{
								activeClass += " active-list-item";
							}

							return (
								<div key={venue.id} className="venue">
								<li
									className={activeClass}
									onClick= {() => updateActiveVenue(venue)}
									onFocus= {() => updateActiveVenue(venue)}
									onBlur= {() => updateActiveVenue({ })}
									tabIndex={0}>
									<div className="venue-name">
										{venue.name || ""}
									</div>
									<div className="venue-address">
										{venue.address || ""}
									</div>
								</li>
							</div>
						)
					})}
				</ul>
			</div>
		);
	}
}

export default ListView;
