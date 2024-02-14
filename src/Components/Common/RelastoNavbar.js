import {
  NavDropdown,
  Navbar,
  Nav,
  Container,
  Button,
  Form
} from "react-bootstrap";


function RelastoNavbar() {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <div className=" d-flex justify-content-start align-content-center">
          <Navbar.Brand
            href="#home"
            className="d-flex gap-3 align-items-center"
          >
            <img
              src="/assets/logo.svg"
              alt=""
            />
            <p className="text-left font-markoone text-orange-A700 text-xl w-auto m-0">
              Relasto
            </p>
          </Navbar.Brand>
        </div>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <div className=" d-flex justify-content-center align-content-center">
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/listing">Listing</Nav.Link>
              <NavDropdown title="Agent" id="collapsible-nav-dropdown">
                <NavDropdown.Item href="/agent">Agents</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="/property">Property</Nav.Link>
              <Nav.Link href="/blog">Blog</Nav.Link>
              <Nav.Link href="/contact">Contact</Nav.Link>
              <Nav.Link href="/about">About</Nav.Link>
            </Nav>
          </div>
          <div className=" d-flex justify-content-end align-content-center">
          <Nav>
            <div className="d-flex align-items-center">
              <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
                <Button variant="outline-dark">Search</Button>
              </Form>
            </div>
            <Nav.Link href="/login">
              <Button variant="dark">Login</Button>
            </Nav.Link>
          </Nav>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default RelastoNavbar;
