import React, { Component } from 'react';																			// Imports React Library
import PropTypes from 'prop-types';																						// Imports PropTypes

export class ListView extends Component
{
	//--PropTypes for ListView Component------------------------------------------------------------------------
	static propTypes =
	{
		venues: PropTypes.array.isRequired,			// venues array
		updateFilter: PropTypes.func.isRequired	// update filter function
	}

	//--Renders the ListView Component--------------------------------------------------------------------------
  render( )
	{
		return (
			<div className="list">
				<h2>Venues</h2>
				<div className="filter-options">
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
				<ul className="venues-list">
					{ this.props.venues.map( (venue) => (
						<div key={venue.id} className="venue">
							<li className={venue.category}>
								<div className="venue-name">
									{venue.name}
								</div>
								<div className="venue-address">
									{venue.address}
								</div>
							</li>
						</div>
					))}
				</ul>
			</div>
		);
	}
}

export default ListView;
