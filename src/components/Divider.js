import React from 'react'
import styled from 'styled-components'

const DividerWrapper = styled.svg`
  height: 4px;
  width: 4px;
  fill: ${props => props.theme.colors.neutral[2]};
  margin: 0px 16px;
`
const Divider = () => {
  return (
    <DividerWrapper>
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M2 4C3.10457 4 4 3.10457 4 2C4 0.89543 3.10457 0 2 0C0.89543 0 0 0.89543 0 2C0 3.10457 0.89543 4 2 4Z"
      />
    </DividerWrapper>
  )
}

export default Divider
