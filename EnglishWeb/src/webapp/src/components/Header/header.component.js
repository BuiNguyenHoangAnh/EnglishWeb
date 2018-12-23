import React, {Component} from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem
} from 'reactstrap';

import {Link} from 'react-router-dom';

import './header.css'

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
        window
            .location
            .reload();
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

                                <Link onClick={this.reload} className=" mr-3" to="/vocabulary">Vocabulary</Link>

                            </NavItem>
                            <NavItem>

                                <Link onClick={this.reload} className=" mr-3" to="/short-story">Short Story</Link>

                            </NavItem>
                            <NavItem>

                                <Link onClick={this.reload} className=" mr-3" to="/game">Game</Link>

                            </NavItem>
                            <NavItem>

                                <Link onClick={this.reload} className=" mr-3" to="/help">Help</Link>

                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </React.Fragment>
        );
    }
}

export default Header;
