import { createGlobalStyle } from 'styled-components';

import imgBackground from '../assets/background.svg';

export const GlobalStyle = createGlobalStyle`
  // inicialização da página
  // zera margin e padding e deixa o box sizing como 
  // sendo border-box para a página
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html {
      // fonte padrão = 16px
      // 16px = 1 rem
    @media (max-width: 1080px) { // pc
      font-size: 93.75%; // 15px
    }
    @media (max-width: 720px) { // celular
      font-size: 87.5%; // 14px
    }
  }
  body {
    background: #f0f0f5 url(${imgBackground}) no-repeat 70% top;
    -webkit-font-smoothing: antialiased; // tira escadinha, deixa a imagem mais arredondada
  }

  body, input, textarea, select, button {
    font: 400 1rem "Roboto", sans-serif;
  }
  
  #root {
    max-width: 960px;
    margin: 0 auto;
    // 1rem = 16px
    padding: 2.5rem 1.25rem; // 40px 20px
    // rem trabalha com o pixel de forma dinamica
  }
  button {
    cursor: pointer;
  }
  a {
    color: inherit;
    text-decoration: none;
  }
`;