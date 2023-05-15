import  axios from "axios";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Deatil() {
    const {id} = useParams();
    const [character,setCharacter] = useState({});
    console.log(character);
    
    useEffect(() => {
        axios(`http://localhost:3001/rickandmorty/character/${id}`)
        .then(response => response.data)
        .then(( data ) => {
           if (data.name) {
              setCharacter(data);
           } else {
              window.alert('No hay personajes con ese ID');
           }
        });
        return setCharacter({});
     }, [id]);

    return (
        <div>
        {
          character.name ? (
            <div>
              <img src={character.image} alt={character.name} />
              <h1>{character.name}</h1>
              <p>Status | {character.status}</p>
              <p>Gender | {character.gender}</p>
              <p>Specie | {character.species}</p>
              <p>Origin | {character.origin.name}</p>
            </div>
          ) : (
            <h1>Componente no encontrado</h1>
          )
        }
      </div>
    );
 }