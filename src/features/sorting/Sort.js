import React from 'react';
import { connect } from 'react-redux';

export default function Sort(props) {
    const { sort } = props;

    return (
        <li onClick={props.filterSort}>
            {sort}
        </li>
    )
}

// const mapDispatchToProps = (dispatch) => {
//     return {
//         filterSort: (event) => dispatch(filterSort(event.target.innerHTML))
//     }
// }

// export default connect(null, mapDispatchToProps)(Sort)