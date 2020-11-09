import styled from "styled-components";
import { motion } from 'framer-motion'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-family: "Montserrat", sans-serif;
  padding: 5vh 5vw;
  &:first-child p {
    font-size: 18px;
  }
`;

export const Wrapper = styled.div`
   display: flex;
   align-items: center;
   justify-content:center;
   flex:1;
   
`;
export const MenuItem = styled(motion.a)`
  font-size: 18px;
  text-decoration: none;
  color: #cacaca;
  margin: 0 16px;

  &:hover {
    color: #0288d1;
    font-weight:bold;
  }
`;
export const Title = styled.p`
  font-size: 47px;
  color: #202024;
  
`;
