import React from "react"
import {getCoffeeList} from "./CoffeeData";
import {CoffeeComponent} from "./CoffeeComponent";

export function CoffeeList() {

    return <>
        <h1>Coffees</h1>
        {getCoffeeList().map((c) => {
            return <CoffeeComponent name={c.name} roast={c.roastLevel} />
        })}
    </>
}

