import homeStyles from './home.module.css';
import cardStyles from './card.module.css';
import { AluraQuizLogo } from './components/AluraquizLogo';
import { Footer } from './components/Footer';


export default function page() {
  return (
    <main className={homeStyles.homeScreen} style={{ flex: 1 }}>
      <div style={{
        maxWidth: "350px",
        display: "flex",
        justifyContent: "center",
        marginBottom: "24px",
      }}>
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
     <Footer />
    </main>
  )
}