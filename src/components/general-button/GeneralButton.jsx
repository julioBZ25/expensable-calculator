import React from 'react';
import styled from '@emotion/styled';
import ContentLabel from '../content-label/ContentLabel';
import CheckFillIcon from 'remixicon-react/CheckFillIcon';
import CalendarEventFillIcon from 'remixicon-react/CalendarEventFillIcon';
import DeleteBack2FillIcon from 'remixicon-react/DeleteBack2FillIcon';
import DivideFillIcon from 'remixicon-react/DivideFillIcon';

const GeneralButton = ({ children, isLarge, operator, onClick, style}) => {
  const Button = styled.div({
    width: '50px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    color: '#4B5563',
    cursor: 'pointer',
    ...(isLarge ? {gridRow: '3 / 5', gridColumn: '5 / 6'} : {}),
    ...style
  })

  const renderCalendar = children === 'A';
  const renderCheck = isLarge && !operator;
  const renderDeleteBar = children === '<-';
  const renderDivision = children === '/';
  const renderDefault = !renderDivision && !renderDeleteBar && !renderCalendar && !renderCheck

  return (
    <Button onClick={onClick}>
      {renderDivision && <DivideFillIcon />}
      {renderCalendar && <CalendarEventFillIcon />}
      {renderCheck && <CheckFillIcon/>}
      {renderDeleteBar && <DeleteBack2FillIcon/>}
      {renderDefault && <ContentLabel size={'xl'}>{ children }</ContentLabel>}
    </Button>
  )
}

export default GeneralButton