import React from 'react'
import { Container } from 'react-bootstrap'

const CardContainer = ({children}) => {
  return (
    <main>
        <Container>
            {children}

        </Container>
    </main>
  )
}

export default CardContainer