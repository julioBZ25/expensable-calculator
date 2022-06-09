import React from 'react'
import styled from '@emotion/styled';

const SIZES = {
  xl: {
    fontSize: '20px',
    lineHeight: '28px',
  },
  lg:{
    fontSize: '18px',
    lineHeight: '28px',
  },
  md:{
    fontSize: '16px',
    lineHeight: '24px',
  },
  sm:{
    fontSize: '14px',
    lineHeight: '20px',
  },
  xs:{
    fontSize: '12px',
    lineHeight: '16px',
  },
}

const ContentLabel = ({ size, children, styles}) => {

  const Component = styled.p({
    ...SIZES[size],
    margin: 0,
    ...styles
   })
  return (
    <Component>{ children }</Component>
  )
}

export default ContentLabel