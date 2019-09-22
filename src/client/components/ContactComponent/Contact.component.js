import React from "react";
import { withStyles, Typography, Paper } from "@material-ui/core";
import { xhr } from "../../../utils/util";
import config from "../../../config";

const ContactComponentStyles = theme => ({
    root: {
        
    }
});

class ContactComponent extends React.Component {
    constructor(){
        super();
        this.state = {

        }
    }

    render(){
        let { classes } = this.props;

        return (
            <div className={`${classes.root}`}>
                <Paper className={`paper-border-top`}>
                    <Typography color="textPrimary">Contact</Typography>
                </Paper>
            </div>
        )
    }
}

export default withStyles(ContactComponentStyles)(ContactComponent);