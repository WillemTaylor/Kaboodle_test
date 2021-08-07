import React from 'react';
import { connect } from 'react-redux';
import { filterType } from './TypeDropdownSlice';

function Type(props) {
    const { type } = props;

    return (
        <li onClick={props.filterType}>
            {type}
        </li>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        filterType: (event) => dispatch(filterType(event.target.innerHTML))
    }
}

export default connect(null, mapDispatchToProps)(Type)