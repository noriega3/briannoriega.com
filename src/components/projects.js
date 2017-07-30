// @flow
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';
import AppBar from "material-ui/AppBar";
import Toolbar from "material-ui/Toolbar";
import Typography from "material-ui/Typography";
import Button from "material-ui/Button";
import IconButton from "material-ui/IconButton";
import SvgIcon from "material-ui/SvgIcon";
import MenuIcon from "material-ui-icons/Menu";
import Chip from "material-ui/Chip";
import Avatar from "material-ui/Avatar";
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';

const styleSheet = createStyleSheet(theme => ({
    root: theme.mixins.gutters({
        paddingTop: 16,
        paddingBottom: 16,
    }),
    paper: {
        margin: '0 auto',
        maxWidth: 1170,
        transform: 'translateY(-80px)'
    },
    flex: {
        flexDirection: 'right',
        flex: 1,
    },
    title: {
        textAlign: 'left',
        marginBottom: 16,
        fontSize: 14,
        color: theme.palette.text.secondary,
    },
    heroText: {

    },
    button: {
        margin: theme.spacing.unit,
    },
    chip: {
        margin: theme.spacing.unit,
    },
    row: {
        display: 'flex',
        flexWrap: 'wrap'
    },
    badge: {
        margin: `0 ${theme.spacing.unit * 2}px`,
    },
    card: {
        textAlign: 'left',
        maxWidth: 345,
    },
}));

