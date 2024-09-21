import Navigation from "../../header";
import Header from "./header5";
import Footer from "./footer5";
import "./style5.css";

export default function Exercicio5() {
  return (
    <>
      <Navigation />
      <div className="app-container">
      <Header />
      <main className="content">
        <p>Conteúdo principal da página.</p>
      </main>
      <Footer />
    </div>
    </>
  );
}
