import React from 'react';
import styled from '@emotion/styled';
import ContentLabel from '../content-label/ContentLabel';

const GeneralButton = ({ children, isLarge}) => {
  const Button = styled.div({
    width: '50px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    cursor: 'pointer',
    ...(isLarge ? {gridRow: '3 / 5', gridColumn: '5 / 6'} : {})
  })
  return (
    <Button>
      <ContentLabel size={'xl'}>{ children }</ContentLabel>
    </Button>
  )
}

export default GeneralButton