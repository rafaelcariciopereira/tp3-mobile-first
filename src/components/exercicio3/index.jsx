import Navigation from "../../header";
import Card from './Card';
import Button from './Button';

export default function Exercicio3() {
  return (
    <>
      <Navigation />
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <Card>
        <h2>Cartão de Exemplo</h2>
        <p>Esse é um cartão estilizado com inline styles.</p>
        <Button label="Clique Aqui" />
      </Card>
    </div>
    </>
  );
}
