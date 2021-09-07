import CoffeeItem from "./CoffeeItem";
import { getAll as getAllCoffees } from './coffee-data'

const CoffeeList = () => {   

    const createCoffeeList = () => {
        const coffees = getAllCoffees().map( coffee => {
            return <CoffeeItem name={coffee.name} roastLevel={coffee.roastLevel}/>
        }  )
        return coffees;
    }

    return (
        <section>
            <header>
                <h3>Kaffer</h3>
            </header>
            <section>
                { createCoffeeList() }
            </section>
        </section>
    )
}

export default CoffeeList;