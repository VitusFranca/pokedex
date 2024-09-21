import styles from './styles.module.css'

export const PokemonCard = ( {name, id, img, types, abilities} ) => {

    const handleTypes = () => {
        if(types[1]){
            return types[0].type.name + " | " + types[1].type.name;
        }
            return types[0].type.name;
        
    }; 
    const handleAbilities = () => {
        if(abilities[1]){
            return abilities[0].ability.name + " | " + abilities[1].ability.name;
        }
            return abilities[0].ability.name;
        
    }; 

    return (
        <div className={styles.container}>
            <div className={styles.title}>
                <div className={styles.containerNome}>
                    <h1>{name}</h1> 
                    <p>#{id}</p>
                </div>
                <div className={styles.containerTipo}>
                    {handleTypes()}
                    
                </div>
            </div>
            <div className={styles.image}>   
                <img src={img} alt="" />
            </div>
            <div className={styles.info}> 
                <h1>informaçoes</h1>
                <div className={styles.dados}>
                    <p>Nome: {name}</p>
                    <p>habilidades: {handleAbilities()}</p>
                </div>
            </div>
        </div>
    )
}