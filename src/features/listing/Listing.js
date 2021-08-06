import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import expandListing from './ListingSlice';
import data from '../../accommodation.json';


export function ShowListing() {
    const dispatch = useDispatch();
    const [ listings ] = useState(data);
    console.log(listings.accommodations);

    return (
        <ul>
            {listings.accommodations.map((listing) => (
                <div className="listing" key={listing.id} onClick={() => dispatch(expandListing(listing.id))}>
                    <div>
                        <span>
                            <h4>{listing.name}</h4>
                            <p>{listing.country.name}</p>
                        </span>
                        <h4>{listing.type.name}</h4>
                    </div>
                    <div className="description" dangerouslySetInnerHTML={{__html:listing.description}}></div>
                    <div className="facilities">{listing.facilities.map((facility) => (
                        <p>{facility.label}</p>
                    ))}</div>
                </div>
            ))}
        </ul>
    )
}