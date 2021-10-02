import { useState } from "react";
import { NavLink as RRNavLink } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";

function Layout({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  return (
    <div className="container">
      <Navbar color="dark" dark expand="md">
        <NavbarBrand to="/" tag={RRNavLink}>
          React-Awesome
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink to="/counter" tag={RRNavLink}>
                Counter
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/posts" tag={RRNavLink}>
                Posts
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
      {children}
    </div>
  );
}
export default Layout;
