import React from 'react'
import styled from '@emotion/styled';
import ContentLabel from '../content-label/ContentLabel';

export default function CalculatorHeader({name, color, icon, ...otherProps}){
  const CalcHeader = styled.div({
    backgroundColor: color,
    width: '256px',
    height: '50px',
    display: 'flex',
    padding: '5px 0 5px 0',
    alignItems: 'center',
    gap: '0.5rem'
  })

  const DivIcon = styled.div({
    marginLeft: '12px',
  })

  return (
    <CalcHeader>
      {icon ? <DivIcon>{ icon }</DivIcon> : ''}  
      <div>
        <ContentLabel size={'xs'} styles={ {color: 'white'}}>Add Expenses to</ContentLabel>
        <ContentLabel size={'md'} styles={ {color: 'white'} }>{ name }</ContentLabel>
      </div>
    </CalcHeader>
  )
}


