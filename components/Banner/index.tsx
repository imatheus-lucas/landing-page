import React from 'react';
import Button from '../Button'
import { Container, Wrapper } from './styles';

const Banner: React.FC = () => {
  return (
    <Container>
      <Wrapper>
        <p>Olá,</p>
        <p>Sou o matheus</p>
        <p>E sou um desenvolvedor de software.</p>
      <Button/>
      </Wrapper>
    </Container>
  );
}

export default Banner;