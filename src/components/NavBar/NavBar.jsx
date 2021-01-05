import './NavBar.css';
import React, { Component } from 'react';
import { menuItems } from './MenuItems';
import { Button } from '../Button';

class NavBar extends Component {
    state = { clicked: false };

    handleClick = () => {
        this.setState({ clicked: !this.state.clicked })
    };

    render() {
        return(
            <nav className="NavBar">
                <h1 className="nav-bar-logo">React<i className="fab fa-react"></i></h1>
                <div className="menu-icon" onClick={this.handleClick}>
                    <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>
                <ul className={'nav-menu' + (this.state.clicked ?  ' active' : '')}>
                    {menuItems.map((item, index) => {
                        return (
                            <li key={index}>
                                <a className={item.cName} href={item.url}>
                                    {item.title}
                                </a>
                            </li>
                        )
                    })}
                </ul>
                <Button>Sign Up</Button>
            </nav>
        );
    }
}

export default NavBar;