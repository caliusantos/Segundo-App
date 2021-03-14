import React from 'react';
import imagemeletricista from '../../images/eletricistainstalador.jpg'
import comandoseletricos from '../../images/comandoseletricos.jpg'
import inspetordaqualidade from '../../images/inspetordaqualidade.jpg'
import './index.css'

function Cards() {
  return (
    <div class="corpo">

      <div>
        <p>Eletricista Instalador</p>
        <img src= {imagemeletricista} alt= '' />
        <h3>Curso Fic Eletricista Instalador.</h3>
        <p>Carga Horaria 160 horas.</p>
        <h4>Preço: R$ 1600,00 </h4>
      </div>
      <div>
        <p>Inspetor da Qualidade</p>
        <img src= {inspetordaqualidade} alt='' />
        <p>Curso Fic Inspetor da Qualidade.</p>
        <p>Carga Horária 160 Horas.</p>
        <h4>Preço: R$ 1800,00</h4>
      </div>
      <div>
        <p>Comandos Elétricos</p>
        <img src={comandoseletricos} alt='' />
        <h3>Curso Fic Comandos Elétricos.</h3>
        <p>Carga Horário 120 Horas .</p>
        <h4>Preço: R$ 1500,00</h4>
      </div>
    </div>
  );
}

export default Cards;