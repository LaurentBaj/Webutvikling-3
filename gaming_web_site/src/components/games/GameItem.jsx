import React from "react";



export function GameItem(prop) {
    return <>
        <li key={prop.key}>{prop.name}</li>
    </>
}