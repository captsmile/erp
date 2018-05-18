import React, {Component} from 'react';
import Header from "./view/Header";
import {withRouter, Route} from 'react-router-dom'
import Login from "./view/Login";
import Home from "./view/Home";
import Chat from "./view/Chat";
import Footer from "./view/Footer";
import PrivateRoute from "./util/PrivateRoute";
import Dashboard from "./view/Dashboard";
import List from "./view/production/List";
import {Container} from "semantic-ui-react";

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            currentUser: null,
            isAuthenticated: false,
            isLoading: false
        }
    }

    updateData = (value) => {
        this.setState({isAuthenticated: value})
        this.props.history.push("/");
        //console.log(this.state.isAuthenticated)
    }

    render() {
        return (
            <div>
                <Header isAuthenticated={this.state.isAuthenticated} updateData={this.updateData}/>
                <Container fluid>
                    <Route exact path="/" component={Dashboard}/>
                    <Route exact path="/auth" render={(props) => <Login updateData={this.updateData} {...props}/>}/>
                    <Route exact path="/chat" component={Chat}/>
                    <Route exact path="/product/list" component={List}/>
                    <PrivateRoute authenticated={this.state.isAuthenticated} path="/home"
                                  component={Home}></PrivateRoute>
                    {/*<Footer/>*/}
                </Container>
            </div>
        );
    }

}

export default withRouter(App);
