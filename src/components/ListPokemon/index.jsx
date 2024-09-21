import styles from './styles.module.css'

export const ListPokemon = ( {name, img, id} ) => {
    return (
        <div className={styles.conteiner}>
            <img src={img} alt="" />
        <ul>
            <li>
                <h1>{name}</h1>
                <p>#{id}</p>
            </li>
        </ul>
        </div>
    )
}