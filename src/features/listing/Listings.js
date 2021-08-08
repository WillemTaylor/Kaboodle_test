import React, { useState } from 'react';
import data from '../../accommodation.json';
import Listing from './Listing';
import { connect } from 'react-redux';


function ShowListing(props) {
    const [ listings ] = useState(data);
    
    function order(a, b) {
        if (props.type.sorting.type.split(' ')[1] === 'asc') {
            return a.props.children.props.listing.name < b.props.children.props.listing.name ? -1 : (a.props.children.props.listing.name > b.props.children.props.listing.name ? 1 : 0);
        } else {
            return b.props.children.props.listing.name < a.props.children.props.listing.name ? -1 : (b.props.children.props.listing.name > a.props.children.props.listing.name ? 1 : 0);
        }
    }

    return (
        <ul>
            {listings.accommodations.map((listing) => (
                <div key={listing.id}>
                    <Listing key={listing.id} id={listing.id} listing={listing} />
                </div>
            )).sort(order)}
        </ul>
    )
}

const mapStateToProps = state => {
    return {
        type: state
    }
}

export default connect(mapStateToProps)(ShowListing);