import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Probar from './Probar';
import { Box, LinearProgress } from '@material-ui/core';

import 'moment/locale/ko';
import hostdata from "../hostData.json"
import Task from './Task';

const useStyles = makeStyles({
    depositContext: {
        flex: 1,
    },
});

export default function Work(departure, destination) {
    const classes = useStyles();

    return (
        <React.Fragment>
            <Typography component="h2" variant="h4" color="primary" gutterBottom>
                Work
            </Typography>
            <Box marginTop={3}>
                <Typography component="p" variant="h5">
                    현재 작업
                </Typography>
                <Typography color="textSecondary" className={classes.depositContext} variant="h6">
                    <Task>{hostdata.status}</Task>
                </Typography>
                <Box marginTop={1} width="50%">
                    <LinearProgress color={'secondary'} />
                </Box>
            </Box>
            <Box marginTop={3}>
                <Typography component="p" variant="h5">
                    전체 작업
                </Typography>
                <Typography color="textSecondary" className={classes.depositContext} variant="h6">
                    {"하적장 --> 창고"}
                </Typography>
                <Probar />
            </Box>

        </React.Fragment>
    );
}

Work.defaultProps = {
    data: 'B',
    departure: '하적장',
    destination: '창고',
}