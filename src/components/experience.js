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
import Badge from "material-ui/Badge";

const styleSheet = createStyleSheet(theme => ({
    root: {
        flexGrow: 1
    },
    flex: {
        flexDirection: 'right',
        flex: 1,
    },
    hero: {
        background: 'url("assets/header.jpeg") no-repeat center center / cover fixed',
        paddingTop: 80,
        paddingBottom: 80,
        color: '#fff'
    },
    heroText: {
        marginTop: 20,
        marginBottom: 20
    },
    paper: {
        padding: 16,
        textAlign: 'center',
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
}));

function Experience(props) {
    const classes = props.classes;
    return (
            <Paper elevation={0} component="section">
                <div className={classes.row}>
                    <Chip label="PHP" className={classes.chip} />
                    <Chip label="JavaScript" className={classes.chip} />
                    <Chip label="JQuery" className={classes.chip} />
                    <Chip label="ReactJS" className={classes.chip} />
                    <Chip label="NodeJS" className={classes.chip} />

                    <Chip label="Corona SDK" className={classes.chip} />
                    <Chip label="Lua" className={classes.chip} />

                    <Chip label="Unity" className={classes.chip} />
                    <Chip label="C#" className={classes.chip} />
                </div>
{/*                <div className={classes.row}>
                    <Chip label="MacOS" className={classes.chip} />
                    <Chip label="Windows" className={classes.chip} />
                    <Chip label="Android" className={classes.chip} />
                    <Chip label="iOS" className={classes.chip} />
                </div>
                <div className={classes.row}>
                    <Chip label="Subversion" className={classes.chip} />
                    <Chip label="Git" className={classes.chip} />
                </div>
                <div className={classes.row}>
                    <Chip label="TortoiseSVN" className={classes.chip} />
                    <Chip label="Cornerstone" className={classes.chip} />
                    <Chip label="SourceTree" className={classes.chip} />
                    <Chip label="Git Bash" className={classes.chip} />
                    <Chip label="NPM" className={classes.chip} />
                    <Chip label="Intellij Idea" className={classes.chip} />
                    <Chip label="Sublime Text" className={classes.chip} />
                </div>*/}
            </Paper>
        );
}

Experience.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styleSheet)(Experience);
