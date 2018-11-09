import React, { Component } from 'react';																			// Imports React Library
import PropTypes from 'prop-types';																						// Imports PropTypes

export class ListView extends Component
{
	//--PropTypes for ListView Component------------------------------------------------------------------------
	static propTypes =
	{
		venues: PropTypes.array.isRequired		// venues array
	}

	//--Renders the VenueFilter Component-----------------------------------------------------------------------
  render( )
	{
		return (
			<div className="list">
				<h2>Venues</h2>
				<ul className="venues-list">
					{ this.props.venues.map( (venue) => (
						<li key={venue.id} className={venue.category}>
							<div className="venue-name">
								{venue.name}
							</div>
							<div className="venue-address">
								{venue.address}
								<span className="venue-cost"> - {venue.price}</span>
							</div>
						</li>
					))}
				</ul>
			</div>
		);
	}
}

export default ListView;
