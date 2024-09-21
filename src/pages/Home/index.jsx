import { useEffect, useState} from 'react'
import styles from './styles.module.css'
import axios from 'axios'
import { ListPokemon } from '../../components/ListPokemon';
import { PokemonCard } from '../../components/PokemonCard';

export const Home = () => {

	const inicialPokemon = {
		name: "bulbasaur",
		id: 1,
		sprites: { "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"},
		types: [
				{
				  slot: 1,
				  type: {
					name: "grass",
					url: "https://pokeapi.co/api/v2/type/12/"
				  }
				},
				{
				  slot: 2,
				  type: {
					name: "poison",
					url: "https://pokeapi.co/api/v2/type/4/"
				  }
				}
			  ],
		abilities: [
				{
				  ability: {
					name: "overgrow",
					url: "https://pokeapi.co/api/v2/ability/65/"
				  },
				  is_hidden: false,
				  slot: 1
				},
				{
				  ability: {
					name: "chlorophyll",
					url: "https://pokeapi.co/api/v2/ability/34/"
				  },
				  is_hidden: true,
				  slot: 3
				}
			  ],
			
	};

	const [pokemons, setPokemons] = useState([]);
	const [selectPokemon, setSelectPokemon] = useState(inicialPokemon);

	const handlePokemonDados = (dados) => {
		setSelectPokemon(dados)
	}
	

	useEffect(() => {
		getPokemons();
	},[]);
	
	const getPokemons = () => {
		
		var endpoints = []

		for(var i = 1; i < 50; i++) {
			endpoints.push(`https://pokeapi.co/api/v2/pokemon/${i}/`)

		}
		var response =
		axios
		.all(endpoints.map((endpoint) => axios.get(endpoint)))
		.then((res) => setPokemons(res));
		
	}



	return (
		<div className={styles.conteiner}>
			<div className={styles.card}>
				<PokemonCard 
					name={selectPokemon.name}
					id={selectPokemon.id}
					img={selectPokemon.sprites.front_default}
					types={selectPokemon.types}
					abilities={selectPokemon.abilities}
				/> 
			</div>
			<div  className={styles.inner}>
				{pokemons.map((pokemon) => 
				(<div  className={styles.item} key={pokemon.data.id} onClick = {() => {handlePokemonDados(pokemon.data)}}>
					<ListPokemon 
						name={pokemon.data.name} 
						img={pokemon.data.sprites.front_default}
						id={pokemon.data.id}
					/>
				</div>))
				}
			</div>
  
		</div>
	)
}
