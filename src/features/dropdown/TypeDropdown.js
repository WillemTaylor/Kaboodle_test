import React, { useState, useRef } from 'react';
import Type from './Type';
import data from '../../accommodation.json';

function onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
}

export function TypeDropdown() {
    const dropdownRef = useRef(null);
    const [ listings ] = useState(data);
    const [ isActive, setIsActive ] = useState(false);
    const types = (listings.accommodations.map((listing) => listing.type.name)).filter(onlyUnique);

    return (
        <div className="menu-container">
            <button onClick={() => setIsActive(!isActive)} className="menu-trigger">
                <span>Type</span>
            </button>
            <nav ref={dropdownRef} className={`menu ${isActive ? 'active' : 'inactive'}`}>
                <ul>
                    {types.map((type) => (
                        <Type key={type} id={type} type={type} />
                    ))}
                </ul>
            </nav>
        </div>
    )
}