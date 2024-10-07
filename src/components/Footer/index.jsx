import styles from './styles.module.css'
import {  FaLinkedin, FaGithub, FaInstagram} from 'react-icons/fa';
import { FiMail } from 'react-icons/fi';

export const Footer = ( {email, insta, linkedin, github} ) => {
    return (
        <div className={styles.conteiner}>
            <h2>&copy;2024 developer Vitor frança</h2>
            <div className={styles.conteiner_icon}>
                <div className={styles.icon}><a href={linkedin} aria-label='Linkedin de Vitor França'><FaLinkedin size={15}/></a></div>
                <div className={styles.icon}><a href={github} aria-label='Github de Vitor França'><FaGithub size={15}/></a></div>
                <div className={styles.icon}><a href={email} aria-label='Enviar e-mail para Vitor França'><FiMail size={15}/></a></div>
                <div className={styles.icon}><a href={insta} aria-label='Instagram de Vitor França'><FaInstagram size={15}/></a></div>
            </div>
        </div>
    )
}