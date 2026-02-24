import { Card } from "../Card";
import pageStyle from "./page.module.css";

export default function GameScreen() {
    return (
        <main className={pageStyle.screen} style={{ flex: 1 }}>
            <section className={pageStyle.container}>
                <Card
                    headerTitle="pergunta 1 de 5"
                >

                    pergunta
                </Card>
            </section>
        </main>
    )
}   
