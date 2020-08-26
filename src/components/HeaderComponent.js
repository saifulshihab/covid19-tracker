import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import PublicIcon from '@material-ui/icons/Public';
import { headerStyles } from './AppStyles';
import GitHubIcon from '@material-ui/icons/GitHub';
import Button from '@material-ui/core/Button';

export default function Header() {
  const classes = headerStyles();

  return (
    <div className={classes.root}>
      <AppBar position="fixed">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
          >
            <PublicIcon />
          </IconButton>
          <Typography className={classes.title} variant="h6" noWrap>
            Covid-19 Tracker
          </Typography>
          <div>
            <Button
              variant="contained"
              color="primary"
              target="_blank"
              href="https://github.com/saifulshihab/covid19-tracker"
            >
            <GitHubIcon />
            </Button>
            
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
