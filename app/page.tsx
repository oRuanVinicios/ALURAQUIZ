import cardStyles from './card.module.css';
import homeStyles from './home.module.css';
export default function page() {
  return (
    <main className= {homeStyles.homeScreen}>
      <div className={cardStyles.card}>
      <header className={cardStyles.cardHeader}>
        <h1 className={cardStyles.cardHeaderTitle}>Teste suas habilidades</h1>
      </header>
      <p>
        Teste os seus conhecimentos sobre o universo marvel e divirta-se criando o seu AluraQuiz
      </p>
      <p>
        formulario/botao
      </p>
      <footer>
        <p>
          Orgulhosamente criado com o DevSoutinho e Alura
        </p>
      </footer> 
      </div>
    </main>
  )
}