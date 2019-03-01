import React from 'react'

import Square from "./square"

export default function(props) {
    return (
        <div className="square-line">
            <Square color={props.color}/>
            <Square color={props.color}/>
            <Square color={props.color}/>
            <Square color={props.color}/>
            <Square color={props.color}/>
            <Square color={props.color}/>
            <Square color={props.color}/>
            <Square color={props.color}/>
            <Square color={props.color}/>
            <Square color={props.color}/>
        </div>
    )
}