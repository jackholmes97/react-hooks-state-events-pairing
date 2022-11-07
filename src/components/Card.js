import React from 'react';

export default function Card({user, comm}) {
    return(
        <>
            <h3>{user}</h3>
            <p>{comm}</p>
        </>
    )
}