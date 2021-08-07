import React, { useState } from 'react';
import data from '../../accommodation.json';
import Listing from './Listing';


export function ShowListing() {
    const [ listings ] = useState(data);

    return (
        <ul>
            {listings.accommodations.map((listing) => (
                <Listing key={listing.id} id={listing.id} listing={listing} />
            ))}
        </ul>
    )
}