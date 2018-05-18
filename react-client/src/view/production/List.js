import React, {Component} from "react";
import {Button, Dimmer, Header, Icon, Image, Label, Loader, Menu, Modal, Segment, Table} from "semantic-ui-react";

class List extends Component {

    constructor(props) {
        super(props)
        this.state =
            {
                isMounted: false,
            }
    }

    componentDidMount() {
    }

    componentWillMount() {
        setTimeout(function () { //Start the timer
            this.setState({isMounted: true}) //After 1 second, set render to true
        }.bind(this), 1000)
    }

    render() {
        return (
            !this.state.isMounted ?
                <Dimmer active inverted>
                    <Loader inverted>Loading</Loader>
                </Dimmer> :
                <Table celled>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>Header</Table.HeaderCell>
                            <Table.HeaderCell>Header</Table.HeaderCell>
                            <Table.HeaderCell>Header</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>

                    <Table.Body>
                        <Table.Row>
                            <Table.Cell>Cell</Table.Cell>
                            <Table.Cell>Cell</Table.Cell>
                            <Table.Cell>Cell</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>Cell</Table.Cell>
                            <Table.Cell>Cell</Table.Cell>
                            <Table.Cell>Cell</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>Cell</Table.Cell>
                            <Table.Cell>Cell</Table.Cell>
                            <Table.Cell>Cell</Table.Cell>
                        </Table.Row>
                    </Table.Body>

                    <Table.Footer>
                        <Table.Row>
                            <Table.HeaderCell/>
                            <Table.HeaderCell/>
                            <Table.HeaderCell>
                                <Modal style={{
                                    marginTop: '10px !important',
                                    marginLeft: 'auto',
                                    marginRight: 'auto'
                                }} trigger={<Button floated='right' icon labelPosition='left' primary size='small'>
                                    <Icon name='user'/> Add User
                                </Button>}>
                                    <Header icon='archive' content='Archive Old Messages'/>
                                    <Modal.Content>
                                        <p>Your inbox is getting full, would you like us to enable automatic archiving
                                            of old messages?</p>
                                    </Modal.Content>
                                    <Modal.Actions>
                                        <Button color='red'>
                                            <Icon name='remove'/> No
                                        </Button>
                                        <Button color='green'>
                                            <Icon name='checkmark'/> Yes
                                        </Button>
                                    </Modal.Actions>
                                </Modal>
                            </Table.HeaderCell>
                        </Table.Row>
                        <Table.Row>
                            <Table.HeaderCell colSpan='3'>
                                <Menu floated='right' pagination>
                                    <Menu.Item as='a' icon>
                                        <Icon name='chevron left'/>
                                    </Menu.Item>
                                    <Menu.Item as='a'>1</Menu.Item>
                                    <Menu.Item as='a'>2</Menu.Item>
                                    <Menu.Item as='a'>3</Menu.Item>
                                    <Menu.Item as='a'>4</Menu.Item>
                                    <Menu.Item as='a' icon>
                                        <Icon name='chevron right'/>
                                    </Menu.Item>
                                </Menu>
                            </Table.HeaderCell>
                        </Table.Row>
                    </Table.Footer>
                </Table>
        )
    }


}

export default List