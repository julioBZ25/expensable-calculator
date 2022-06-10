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

function getButtonStyle(value){
  if(Object.keys(OPERATORS).includes(value)){
    return { backgroundColor: '#F3F4F6' }
  }
  if(value==='='){
    return { backgroundColor: '#06B6D4', color: 'white'}
  }
  return {}
}

function App() {
  const [prevNumber, setPrevNumber] = React.useState(null)
  const [operator, setOperator] = React.useState(null)
  const [currentNumber, setCurrentNumber] = React.useState('0')
  const [hasCalculated, setHasCalculated] = React.useState(false)

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
    if (/[\d.]/.test(value)){
      if(currentNumber==='0' || hasCalculated){
        setHasCalculated(false)
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
          if(prevNumber && currentNumber){
            setOperator(null)
            const result = OPERATORS[operator](+prevNumber, +currentNumber)
            setCurrentNumber(result)
            setPrevNumber(null)
          }else if(prevNumber && operator){
            setOperator(null)
            const result = OPERATORS[operator](+prevNumber, +prevNumber)
            setCurrentNumber(result)
            setPrevNumber(null)
          }
          setHasCalculated(true)
          break;
        case 'c':
          setOperator(null)
          setPrevNumber(null)
          setCurrentNumber('0')
          break;
        case '<-':
          const cnumber = currentNumber.toString() || ''
          if(cnumber.length === 1){
            if(!(prevNumber && operator)){
              setCurrentNumber('0')
            }else{
              setCurrentNumber(null)
            }
          }else if(!cnumber && (prevNumber && operator)){
            setCurrentNumber(prevNumber)
            setPrevNumber(null)
            setOperator(null)
          }else{
            setCurrentNumber(cnumber.slice(0,-1))
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
          (<GeneralButton key={index} isLarge={value==='='} operator={operator} style={getButtonStyle(value)} onClick={ () => handleClick(value) }>
            {value}
           </GeneralButton>)
        )}
      </CalcKeyboard>
    </CalcSection>
  );
}

export default App;
