import React from 'react';
import { FooterBase } from './styles';

function Footer() {
  return (
    <FooterBase>
      {/* <a href="https://www.alura.com.br/">
        <img src="https://www.alura.com.br/assets/img/alura-logo-white.1570550707.svg" alt="Logo Alura" />
      </a> */}
      <p>
        Orgulhosamente criado para a
        {' '}
        <a href="https://www.univem.edu.br/pos/full-stack-development">
        Especialização FULL STACK DEVELOPMENTMobile e Web Cloud
        </a>
      </p>
    </FooterBase>
  );
}

export default Footer;
