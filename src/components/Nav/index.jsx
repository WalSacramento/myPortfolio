import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'

import S from './styles.module.scss'

export default function Navigation() {
  return (
    <Navbar sticky="top" variant="dark" expand="lg" className={S.navbar}>
      <Container fluid>
        <Navbar.Brand href="/" className={S.title}>
          Waldsson Sacramento
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '200px' }}
            navbarScroll
          >
            <Nav.Link href="#action1" className={S.navLink}>
              Home
            </Nav.Link>
            <Nav.Link href="#action2" className={S.navLink}>
              Sobre Mim
            </Nav.Link>
            <Nav.Link href="#action3" className={S.navLink}>
              Projetos
            </Nav.Link>
            <Nav.Link href="#action4" className={S.navLink}>
              Contato
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
