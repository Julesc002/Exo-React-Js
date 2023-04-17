import React, { useEffect, useState } from 'react';
import axios from "axios";

function SearchBar() {
    const [data, setData] = useState([]);
    const [recherche, setRecherche] = useState("");

    const majRecherche = (e) => {
        setRecherche(e.target.value);
    }

    useEffect(() => {
        axios
            .get("https://hp-api.onrender.com/api/characters")
            .then((res) => setData(res.data));        
    }, [])

    const nomsFiltres = data.filter(function(character) {
        return character.name.toLowerCase().startsWith(recherche.toLowerCase());
    });
    
    if (nomsFiltres.length === 0) {
        return (
            <div className="recherche">
                <input type="text" placeholder='Exemple : Harry Potter' onChange={majRecherche}></input>
                <p>Aucun résultat</p>
            </div>
        );
    } else {
        return (
            <div className="recherche">
                <input type="text" placeholder='Exemple : Harry Potter' onChange={majRecherche}></input>
                {recherche !== "" && nomsFiltres.map(function(character) {
                    return <p className="nomsRecherche">{character.name}</p>;
                })}
            </div>
        );
    }
}

export default SearchBar;