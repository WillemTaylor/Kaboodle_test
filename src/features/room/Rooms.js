import React, { useState } from 'react';
import data from '../../accommodation_availability.json';

export function Rooms(props) {
    const { rooms } = props;
    const [ availability ] = useState(data);

    return (
        <>
            {rooms.map((room) => (
                <div key={room.id} className="rooms-container">
                    <p><b>Name:</b> {room.name}</p>
                    <p><b>Type:</b> {room.type}</p>
                    <p><b>Min Occupancy:</b> {room.min_occupancy}</p>
                    <p><b>Max Occupancy:</b> {room.max_occupancy}</p>
                    {room.price && <p><b>Price:</b>{room.price.price}</p>}
                    <div>
                        {availability.rooms.filter((available) => (
                            available.id === room.id
                        )).map((res) => (
                            <div key={res.id}>
                                <p><b>No. available:</b> {res.available}</p>
                                <p><b>No. sold out:</b> {(res.total) - (res.available)}</p>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </>
    )
}