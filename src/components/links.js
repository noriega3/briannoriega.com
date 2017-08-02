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
        margin: `0 ${theme.spacing.unit * 1.5}px`,
    },
    card: {
        width: 275,
        height: 175,
        justifyContent: 'center',
    },
    icon:{
        width: 100,
        height: 100,
        justifyContent: 'center',
    }
}));

const GitHubIcon = props =>
    <SvgIcon {...props}>
        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
    </SvgIcon>

const LinkedInIcon = props =>
    <SvgIcon viewBox="0 0 16 16" {...props}>
        <path d="M13.632 13.635h-2.37V9.922c0-.886-.018-2.025-1.234-2.025-1.235 0-1.424.964-1.424 1.96v3.778h-2.37V6H8.51v1.04h.03c.318-.6 1.092-1.233 2.247-1.233 2.4 0 2.845 1.58 2.845 3.637v4.188zM3.558 4.955c-.762 0-1.376-.617-1.376-1.377 0-.758.614-1.375 1.376-1.375.76 0 1.376.617 1.376 1.375 0 .76-.617 1.377-1.376 1.377zm1.188 8.68H2.37V6h2.376v7.635zM14.816 0H1.18C.528 0 0 .516 0 1.153v13.694C0 15.484.528 16 1.18 16h13.635c.652 0 1.185-.516 1.185-1.153V1.153C16 .516 15.467 0 14.815 0z" />
    </SvgIcon>

const InstagramIcon = props =>
    <SvgIcon viewBox="0 0 16 16" {...props}>
        <path d="M8 0C5.827 0 5.555.01 4.702.048 3.85.088 3.27.222 2.76.42c-.526.204-.973.478-1.417.923-.445.444-.72.89-.923 1.417-.198.51-.333 1.09-.372 1.942C.008 5.555 0 5.827 0 8s.01 2.445.048 3.298c.04.852.174 1.433.372 1.942.204.526.478.973.923 1.417.444.445.89.72 1.417.923.51.198 1.09.333 1.942.372.853.04 1.125.048 3.298.048s2.445-.01 3.298-.048c.852-.04 1.433-.174 1.942-.372.526-.204.973-.478 1.417-.923.445-.444.72-.89.923-1.417.198-.51.333-1.09.372-1.942.04-.853.048-1.125.048-3.298s-.01-2.445-.048-3.298c-.04-.852-.174-1.433-.372-1.942-.204-.526-.478-.973-.923-1.417-.444-.445-.89-.72-1.417-.923-.51-.198-1.09-.333-1.942-.372C10.445.008 10.173 0 8 0zm0 1.44c2.136 0 2.39.01 3.233.048.78.036 1.203.166 1.485.276.374.145.64.318.92.598.28.28.453.546.598.92.11.282.24.705.276 1.485.038.844.047 1.097.047 3.233s-.01 2.39-.05 3.233c-.04.78-.17 1.203-.28 1.485-.15.374-.32.64-.6.92-.28.28-.55.453-.92.598-.28.11-.71.24-1.49.276-.85.038-1.1.047-3.24.047s-2.39-.01-3.24-.05c-.78-.04-1.21-.17-1.49-.28-.38-.15-.64-.32-.92-.6-.28-.28-.46-.55-.6-.92-.11-.28-.24-.71-.28-1.49-.03-.84-.04-1.1-.04-3.23s.01-2.39.04-3.24c.04-.78.17-1.21.28-1.49.14-.38.32-.64.6-.92.28-.28.54-.46.92-.6.28-.11.7-.24 1.48-.28.85-.03 1.1-.04 3.24-.04zm0 2.452c-2.27 0-4.108 1.84-4.108 4.108 0 2.27 1.84 4.108 4.108 4.108 2.27 0 4.108-1.84 4.108-4.108 0-2.27-1.84-4.108-4.108-4.108zm0 6.775c-1.473 0-2.667-1.194-2.667-2.667 0-1.473 1.194-2.667 2.667-2.667 1.473 0 2.667 1.194 2.667 2.667 0 1.473-1.194 2.667-2.667 2.667zm5.23-6.937c0 .53-.43.96-.96.96s-.96-.43-.96-.96.43-.96.96-.96.96.43.96.96z" />
    </SvgIcon>

const GMailIcon = props =>
    <SvgIcon viewBox="0 0 16 16" {...props}>
        <path d="M16 3v10c0 .567-.433 1-1 1h-1V4.925L8 9.233 2 4.925V14H1c-.567 0-1-.433-1-1V3c0-.283.108-.533.287-.712C.467 2.107.718 2 1 2h.333L8 6.833 14.667 2H15c.283 0 .533.108.713.288.179.179.287.429.287.712z" />
    </SvgIcon>

function Projects(props) {
    const classes = props.classes;
    return (
        <Paper classes={{root: classes.root}} className={classes.paper} elevation={6} component="section">
            <Grid container gutter={24}>
                <Grid item lg={3}>
                    <Button href="https://www.github.com/noriega3" className={classes.card}>
                        <GitHubIcon href="https://github.com/noriega3" className={classes.icon}/>
                        <Button dense disabled color="primary">
                            GitHub
                        </Button>
                    </Button>
                </Grid>
                <Grid item lg={3}>
                    <Button href="https://www.linkedin.com/in/brian-noriega-26a76230/"  className={classes.card}>
                            <LinkedInIcon className={classes.icon}/>
                            <Button dense disabled color="primary">
                                LinkedIn
                            </Button>
                    </Button>
                </Grid>
                <Grid item lg={3}>
                    <Button href="https://www.instagram.com/noriega3" className={classes.card}>
                            <InstagramIcon className={classes.icon}/>
                            <Button dense disabled color="primary">
                                Instagram
                            </Button>
                    </Button>
                </Grid>
                <Grid item lg={3}>
                    <Button href="mailto:brian.noriega3@gmail.com" className={classes.card}>
                            <GMailIcon className={classes.icon}/>
                            <Button dense disabled color="primary">
                                Email
                            </Button>
                    </Button>
                </Grid>
            </Grid>
        </Paper>
        );
}

Projects.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styleSheet)(Projects);
