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

import {Link} from 'react-router-dom';

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

    reload = () => {
        window.location.reload();
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

                                <NavLink onClick={this.reload}>
                                    <Link to="/vocabulary">Vocabulary</Link>
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink onClick={this.reload}>
                                    <Link to="/short-story">Short Story</Link>
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink onClick={this.reload}>
                                    <Link to="/game">Game</Link>
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink onClick={this.reload}>
                                    <Link to="/help">Help</Link>
                                </NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </React.Fragment>
        );
    }
}

export default Header;
