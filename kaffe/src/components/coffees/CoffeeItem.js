const CoffeeItem = (props) => {
    return (
        <article>
            <h3>{props.name}</h3>
            <img/>
            <p>Syrlighet: {props.roastLevel}</p>
            <p></p>
            <button>Kjøp</button>
        </article>
    )
}

export default CoffeeItem;