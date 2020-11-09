import styled from 'styled-components';
import { motion } from 'framer-motion'

import Image from 'next/image'
export const Container = styled(motion.div)`
  
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:space-around;
  width:100%;

  h5{
    font-size:27px;

  }
`;

export const Photo = motion.custom(styled(Image)`
  
`)


