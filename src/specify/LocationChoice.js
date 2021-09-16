import React, {Component} from "react"
import Box from '@material-ui/core/Box'
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import {withStyles} from '@material-ui/core/styles';
import IconButton from "./IconButtonst";
import KeyDown from '@material-ui/icons/KeyboardArrowDown';
import KeyUp from '@material-ui/icons/KeyboardArrowUp';
import colorchange from "./colorchange";
import warehouse from "./warehouse.png"
import truck from "./truck.png"
import Typography from '@material-ui/core/Typography';


const styles = theme => ({
    paper: {
        padding: theme.spacing(2),

        color: theme.palette.text.primary,
        width: "100%"
    },
    truck: {
        position: 'relative',
        backgroundImage: `url(${truck})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        width: "182px",
        height: "182px"
    },
    warehouse: {
        position: 'relative',
        backgroundImage: `url(${warehouse})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        width: "185px",
        height: "185px"
    }
});

const way = [
    {
        id: 10,
        updown: <KeyUp/>
    }, {
        id: 11,
        updown: <KeyDown/>
    }
]

class Home extends Component {
    state = {
        cc6: null
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
                            {'Incoming-Outgoing'}
                        </Typography>
                        
                        <Box marginTop={5}>
                            <Grid container="container" justify="center">
                                <Grid className={classes.truck}></Grid>
                            </Grid>
                            <Grid container="container" item="item" xs={12}>
                                <Grid
                                    container="container"
                                    item="item"
                                    xs={12}
                                    justify="center"
                                    alignItems="center">
                                    {
                                        way.map((list => (
                                            <IconButton
                                                id={list.id}
                                                name={list.name}
                                                updown={list.updown}
                                                afd={this.state.cc6}
                                                clickColor={this.changeColor}
                                                clickHandler={this.handleClick}></IconButton>
                                        )))
                                    }
                                </Grid>
                            </Grid>
                            <Grid container="container" justify="center">
                                <Grid className={classes.warehouse}></Grid>
                            </Grid>
                        </Box>
                    </Paper>
                </Grid>
            </div>
        );
    }
}
export default withStyles(styles)(Home);
