import pageStyles from './page.module.css';
import { AluraQuizLogo } from './_components/AluraQuizLogo';
import { Footer } from './_components/Footer';
import { Card } from './_components/Card';
import Link from 'next/link';


export default function page() {
  return (
    <main className={pageStyles.screen} style={{ flex: 1 }}>
      <section className={pageStyles.container}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginBottom: "24px",
          }}>
          <AluraQuizLogo />
        </div>
        <Card
          headerTitle="Teste suas habilidades"
        >

          <p style={{ marginBottom: "32px" }}>
            Teste os seus conhecimentos sobre o universo marvel e divirta-se criando o seu AluraQuiz
          </p>
          <p>
            formulario/botao
          </p>
          <Link href="/game">
            JOGAR
          </Link>
        </Card>
        <Footer />
      </section >
    </main >
  )
}