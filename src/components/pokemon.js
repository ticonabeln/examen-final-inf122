"use client"
import Image from "next/image";
import style from "./pokemon.module.css";
import { useEffect, useState } from "react";

function pokemon (){
    const[pokemon,setpokemon]=useState("/vercel.svg");
    const[estado, setEstado]=useState("esperando")
    const[habilidad, setHabilidad]=useState("habilidad")
    const url="https://pokeapi.co/api/v2/pokemon/eevee";
    ;
    useEffect(()=>{
        fetch(url).then(res=>res.json())
        .then(data=>{
            setpokemon(data.sprites.front_default)
            setEstado(data.species.name)
            setHabilidad(data.abilities[0].ability.name)
        }); 

    },[]);
    return(
        <div className={style.contenedor}>
            <h1>{estado}</h1>
            <Image src={pokemon}alt="pokemon" width={500} height={500}/>
            <h1>{habilidad}</h1>
        </div>
    )
}

export default pokemon;