import React, { useEffect, useState } from 'react';
import Card from './Card';
import axios from "axios";

function Cards() {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios
            .get("https://hp-api.onrender.com/api/characters")
            .then((res) => setData(res.data));
        
    }, [])

    return (
        <section>
            {data.slice(0, 6).map((character) => (
                <Card
                    image={character.image}
                    name={character.name}
                    dateOfBirth={character.dateOfBirth}
                    house={character.house}
                    patronus={character.patronus}
                    actor={character.actor}
                />
            ))}
        </section>
    );
}

export default Cards;