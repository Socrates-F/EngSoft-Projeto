import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* Logo no canto superior esquerdo */}
        <img src="caminho/do/seu/logo.png" alt="Logo" className="logo" />

        {/* Botões interativos */}
        <div className="botoes-container">
          <button className="botao">Botão 1</button>
          <button className="botao">Botão 2</button>
          <button className="botao">Botão 3</button>
        </div>
      </header>
    </div>
  );
}

export default App;
