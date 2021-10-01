import axios from "axios";

export const rickAndMortyService = ( function () {

    const urlAllCharacters = "https://rickandmortyapi.com/api/character"

    const getAll = async () => {
        const response = await axios.get(urlAllCharacters)
        return response.data["results"]
    }

    return { getAll }
} () )