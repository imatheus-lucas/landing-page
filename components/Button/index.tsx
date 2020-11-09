import React from 'react';

import { Container } from './styles';

const Button: React.FC = () => {
  return (
    <Container whileHover={{
      scale:1.1
    }}
    
    whileTap={{scale:1.8, motionRotation:"initial"}}>
       Tire sua idéia do papel
    </Container>
  );
}

export default Button;