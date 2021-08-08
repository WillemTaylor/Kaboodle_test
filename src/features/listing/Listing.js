import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Rooms } from '../room/Rooms';

function Listing(props) {
    const [ showText, hideText ] = useState(false);
    const [ add, minus ] = useState(true);
    const { listing } = props;

    return (
        <>
            {props.type.dropdown.type.length > 0 ? listing.type.name === props.type.dropdown.type && 
            <div className="listing" key={listing.id}>
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
                <div className="rooms">
                    <Rooms rooms={listing.rooms} />
                </div>
                <div className="facilities">{listing.facilities.map((facility) => (
                    <div key={facility.id}>
                        <p onClick={props.filterLabel}>{facility.label}</p>
                    </div>
                ))}</div>
            </div> 
            : 
            <div className="listing" key={listing.id}>
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
                <div className="rooms">
                    <Rooms rooms={listing.rooms} />
                </div>
                <div className="facilities">{listing.facilities.map((facility) => (
                    <div key={facility.id}>
                        <p>{facility.label}</p>
                    </div>
                ))}</div>
            </div>}
        </>
    ) 
}

const mapStateToProps = state => {
    return {
        type: state
    }
}

export default connect(mapStateToProps)(Listing);