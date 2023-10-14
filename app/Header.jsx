import React from 'react'
const Header = () => {
    return (
        <>
          <Navbar bg="light" data-bs-theme="light">
              <Navbar.Brand href="#home">Navbar</Navbar.Brand>
              <Nav className="me-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#features">Features</Nav.Link>
                <Nav.Link href="#pricing">Pricing</Nav.Link>
              </Nav>
          </Navbar>
        </>
        
    )
}

export default Header