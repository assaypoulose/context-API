import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem
} from "reactstrap";
import ProductContext from "./Context";
function Navigation(args) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const context = useContext(ProductContext);

  return (
    <div>
      <Navbar {...args}>
        <NavbarBrand href="/">reactstrap</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto" navbar>
            <NavItem>
              <Link to="/products/smartphones">SmartPhones</Link>
            </NavItem>
            <NavItem>
              <Link to="/products/laptops">Laptops</Link>
            </NavItem>
            <NavItem>
              <Link to="/products/fragrances">Fragrances</Link>
            </NavItem>
            <NavItem>
              <Link to="/mycart">Cart({context.cart.length})</Link>
            </NavItem>
            Total : {context.cartValue} USD
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Navigation;
