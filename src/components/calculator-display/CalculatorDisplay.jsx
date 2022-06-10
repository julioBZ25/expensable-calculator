import React from 'react';
import styled from '@emotion/styled';

const CalculatorDisplay = ({children}) => {
  const CalcDisplay = styled.div`
  background-color: white;
  height: 50px;
  margin: 1px 1px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
`
  return (
    <CalcDisplay>
      <p>
        $
      </p>
      <p>
        {children}
      </p>
    </CalcDisplay>
  )
}

export default CalculatorDisplay