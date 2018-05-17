import React, {Component} from "react";
import "./Footer.css";
import {Grid, Icon, Label} from "semantic-ui-react";

class Footer extends Component {
    render() {
        return (
            <div >
                <Grid centered columns={2}>
                    <Grid.Column>
                        <Label style={{flex:1}}>
                            <Icon name='mail'/> all right reserved Vitalii
                        </Label>
                    </Grid.Column>
                </Grid>
            </div>
        );
    }
}

export default Footer;