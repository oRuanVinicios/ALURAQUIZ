import  { AluraLogo }  from '../AluraLogo'
import FooterStyles from './footer.module.css'



export function Footer() {
    return (
        <footer className={FooterStyles.footer}>
            <AluraLogo />  
            <p>
                Orgulhosamente criado com o <br /> DevSoutinho e Alura
            </p>    

        </footer>
    )
}