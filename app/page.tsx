import homeStyles from './home.module.css';
import cardStyles from './components/Card/card.module.css';
import { AluraQuizLogo } from './components/AluraQuizLogo';
import { Footer } from './components/Footer';
import { Card } from './components/Card';


export default function page() {
  return (
    <main className={homeStyles.homeScreen} style={{ flex: 1 }}>
      <section className={homeStyles.container}>
        <div style={{
          display: "flex",
          justifyContent: "center",
          marginBottom: "24px",
        }}>
          <AluraQuizLogo />
        </div>
        <Card />
        <Footer />
      </section >
    </main >
  )
}