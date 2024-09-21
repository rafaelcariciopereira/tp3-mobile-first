import Navigation from "../../header";
import Card from "./cards";

export default function Exercicio8() {
  return (
    <>
      <Navigation />
      <div className="App">
      <h1>Exemplo de Componente Card</h1>
      <Card 
        title="Título do Card" 
        description="Este é um exemplo de descrição do card." 
        image="https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Male_gorilla_in_SF_zoo.jpg/640px-Male_gorilla_in_SF_zoo.jpg"
      />
      <Card 
        title="Outro Card" 
        description="Descrição do segundo card aqui." 
        image="https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Male_gorilla_in_SF_zoo.jpg/640px-Male_gorilla_in_SF_zoo.jpg"
      />
    </div>
    </>
  );
}
