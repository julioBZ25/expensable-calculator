import React from 'react';
import styled from '@emotion/styled';

const CalculatorDisplay = ({children}) => {
  const CalcDisplay = styled.div`
  background-color: white;
  height: 50px;
  margin: 1px 1px;
`
  return (
    <CalcDisplay>$ {children}</CalcDisplay>
  )
}

export default CalculatorDisplay