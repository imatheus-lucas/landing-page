import React from 'react';

import { Container,Title,MenuItem, Wrapper } from './styles';

const Header: React.FC = () => {
  return (
    <Container>
      <Wrapper>
         <p>Portfólio</p>
      </Wrapper>
      <>
      <Title>Matheus Lucas</Title>
        </>  
         
       <Wrapper>
         <MenuItem whileHover={{scale:1.1}} href="">Inicio</MenuItem>
         <MenuItem whileHover={{scale:1.1}} href="">Sobre</MenuItem>
         <MenuItem whileHover={{scale:1.1}} href="">Contato</MenuItem>
       </Wrapper>
    </Container>
  );
}

export default Header;