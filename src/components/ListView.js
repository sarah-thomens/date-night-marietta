import React, { Component } from 'react';																			// Imports React Library
import PropTypes from 'prop-types';																						// Imports PropTypes

export class ListView extends Component
{
	//--PropTypes for ListView Component------------------------------------------------------------------------
	static propTypes =
	{
		venues: PropTypes.array.isRequired,						// venues array
		activeVenue: PropTypes.object.isRequired,			// active venue object
		updateFilter: PropTypes.func.isRequired,			// update filter function
		updateActiveVenue: PropTypes.func.isRequired	// update active venue function
	}

	//--Renders the ListView Component--------------------------------------------------------------------------
  render( )
	{
		return (
			<div className="list">
				<h2>Venues</h2>
				<div className="filter-options" role="group" aria-label="Filter Buttons">
					<button
						className="all"
						onClick= {() => this.props.updateFilter("all")}
					>
						All
					</button>
					<button
						className="meal"
						onClick= {() => this.props.updateFilter("meal")}
					>
						Food
					</button>
					<button
						className="dessert-coffee"
						onClick= {() => this.props.updateFilter("dessert-coffee")}
					>
						Sweets
					</button>
					<button
						className="entertainment"
						onClick= {() => this.props.updateFilter("entertainment")}
					>
						Fun
					</button>
				</div>
				<ul className="venues-list" role="group" aria-label="Venue List">
					{ this.props.venues.map( (venue) =>
						{
							let activeClass = venue.category;

							if( this.props.activeVenue.id && venue.id === this.props.activeVenue.id )
							{
								activeClass += " active-list-item";
							}

							return (
								<div key={venue.id} className="venue">
								<li
									className={activeClass}
									onClick= {() => this.props.updateActiveVenue(venue)}
									tabIndex={0}>
									<div className="venue-name">
										{venue.name}
									</div>
									<div className="venue-address">
										{venue.address}
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
