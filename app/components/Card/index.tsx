/**O objetivo deste componente é criar um card para ser utilizado em outras partes do projeto, como por exemplo na página de desafios. Ele recebe como props children que serão renderizados dentro do card. O card possui um título fixo "Teste suas habilidades" e um corpo onde os filhos serão exibidos. O estilo do card é utilizado no arquivo card.module.css. */

interface CardProps {
    headerTitle: string;
    children: React.ReactNode;
}
import cardStyles from './card.module.css';

export function Card(props: CardProps) {
    return (
        <div className={cardStyles.card}>
            <div className={cardStyles.card}>
                <header className={cardStyles.cardHeader}>
                    <h1 className={cardStyles.cardHeaderTitle}>{props.headerTitle}</h1>
                </header>
                <section className={cardStyles.cardBody}>
                    {props.children}
                </section>
            </div>
        </div>
    )
}
