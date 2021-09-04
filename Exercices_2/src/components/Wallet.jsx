import React, {useState} from "react";

export function Wallet() {
    const [money, setMoney] = useState(0)

    function buy() {
        setMoney(money - 100)
    }

    return <>
        <h2>Your Wallet</h2>
        <p>Amount: {money}$</p>
        <button onClick={buy}>Buy (-100)$</button>
        <br/>
        <br/>
        <br/>
        <br/>
    </>
}