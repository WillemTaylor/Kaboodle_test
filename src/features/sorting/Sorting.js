import React, { useState, useRef } from 'react';
import { connect } from 'react-redux';
import { filterSort } from './SortingSlice';

function Sorting(props) {
    const sortRef = useRef(null);
    const [ isActive, setIsActive ] = useState(false);

    return (
        <div className="menu-container">
        <button onClick={() => setIsActive(!isActive)} className="menu-trigger">
            <span>Sort</span>
        </button>
        <nav ref={sortRef} className={`menu ${isActive ? 'active' : 'inactive'}`}>
            <ul>
                <li onClick={props.filterSort}>
                    Sort asc &#8593;
                </li>
                <li onClick={props.filterSort}>
                    Sort desc &#8595;
                </li>
            </ul>
        </nav>
    </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        filterSort: (event) => dispatch(filterSort(event.target.innerHTML))
    }
}

export default connect(null, mapDispatchToProps)(Sorting);