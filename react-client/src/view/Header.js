import React, {Component} from "react";
import {Link} from "react-router-dom";
import {Image, Menu} from "semantic-ui-react";
import {withRouter, Route} from 'react-router-dom'
import "./Header.css"

class Header extends Component {

    state = {}

    handleItemClick = (e, {name}) => this.setState({activeItem: name})

    render() {
        const {activeItem} = this.state

        const isLoggedIn = this.props.isAuthenticated;

        const userButton = isLoggedIn ? (
            <Menu.Item as={Link} to='/' position='right' name='logout' active={activeItem === 'logout'}
                       onClick={() => {this.handleItemClick; this.props.updateData(!this.props.isAuthenticated)}}>
                <div><Image
                            src='https://react.semantic-ui.com/assets/images/avatar/large/patrick.png' avatar/>
                    <span>Logout</span>
                </div>
            </Menu.Item>
        ) : (
            <Menu.Item as={Link} to='/auth' position='right' name='login' active={activeItem === 'auth'}
                       onClick={this.handleItemClick}/>
        );

        return (
            <Menu>
                <Menu.Item header>Vitalii</Menu.Item>
                <Menu.Item as={Link} to='/' name='dashboard' active={activeItem === 'dashboard'}
                           onClick={this.handleItemClick}/>
                <Menu.Item as={Link} to='/home' name='home' active={activeItem === 'home'}
                           onClick={this.handleItemClick}/>
                <Menu.Item as={Link} to='/chat' name='chat' active={activeItem === 'chat'}
                           onClick={this.handleItemClick}/>
                {userButton}
            </Menu>
        );
    }
}

export default withRouter(Header);