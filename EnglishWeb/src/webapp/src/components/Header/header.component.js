import React, {Component} from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink
} from 'reactstrap';

class Header extends Component {
    constructor(props) {
        super(props);

        this.toggle = this
            .toggle
            .bind(this);
        this.state = {
            isOpen: false
        };
    }

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render() {
        return (

            <React.Fragment>
                <Navbar color="light" light expand="md">
                    <NavbarBrand href="/">English for Kids</NavbarBrand>
                    <NavbarToggler onClick={this.toggle}/>
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink href="#">Vocabulary</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="#">Short Story</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="#">Game</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="#">Help</NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </React.Fragment>
        );
    }
}

export default Header;
