import cardStyles from './card.module.css';
export default function page() {
  return (
    <main>
      <div className={cardStyles.card}>
        <header>
          <h1 className="title">Teste suas habilidades</h1>
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