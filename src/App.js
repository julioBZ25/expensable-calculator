import CalculatorHeader from './components/header/Header';
import ShoppingCartIcon from 'remixicon-react/ShoppingCart2FillIcon';
import GeneralButton from './components/general-button/GeneralButton';
import styled from '@emotion/styled';
import React from 'react'

const KEYBOARD_CALCULATOR=[
  '/','1', '2','3', '<-', 'x', '4','5', '6', 'c', '-','7', '8','9', '=', '+', 'A', '0', '.'
]

function App() {
  const [number, setNumber] = React.useState(0)

  const CalcSection = styled.section`
    background-color: #E5E7EB;
    width: 256px;
    height: 332px;
  `
  const CalcKeyboard = styled.div`
    display: grid;
    grid-template-rows: repeat(4, 50px);
    grid-gap: 1px;
    margin: 0 1px;
  `
  const CalcDisplay = styled.div`
    background-color: white;
    height: 50px;
    margin: 1px 1px;
  `
  return (
    <CalcSection>
      <CalculatorHeader name={'Groceries'} color={'#06B6D4'} icon={ <ShoppingCartIcon/> }/>
      <CalcDisplay></CalcDisplay>
      <CalcKeyboard>
        {KEYBOARD_CALCULATOR.map((value) => 
          (<GeneralButton isLarge={value==='='}>{value}</GeneralButton>)
        )}
      </CalcKeyboard>
    </CalcSection>
  );
}

export default App;
