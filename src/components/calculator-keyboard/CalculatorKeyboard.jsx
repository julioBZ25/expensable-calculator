import React from 'react';
import styled from '@emotion/styled';
import GeneralButton from '../general-button/GeneralButton';

const KEYBOARD_CALCULATOR=[
  '/','1', '2','3', '<-', 'x', '4','5', '6', 'c', '-','7', '8','9', '=', '+', 'A', '0', '.'
]

export const OPERATORS={
  '/': (a,b) => a / b,
  'x': (a,b) => a * b, 
  '-': (a,b) => a - b, 
  '+': (a,b) => a + b,
}

function getButtonStyle(value){
  if(Object.keys(OPERATORS).includes(value)){
    return { backgroundColor: '#F3F4F6' }
  }
  if(value==='='){
    return { backgroundColor: '#06B6D4', color: 'white'}
  }
  return {}
}

const CalculatorKeyboard = ({operator, handleClick}) => {
  const CalcKeyboard = styled.div`
    display: grid;
    grid-template-rows: repeat(4, 50px);
    grid-gap: 1px;
    margin: 0 1px;
  `
  return (
    <CalcKeyboard>
      {KEYBOARD_CALCULATOR.map((value, index) => 
          (<GeneralButton key={index} isLarge={value==='='} operator={operator} style={getButtonStyle(value)} onClick={ () => handleClick(value) }>
            {value}
           </GeneralButton>)
        )}
    </CalcKeyboard>
  )
}

export default CalculatorKeyboard