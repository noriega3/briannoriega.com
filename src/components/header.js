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
import Card, {CardContent, CardActions, CardMedia} from "material-ui/Card";
import Avatar from "material-ui/Avatar";
import Badge from "material-ui/Badge";

const styleSheet = createStyleSheet(theme => ({
    root:{
        marginLeft: 'auto',
        maxWidth: 1170
    },
    flex: {
        display: 'flex'
    },
    flexGrow: { flex: '1 1 auto' },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    hero: {
        background: 'url("assets/header.jpeg") no-repeat center center / cover fixed',
        paddingTop: 80,
        paddingBottom: 80,
        color: '#fff'
    },
    card:{
        margin: '100px auto',
        maxWidth: 450,
        justifyContent: 'center',
        color: theme.palette.text.secondary,
    },
    bigAvatar: {
        margin: '10px auto',
        width: 100,
        height: 100,
    },
    paper: {
        padding: 16,
        color: theme.palette.text.secondary,
    },
    button: {
        margin: theme.spacing.unit,
    },
    chip: {
        margin: theme.spacing.unit,
    },
    row: {
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap'
    },
    badge: {
        margin: `0 ${theme.spacing.unit * 2}px`,
    },
    heroText: {
        color: theme.palette.text.accent,
        textAlign: 'left'
    },
    title: {
        marginBottom: 16,
        fontSize: 14,
        color: theme.palette.text.secondary,
    },
    pos: {
        marginBottom: 12,
    },
    toolbar: {
        marginLeft: 'auto'
    },
    maxWidth: {
        alignItems: 'center',
        flex: 1,
        maxWidth: 1170
    },
}));

const GitHubIcon = props =>
    <SvgIcon {...props}>
        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
    </SvgIcon>;

function Header(props) {
    const classes = props.classes;
    return (
        <Paper className={classes.hero} elevation={5} component="header">
             <AppBar position="fixed" color="primary" component="nav">
                    <Toolbar>
                        <div className={classes.flexGrow} />
                        <Button color ="contrast">Home</Button>
                        <Button color ="contrast">Projects</Button>
                        <Button color ="contrast">About</Button>
                        <Button color ="contrast">Resume</Button>
                        <Button color ="contrast">Contact</Button>
                        <IconButton color="contrast" className={classes.button} aria-label="Check out Brian Noriega's github.">
                            <GitHubIcon />
                        </IconButton>
                    </Toolbar>
                </AppBar>
                <Card raised={true} className={classes.card}>
                    <CardContent>
                        <CardMedia className={classes.cardMedia}>
                            <Avatar aria-label="Me" src="assets/me.jpg" className={classes.bigAvatar} />
                        </CardMedia>
                        <Typography type="headline" color="inherit" component="h2">
                            Brian Noriega
                        </Typography>
                        <Typography component="p" color="inherit" className={classes.pos}>
                            A software developer from Jacksonville FL / Cleveland, OH
                        </Typography>
                    </CardContent>
                    <CardActions  disableActionSpacing>
                        <div className={classes.flexGrow} />
                        <Button raised color="primary" className={classes.button}>
                            Learn More
                        </Button>
                    </CardActions>
                </Card>
        </Paper>
        );
}

Header.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styleSheet)(Header);
