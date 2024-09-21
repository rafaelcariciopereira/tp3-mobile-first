import React from 'react';

function Main() {
  return (
    <main className="main-content">
      <h2 className="main-title">Bem-vindo ao Conteúdo Principal</h2>
      <p className="main-paragraph">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eget libero ac quam tincidunt vehicula.
      </p>
      <p className="main-paragraph">
        Curabitur auctor nisi et neque hendrerit, eu facilisis libero aliquet. Sed volutpat nisl eget orci fermentum, 
        nec fermentum libero viverra.
      </p>
      <img
        className="main-image"
        src="surf.jpeg"
        alt="Exemplo"
      />
    </main>
  );
}

export default Main;
