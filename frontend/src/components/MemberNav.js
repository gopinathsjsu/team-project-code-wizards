import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Outlet, Route, Routes} from "react-router-dom";
import {MemberHome} from "./memberhome";
import {Enroll} from "./Enroll";

function MemberTopNav() {
    return (
        <>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="/memberhome/home">Home</Nav.Link>
                            <Nav.Link href="/memberhome/enroll">Enroll</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Routes>
                <Route path="home" element={<MemberHome />} />
                <Route path="Enroll" element={<Enroll />} />
            </Routes>
            <Outlet />
        </>
    );
}

export default MemberTopNav;