import React from 'react'
import Band from './Band'

function Bands(props) {
    return (
        <ul>
            {props.bands.map(b => <Band band={b}/>)}
        </ul>
    )
}


export default Bands