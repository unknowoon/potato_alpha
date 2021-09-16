import React, {Component} from "react"
import Button from './Buttonst'
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import {withStyles} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import colorchange from "./colorchange";

const styles = theme => ({
    paper: {
        padding: theme.spacing(2),
        color: theme.palette.text.primary,
        width: "100%"
    }
});

const storeLocation = [
    {
        id: 9,
        name: "창고"
    }
]

class WarehouseChoice extends Component {
    state = {
        cc5: null
    };

    changeColor = row => {
        this.setState(colorchange(this.state, row))
        console.log(this.state)
    }

    render() {
        const {classes} = this.props;
        return (
            <div>
                <Grid container="container" item="item" xs={12} spacing={0}>
                    <Paper className={classes.paper}>

                        <Typography component="h2" variant="h4" color="primary" gutterBottom>
                            {'Store'}
                        </Typography>

                        <Grid item="item">
                            위치 : {
                                storeLocation.map((list => (
                                    <Button
                                        id={list.id}
                                        name={list.name}
                                        afd={this.state.cc5}
                                        clickColor={this.changeColor}
                                        clickHandler={this.handleClick}></Button>
                                )))
                            }
                        </Grid>

                    </Paper>
                </Grid>
            </div>
        );
    }
}
export default withStyles(styles)(WarehouseChoice);
