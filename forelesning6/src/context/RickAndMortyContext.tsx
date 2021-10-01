import { FC, createContext, useState, useEffect} from "react"
import {rickAndMortyTypes} from "../types/rickAndMortyTypes";
import {ICharacter} from "../interfaces/ICharacter";
import {rickAndMortyService} from "../services/rickAndMortyService";


export const RickAndMortyContex = createContext<rickAndMortyTypes | null>(null)
export const RickAndMortyProvider:FC = ({children}) => {

    const [characters, setCharacters] = useState<ICharacter[]>([])

    useEffect( () => {
        getCharactersFromService()
    }, [])

    const getCharactersFromService = async () => {
        const results = await rickAndMortyService.getAll()
        setCharacters(results)
    }

    return (
        <RickAndMortyContex.Provider value={{ characters }}>
            {children}
        </RickAndMortyContex.Provider>
    )
}