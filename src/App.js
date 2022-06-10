import CalculatorHeader from './components/header/Header';
import ShoppingCartIcon from 'remixicon-react/ShoppingCart2FillIcon';
import GeneralButton from './components/general-button/GeneralButton';
import styled from '@emotion/styled';
import React from 'react'
import CalculatorDisplay from './components/calculator-display/CalculatorDisplay';

const OPERATORS={
  '/': (a,b) => a / b,
  'x': (a,b) => a * b, 
  '-': (a,b) => a - b, 
  '+': (a,b) => a + b,
}

const KEYBOARD_CALCULATOR=[
  '/','1', '2','3', '<-', 'x', '4','5', '6', 'c', '-','7', '8','9', '=', '+', 'A', '0', '.'
]

function App() {
  const [prevNumber, setPrevNumber] = React.useState(null)
  const [operator, setOperator] = React.useState(null)
  const [currentNumber, setCurrentNumber] = React.useState('0')

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

  function handleClick(value){
    if (/\d/.test(value)){
      if(currentNumber==='0'){
        setCurrentNumber(value)
      }else{
        setCurrentNumber((currentNumber || '') + value)
      }
    }else if(Object.keys(OPERATORS).includes(value)){
      setOperator(value)
      setPrevNumber(currentNumber)
      setCurrentNumber(null)
    }else{
      switch (value) {
        case '=':
          setOperator(null)
          const result = OPERATORS[operator](+prevNumber, +currentNumber)
          setCurrentNumber(result)
          setPrevNumber(null)
          break;
        case 'c':
          setOperator(null)
          setPrevNumber(null)
          setCurrentNumber('0')
          break;
        case '<-':
          const cnumber = currentNumber || '' 
          if(cnumber.length === 1){
            if(!(prevNumber && operator)){
              setCurrentNumber('0')
            }else{
              setCurrentNumber(null)
            }
          }else if(!currentNumber && (prevNumber && operator)){
            setCurrentNumber(prevNumber)
            setPrevNumber(null)
            setOperator(null)
          }else{
            setCurrentNumber(currentNumber.slice(0,-1))
          }
          break;
        default:
          break;
      }
    }
  }

  return (
    <CalcSection>
      <CalculatorHeader name={'Groceries'} color={'#06B6D4'} icon={ <ShoppingCartIcon/> }/>
      <CalculatorDisplay>{prevNumber} {operator} {currentNumber}</CalculatorDisplay>
      <CalcKeyboard>
        {KEYBOARD_CALCULATOR.map((value, index) => 
          (<GeneralButton key={index} isLarge={value==='='} onClick={ () => handleClick(value) }>{value}</GeneralButton>)
        )}
      </CalcKeyboard>
    </CalcSection>
  );
}

export default App;
