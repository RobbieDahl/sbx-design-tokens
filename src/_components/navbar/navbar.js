import React from "react";
import { Container, Nav, Navbar, NavDropdown, Badge } from "react-bootstrap";

export const MTNavbar = () => {
	return (
		<Navbar
            bg="primary"
			variant="dark"
			expand="lg"
			fixed="top"
		>
			<Container fluid>

				<Navbar.Brand href="#home">
					Project Name
				</Navbar.Brand>

				<Nav className="ms-auto">
					<Nav.Link href="#link1" className="nav-icon">
						<span className="bi bi-search"></span>
					</Nav.Link>
					<div className="nav-divider"></div>
					<Nav.Link href="#link2" className="notification nav-icon">
						<div className="notification">
							<span className="bi bi-envelope ms-1"></span>
							<Badge pill bg="danger">
								3
							</Badge>
						</div>
					</Nav.Link>
					<div className="nav-divider"></div>
					<Nav.Link href="#link3">
						MENU 1
					</Nav.Link>
					<div className="nav-divider"></div>
					<Nav.Link href="#link4" className="active">
						MENU 2
					</Nav.Link>
					<div className="nav-divider"></div>
					<Nav.Link href="#link">
						MENU 3
					</Nav.Link>
					<div className="nav-divider"></div>
					<NavDropdown
						title={
							<span>
								{" "}
								<i className="bi bi-person-square me-1" /> Bobby B
							</span>
						}
						id="basic-nav-dropdown"
						align="end"
                    >
                        <NavDropdown.Item href="#action4"><i class="bi bi-person-square me-1"></i>Profile</NavDropdown.Item>
                        <NavDropdown.Divider />
						<NavDropdown.Item href="#action/3.1"><i class="bi bi-door-closed-fill me-1"></i>Log out</NavDropdown.Item>
					</NavDropdown>
                </Nav>
			</Container>
		</Navbar>
	);
};
