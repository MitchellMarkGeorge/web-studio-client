import React from 'react'
import styled from 'styled-components'

const LoadingContainer = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${props => props.theme.colors.primaryText};
`

export default function Loading() {

  return (
    <LoadingContainer>
        <h1>Loading Project...</h1>
    </LoadingContainer>
  )
}
