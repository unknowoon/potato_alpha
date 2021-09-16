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

const truckType = [ //트럭의 종류를 선택하는 버튼 묶음
    {
        id: 1,
        name: "20T TRUCK"
    }, {
        id: 2,
        name: "25T TRUCK"
    }
]

const truckLocation = [ //트럭의 위치를 선택하는 버튼 묶음
    {
        id: 3,
        name: "하적장"
    }
]

class TruckChoice extends Component {
    state = { //cc1 = truckType에 선택된 버튼의 id, cc2 = truckLocation에 선택된 버튼의 id
        cc1: null,
        cc2: null
    };

    changeColor = row => { //4. row에 id값이 들어감
        this.setState(colorchange(this.state, row)) //state값과 row값 이동
        //console.log(this.state)
    }

    render() {
        const {classes} = this.props;
        return (
            <div >
                <Grid container="container" item="item" xs={12} spacing={0}>
                    <Paper className={classes.paper}>
                        <Typography component="h2" variant="h4" color="primary" gutterBottom>
                            {'Truck'}
                        </Typography>
                        <Grid item="item">
                            종류 : {
                                truckType.map((list => ( //truckType에 있는 값을 참고해 버튼을 생성한다.
                                    <Button
                                        id={list.id}
                                        name={list.name}
                                        afd={this.state.cc1} //버튼의 색갈을 지정함(Buttonst.js에 color에 영향을 줌
                                        clickColor={this.changeColor} //3. changeColor에 버튼의 id값을 보냄
                                        //clickHandler={this.handleClick}
                                        ></Button>
                                )))
                            }
                        </Grid>

                        <Grid>
                            위치 : {
                                truckLocation.map((list => (
                                    <Button
                                        id={list.id}
                                        name={list.name}
                                        afd={this.state.cc2}
                                        clickColor={this.changeColor}
                                        clickHandler={this.handleClick}></Button>
                                )))
                            }
                        </Grid>

                    </Paper>
                </Grid>
            </div>
        )
    }
}
export default withStyles(styles)(TruckChoice);
  