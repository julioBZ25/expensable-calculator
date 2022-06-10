import React from 'react'
import ShoppingCartIcon from 'remixicon-react/ShoppingCart2FillIcon';
import styled from '@emotion/styled';
import CalculatorDisplay from '../calculator-display/CalculatorDisplay';
import CalculatorKeyboard, { OPERATORS } from '../calculator-keyboard/CalculatorKeyboard';
import CalculatorHeader from '../header/Header';


const Calculator = () => {
  const [prevNumber, setPrevNumber] = React.useState(null)
  const [operator, setOperator] = React.useState(null)
  const [currentNumber, setCurrentNumber] = React.useState('0')
  const [hasCalculated, setHasCalculated] = React.useState(false)

  const CalcSection = styled.section`
    background-color: #E5E7EB;
    width: 256px;
    height: 332px;
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
      <CalculatorKeyboard operator={operator} handleClick={handleClick}/>
    </CalcSection>
  );
}

export default Calculator