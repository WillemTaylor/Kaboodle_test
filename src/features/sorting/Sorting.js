import React, { useState, useRef } from 'react';
import Sort from './Sort';
import data from '../../accommodation.json';

export function Sorting() {
    const [ listings ] = useState(data);
    const [ asc, desc ] = useState(true);

    return (
        <div onClick={() => {desc(!asc)}}>
            <h5>{asc ? 'Ascend' : 'Descend'}</h5>
        </div>
    )
}