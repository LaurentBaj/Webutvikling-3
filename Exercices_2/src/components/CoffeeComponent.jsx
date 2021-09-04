import React from "react";


export function CoffeeComponent(prop) {

    return <>
        <h3>{prop.name}</h3>
        <p>Syrlighet {prop.roast}</p>
        <button>Kjøp</button>
        <br/>
        <br/>
        <br/>
    </>
}

