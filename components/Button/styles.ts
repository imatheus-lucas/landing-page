import styled from 'styled-components';

import { motion } from 'framer-motion'
export const Container = styled(motion.button)`
  width:300px;
  height:47px;
  border:none;;
  outline:none;
  background-color:#0288D1;
  border-radius:8px;
  color:#f5f5f5;
  font-size:16px;
  font-weight:bold;
  margin: 3%;
  cursor: pointer;
  
  transition: background-color 1s;

  &:hover{
    background-color:#156896;
  }
`;
