import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
// import { useSelector } from 'react-redux';
import { dropdownSlice } from '../dropdown/TypeDropdownSlice';

function Listing(props) {
    const [ showText, hideText ] = useState(false);
    const [ add, minus ] = useState(true);
    const [ typeDropdown ] = useState(dropdownSlice)
    const { listing } = props;

    useEffect(() => {
        // Update the listings being shown based on type selected in dropdown
        console.log(props)
        // console.log(useSelector(state => state.filterType))
    })

    return (
        <div className="listing" key={listing.id}>
            <div style={{ margin: '0 10px' }}>
                <span>
                    <h4>{listing.name}</h4>
                    <p>{listing.country.name}</p>
                </span>
                {/* <h4>{props.dropdown.value.length < 1 ? listing.type.name : listing.type.name === typeDropdown}</h4> */}
            </div>
            <div className="description" onClick={() => {hideText(!showText); minus(!add)}}>
                <h4>{add ? 'Show more +' : 'Hide -'}</h4>
                {showText && <div dangerouslySetInnerHTML={{__html:listing.description}}></div>}
            </div>
            <div className="facilities">{listing.facilities.map((facility) => (
                <div>
                    <p>{facility.label}</p>
                </div>
            ))}</div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        type: state.dropdown.value
    }
}

export default connect(mapStateToProps)(Listing);