function Projects(props) {
    const classes = props.classes;
    return (
        <Paper classes={{root: classes.root}} className={classes.paper} elevation={6} component="section">
            <Typography type="display2" component="h2" className={classes.title}>
                The Works
            </Typography>
            <Grid container gutter={24}>
                <Grid item lg={3}>
                    <Card className={classes.card}>
                        <CardContent>
                            <Typography type="body1" className={classes.title}>
                                In Progress
                            </Typography>
                            <Typography type="headline" component="h2">
                                briannoriega.com
                            </Typography>
                            <div className={classes.row}>
                                <Chip label="ReactJS" className={classes.chip} />
                                <Chip label="NodeJS" className={classes.chip} />
                                <Chip label="HTML" className={classes.chip} />
                                <Chip label="CSS" className={classes.chip} />
                            </div>
                        </CardContent>
                        <CardActions>
                            <Button dense color="primary">
                                View Source
                            </Button>
                            <Button dense disabled color="primary">
                                Website
                            </Button>
                        </CardActions>
                    </Card>
                </Grid>
                <Grid item lg={3}>
                    <Card className={classes.card}>
                        <CardContent>
                            <Typography type="body1" className={classes.title}>
                                In Progress
                            </Typography>
                            <Typography type="headline" component="h2">
                                omgyumyum.com
                            </Typography>
                            <div className={classes.row}>
                                <Chip label="ReactJS" className={classes.chip} />
                                <Chip label="NodeJS" className={classes.chip} />
                                <Chip label="HTML" className={classes.chip} />
                                <Chip label="CSS" className={classes.chip} />
                            </div>
                        </CardContent>
                        <CardActions>
                            <Button dense color="primary">
                                View Source
                            </Button>
                            <Button dense disabled color="primary">
                                Website
                            </Button>
                        </CardActions>
                    </Card>
                </Grid>
                <Grid item lg={3}>
                    <Card className={classes.card}>
                        <CardContent>
                            <Typography type="body1" className={classes.title}>
                                In Progress
                            </Typography>
                            <Typography type="headline" component="h2">
                                "Color" Game Unity Project
                            </Typography>
                            <div className={classes.row}>
                                <Chip label="Unity 2D" className={classes.chip} />
                                <Chip label="C#" className={classes.chip} />
                                <Chip label="NodeJS" className={classes.chip} />
                                <Chip label="Redis" className={classes.chip} />
                            </div>
                        </CardContent>
                        <CardActions>
                            <Button dense disabled color="primary">
                                Private Source
                            </Button>
                        </CardActions>
                    </Card>
                </Grid>
                <Grid item lg={3}>
                    <Card className={classes.card}>
                        <CardContent>
                            <Typography type="body1" className={classes.title}>
                                Live
                            </Typography>
                            <Typography type="headline" component="h2">
                                Color Pop
                            </Typography>
                            <div className={classes.row}>
                                <Chip label="Corona SDK" className={classes.chip} />
                                <Chip label="Lua" className={classes.chip} />
                                <Chip label="Android" className={classes.chip} />
                                <Chip label="Mac OS" className={classes.chip} />
                            </div>
                        </CardContent>
                        <CardActions>
                            <Button dense disabled color="primary">
                                App Store
                            </Button>
                            <Button dense color="primary">
                                Google Play
                            </Button>
                        </CardActions>
                    </Card>
                </Grid>
                <Grid item lg={3}>
                    <Card className={classes.card}>
                        <CardContent>
                            <Typography type="body1" className={classes.title}>
                                Live
                            </Typography>
                            <Typography type="headline" component="h2">
                                Slot Machine Native
                            </Typography>
                            <div className={classes.row}>
                                <Chip label="Android" className={classes.chip} />
                                <Chip label="Java" className={classes.chip} />
                                <Chip label="Windows" className={classes.chip} />
                            </div>
                        </CardContent>
                        <CardActions>
                            <Button dense color="primary">
                                View Source
                            </Button>
                            <Button dense color="primary">
                                Google Play
                            </Button>
                        </CardActions>
                    </Card>
                </Grid>
                <Grid item lg={3}>
                    <Card className={classes.card}>
                        <CardContent>
                            <Typography type="body1" className={classes.title}>
                                Live
                            </Typography>
                            <Typography type="headline" component="h2">
                                Slots Free Social Casino
                            </Typography>
                            <div className={classes.row}>
                                <Chip label="Corona SDK" className={classes.chip} />
                                <Chip label="Lua" className={classes.chip} />
                                <Chip label="NodeJS" className={classes.chip} />
                                <Chip label="Redis" className={classes.chip} />
                                <Chip label="Android" className={classes.chip} />
                                <Chip label="Mac OS" className={classes.chip} />
                            </div>
                        </CardContent>
                        <CardActions>
                            <Button dense disabled color="primary">
                                App Store
                            </Button>
                            <Button dense color="primary">
                                Google Play
                            </Button>
                        </CardActions>
                    </Card>
                </Grid>
                <Grid item lg={3}>
                    <Card className={classes.card}>
                        <CardContent>
                            <Typography type="body1" className={classes.title}>
                                Live
                            </Typography>
                            <Typography type="headline" component="h2">
                                ggwpapparel.com
                            </Typography>
                            <div className={classes.row}>
                                <Chip label="ReactJS" className={classes.chip} />
                                <Chip label="NodeJS" className={classes.chip} />
                            </div>
                        </CardContent>
                        <CardActions>
                            <Button dense color="primary">
                                View Source
                            </Button>
                            <Button dense color="primary">
                                Demo
                            </Button>
                        </CardActions>
                    </Card>
                </Grid>
                <Grid item lg={3}>
                    <Card className={classes.card}>
                        <CardContent>
                            <Typography type="body1" className={classes.title}>
                                Website
                            </Typography>
                            <Typography type="headline" component="h2">
                                Dashboard for High Profile Client
                            </Typography>
                            <div className={classes.row}>
                                <Chip label="PHP" className={classes.chip} />
                                <Chip label="JQuery" className={classes.chip} />
                                <Chip label="HTML" className={classes.chip} />
                                <Chip label="CSS" className={classes.chip} />
                            </div>
                        </CardContent>
                        <CardActions>
                            <Button dense color="primary">
                                View Source
                            </Button>
                        </CardActions>
                    </Card>
                </Grid>
                <Grid item lg={3}>
                    <Card className={classes.card}>
                        <CardContent>
                            <Typography type="body1" className={classes.title}>
                                Website
                            </Typography>
                            <Typography type="headline" component="h2">
                                Landing Page for High Profile Client
                            </Typography>
                            <div className={classes.row}>
                                <Chip label="PHP" className={classes.chip} />
                                <Chip label="JQuery" className={classes.chip} />
                                <Chip label="HTML" className={classes.chip} />
                                <Chip label="CSS" className={classes.chip} />
                            </div>
                        </CardContent>
                        <CardActions>
                            <Button dense color="primary">
                                View Source
                            </Button>
                        </CardActions>
                    </Card>
                </Grid>
            </Grid>
        </Paper>
        );
}

Projects.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styleSheet)(Projects);
