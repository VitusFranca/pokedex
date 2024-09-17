import { useEffect, useState } from 'react'
import styles from './styles.module.css'
import axios from 'axios'
import { ButtonPokemon } from '../../components/ButtonPokemon';

export const Home = () => {

    const [pokemons, setPokemons] = useState([]);

    useEffect(() => {
        getPokemons()
    },[]);
    
    const getPokemons = () => {
        
        var endpoints = []

        for(var i = 1; i < 50; i++) {
            endpoints.push(`https://pokeapi.co/api/v2/pokemon/${i}/`)

        }
        var response =
        axios.all(endpoints.map((endpoint) => axios.get(endpoint)
        .then((res) => setPokemons(res)))
        )
    }

    return (
        <div className={styles.conteiner}>
            <div className={styles.layout}>layout</div>
            <div className={styles.list}>

            </div>
            </div>
    )
}