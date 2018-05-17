import React, {Component} from "react";
import {Link} from "react-router-dom";
import {Menu} from "semantic-ui-react";

class Header extends Component {

    state = {}

    handleItemClick = (e, {name}) => this.setState({activeItem: name})

    render() {
        const {activeItem} = this.state

        return (
            <Menu>
                <Menu.Item header>Vitalii</Menu.Item>
                <Menu.Item as={Link} to='/' name='dashboard' active={activeItem === 'dashboard'} onClick={this.handleItemClick}/>
                <Menu.Item as={Link} to='/home' name='home' active={activeItem === 'home'} onClick={this.handleItemClick}/>
                <Menu.Item as={Link} to='/chat' name='chat' active={activeItem === 'chat'} onClick={this.handleItemClick}/>
                <Menu.Item as={Link} to='/auth' position='right' name='auth' active={activeItem === 'auth'} onClick={this.handleItemClick}/>
            </Menu>

        );
    }
}

export default Header;