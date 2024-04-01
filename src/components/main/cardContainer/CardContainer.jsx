import React from 'react'
import { Container } from 'react-bootstrap';
import './Cardcontainer.scss';

const CardContainer = ({children}) => {
  return (
    <main >
        <Container className='d-flex flex-column gap-4 cardcontainer'>
            {children}

        </Container>
    </main>
  )
}

export default CardContainer