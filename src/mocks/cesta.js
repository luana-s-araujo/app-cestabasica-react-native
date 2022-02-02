import logo from '../../assets/logo.png';

import arroz from '../../assets/frutas/arroz.png';
import feijao from '../../assets/frutas/feijao.png';
import macarrao from '../../assets/frutas/macarrao.png';
import cafe from '../../assets/frutas/cafe.png';
import acucar from '../../assets/frutas/acucar.png';

import bolacha from '../../assets/frutas/bolacha.png';
import farinha from '../../assets/frutas/farinha.png';
import leite from '../../assets/frutas/leite.png';
import sabao from '../../assets/frutas/sabao.png';
import oleo from '../../assets/frutas/oleo.png';



const cesta = {
  topo: {
    titulo: "Detalhes da cesta",
  },
  detalhes: {
    nome: "Cesta Básica",
    logoFazenda: logo,
    nomeFazenda: "Mercado ABC",
    descricao: "Uma cesta básica com 10 itens variados.",
    preco: "R$ 90,00",
    botao: "Comprar",
  },
  itens: {
    titulo: "Itens da cesta",
    lista: [
      {
        nome: "Arroz",
        imagem: arroz,
      },
      {
        nome: "Feijão",
        imagem: feijao,
      },
      {
        nome: "Macarrão",
        imagem: macarrao,
      },
      {
        nome: "Café",
        imagem: cafe,
      },
      {
        nome: "Açúcar",
        imagem: acucar,
      },
     

      {
        nome: "Bolacha",
        imagem: bolacha,
      },

      {
        nome: "Farinha",
        imagem: farinha,
      },
      {
        nome: "Leite",
        imagem: leite,
      },
      {
        nome: "Sabão",
        imagem: sabao,
      },
      {
        nome: "Óleo",
        imagem: oleo,
      }

    ]
  }
}

export default cesta;