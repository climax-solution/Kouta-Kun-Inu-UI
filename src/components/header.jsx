import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';

const navs = [
  {
    href: "",
    title: "home"
  },
  {
    href: "",
    title: "about"
  },
  {
    href: "",
    title: "methodology"
  },
  {
    href: "",
    title: "statistics"
  },
  {
    href: "",
    title: "roadmap"
  },
];

export default function Header() {
  return (
    <>
      <Navbar expand="md" className="header-section">
        <Container>
          <Navbar.Brand href="#">
            <img
              src='/images/logo/logo.png'
              alt="logo-brand"
              width="50"
              height="50"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-md`} className="border-0" />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-md`}
            aria-labelledby={`offcanvasNavbarLabel-expand-md`}
            placement="end"
            className="bg-primary-color"
          >
            <Offcanvas.Header closeButton closeVariant="white">
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-md`}>
                Menu
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body className="align-items-center">
              <Nav className="justify-content-end menu flex-grow-1 me-4">
                {
                  navs.map((item, idx) => (
                    <Nav.Link key={idx} href={item.href} className='py-4 text-white'>{item.title}</Nav.Link>
                  ))
                }
              </Nav>
              <Button className='primary-btn border-0 outline-0'>PooCoin</Button>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
}