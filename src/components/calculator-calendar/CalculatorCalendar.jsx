import React from 'react';
import styled from '@emotion/styled';
import ContentLabel from '../content-label/ContentLabel';

const CalculatorCalendar = ({children}) => {
  const CalcCalendar = styled.div`
    background-color: #F3F4F6;
    text-align: center;
    padding: 5px 0;
    margin-top: 1px;
    margin-bottom: 1px;
    margin-left: 1px;
  `
  return (
    <CalcCalendar>
      <ContentLabel size={'xs'} styles={{padding: '0px 1px'}}>{children}</ContentLabel>
    </CalcCalendar>
  )
}

export default CalculatorCalendar