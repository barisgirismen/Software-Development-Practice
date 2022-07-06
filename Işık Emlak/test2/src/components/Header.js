import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';

const Header = () => {



    return(
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                <Navbar.Brand href="/"><img src="../img/logo.svg" class="logo" className="logo d-inline-block align-top"/>{' '}Işık Emlak</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        Welcome
                    </Nav>
                    {/*(loginBoolean == true)?
                        <Nav>
                        <Nav.Link href="/login">Login</Nav.Link>
                        <NavDropdown title="Register" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="/registerenduser">Register as End User</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="/registercompany">Register as Company</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="/resetpassword">Reset Password</Nav.Link>
                    </Nav>
                    :<Nav>
                        <NavDropdown.Item>Logout</NavDropdown.Item>
                    </Nav>
                    */}
                    
                    <Nav>
                        <Nav.Link href="/login">Login</Nav.Link>
                        <NavDropdown title="Register" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="/registerenduser">Register as End User</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="/registercompany">Register as Company</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="/resetpassword">Reset Password</Nav.Link>
                        <Nav.Link href="/">Logout</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                </Container>
                </Navbar>
        </div>
    );
};

export default Header;