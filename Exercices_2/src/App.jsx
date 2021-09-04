import './App.css';
import React from "react"

import {CoffeeComponent} from "./components/CoffeeComponent";
import {Wallet} from "./components/Wallet";



const App = () => {

    return (

        <div>
            <Wallet />
            <CoffeeComponent name={"Blue Java"} roast={"Lightly"} class={".coffeeComponent"} />
            <CoffeeComponent name={"Geisha"} roast={"Roasted"} class={".coffeeComponent"}/>
            <CoffeeComponent name={"Tropical"} roast={"Strongly"} class={".coffeeComponent"} />

        </div>
    )
}


export default App
