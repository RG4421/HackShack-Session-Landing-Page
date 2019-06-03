/* (C) Copyright 2019 Hewlett Packard Enterprise Development LP. */
import styled from 'styled-components';
import { Box, Button } from 'grommet';

export const ImageContainer = styled(Box)`
  width: 100%;
  align-items: center;
  img {
   width: 100%;
   height: auto;
   max-width: 800px;
  }
  @media (max-width: 960px){
    img {
      height:  
    }
  }
`;

export const BrickWall = styled(Box)`
height: 550px;
@media (max-width: 960px){
     height: 250px;   
`;

export const LogoButton = styled(Button)`
position: absolute; 
top: 0;
img {
    width: 50%;
    height: auto;
   }
@media (max-width: 960px){
  margin-top: 12px;
  margin-left: 12px;
    img {
     width: 40%;
     height: auto; 
    }
  }
`;
