// BlogNav.js

import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import { Navbar, Nav, Form, FormControl } from 'react-bootstrap';

const BlogNav = () => {
	return (
		<div>
			<Navbar style={{
				backgroundColor:"#A3C1D4"
			}}>
				
				<Navbar.Brand href="#home" style={{color:"white", marginLeft:"10px"}}>MNA Blog</Navbar.Brand>
				<Navbar.Toggle />
				<Navbar.Collapse id="basic-navbar-nav" className="d-flex justify-content-end">
					<Nav>
						<Nav.Link href="#home" style={{color:"white"}}>
							JavaScript
						</Nav.Link>
						<Nav.Link href="#about" style={{color:"white"}}>
							Data Structure
						</Nav.Link>
						<Nav.Link href="#services" style={{color:"white"}}>
							Algorithm
						</Nav.Link>
						<Nav.Link href="#contact" style={{color:"white"}}>
							Computer Network
						</Nav.Link>
					</Nav>
					<Form inline>
						<FormControl type="text" placeholder="Search" className="ml-auto" />
					</Form>
				</Navbar.Collapse>
			</Navbar>
		</div>
	)
}

export default BlogNav;
