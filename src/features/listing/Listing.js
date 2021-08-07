import React, { useState } from 'react';
import { connect } from 'react-redux';

function Listing(props) {
    const [ showText, hideText ] = useState(false);
    const [ add, minus ] = useState(true);
    const { listing } = props;

    if (props.type.dropdown.type.length > 0) {
        return (
            <>
                {listing.type.name === props.type.dropdown.type && <div className="listing" key={listing.id}>
                    <div style={{ margin: '0 10px' }}>
                        <span>
                            <h4>{listing.name}</h4>
                        </span>
                        <h4>{listing.type.name}</h4>
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
                </div>}
            </>
        )   
    } else {
        return (
            <div className="listing" key={listing.id}>
                <div style={{ margin: '0 10px' }}>
                    <span>
                        <h4>{listing.name}</h4>
                        <p>{listing.country.name}</p>
                    </span>
                    <h4>{listing.type.name}</h4>
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
}

const mapStateToProps = state => {
    return {
        type: state
    }
}

export default connect(mapStateToProps)(Listing);