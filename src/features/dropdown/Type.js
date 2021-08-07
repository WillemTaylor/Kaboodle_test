import React from 'react';
import { connect, useDispatch } from 'react-redux';
import { filterType } from './TypeDropdownSlice';

function Type(props) {
    const dispatch = useDispatch();
    const { type } = props;

    return (
        <li onClick={props.filterType}>
            {type}
        </li>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        filterType: () => dispatch(filterType())
    }
}

export default connect(null, mapDispatchToProps)(Type)