import homeStyles from './home.module.css';
import cardStyles from './card.module.css';
import homeStyles from './home.module.css';
import { AluraQuizLogo } from './components/AluraQuizLogo';
export default function page() {
  return (
    <main className={homeStyles.homeScreen} style={{ flex: 1 }}>
      <div>
        <AluraQuizLogo />
      </div>

      <div className={cardStyles.card}>
        <header className={cardStyles.cardHeader}>
          <h1 className={cardStyles.cardHeaderTitle}>Teste suas habilidades</h1>
        </header>
        <section className={cardStyles.cardBody}>
          <p>
            Teste os seus conhecimentos sobre o universo marvel e divirta-se criando o seu AluraQuiz
          </p>
          <p>
            formulario/botao
          </p>
        </section>
      </div>
      <footer>
        <p>
          Orgulhosamente criado com o DevSoutinho e Alura
        </p>
      </footer>
    </main>
  )
}