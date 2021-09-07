import { useState } from "react";

const Incrementator = () => {

    let [number, setNumber] = useState(0);

    //let number = 0;

    const incrementNumber = () => {
        setNumber( number += 100 );
        //number += 10;
        //alert(number);
    }

    return (
        <section>
            <h3>Incrementator</h3>
            <p>The number: {number}</p>
            <p>{number}</p>
            <p>{number}</p>
            <input onClick={incrementNumber} type="button" value="Inkrementer" />
        </section>
    )
}

export default Incrementator;