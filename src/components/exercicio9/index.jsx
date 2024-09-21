import Navigation from "../../header";
import Card from "./cards";
import Button from "./button";

export default function Exercicio9() {

  const handleClick = () => {
    alert('Botão clicado!');
  };

  return (
    <>
      <Navigation />

      <div className="App">
      <h1>Exemplo de Componente Card</h1>
      <Card 
        title="Título do Card" 
        description="Este é um exemplo de descrição do card." 
        image="https://via.placeholder.com/300"
      />
      <Card 
        title="Outro Card" 
        description="Descrição do segundo card aqui." 
        image="https://via.placeholder.com/300"
      />
      <Button label="Clique aqui" onClick={handleClick} />
    </div>
    </>
  );
}
