import React,{useState} from 'react';

import { Container,Photo } from './styles';


interface CardProps {
  path:string;
  title:string;
}
const Card: React.FC<CardProps> = ({ title, path }) => {

  const [selectId, setSelectedId] =  useState(null);
  return (
   
      <Container whileHover={{scale:1.1}}>
          <h5>{title}</h5>
          <Photo
            initial="hidden" animate="visible" variants={{
              hidden: {
                scale: .8,
                opacity: 0
              },
              visible: {
                scale: 1,
                opacity: 1,
                transition: {
                  delay: 4.4
                }
              },
            }}
            src={path}
            width="300"
            height="300"
            alt="Skills desenvolvimento"
          />
      </Container>
   
  );
}

export default Card;