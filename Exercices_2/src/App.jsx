import './App.css';
import React from "react"

import {Wallet} from "./components/Wallet";
import {CoffeeList} from "./components/coffee/CoffeeList";



const App = () => {

    return (
        <div>
            <Wallet />
            <CoffeeList />
        </div>
    )
}


export default App
