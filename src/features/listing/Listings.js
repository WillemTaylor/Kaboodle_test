import React, { useState } from 'react';
import data from '../../accommodation.json';
import Listing from './Listing';

function order(a, b) {
    return a.props.listing.name < b.props.listing.name ? -1 : (a.props.listing.name > b.props.listing.name ? 1 : 0);
}

export function ShowListing() {
    const [ listings ] = useState(data);

    return (
        <ul>
            {listings.accommodations.map((listing) => (
                <Listing key={listing.id} id={listing.id} listing={listing} />
            )).sort(order)}
        </ul>
    )
}