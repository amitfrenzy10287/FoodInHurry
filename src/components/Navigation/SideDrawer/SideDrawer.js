import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
 
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import {Link} from 'react-router-dom'; 

import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import red from '@material-ui/core/colors/red';
import blue from '@material-ui/core/colors/blue';
import SvgIcon from '@material-ui/core/SvgIcon';
// import Collapse from 'material-ui/transitions/Collapse';

const drawerWidth = 240;

function HomeIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="M12 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm7-7H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-1.75 9c0 .23-.02.46-.05.68l1.48 1.16c.13.11.17.3.08.45l-1.4 2.42c-.09.15-.27.21-.43.15l-1.74-.7c-.36.28-.76.51-1.18.69l-.26 1.85c-.03.17-.18.3-.35.3h-2.8c-.17 0-.32-.13-.35-.29l-.26-1.85c-.43-.18-.82-.41-1.18-.69l-1.74.7c-.16.06-.34 0-.43-.15l-1.4-2.42c-.09-.15-.05-.34.08-.45l1.48-1.16c-.03-.23-.05-.46-.05-.69 0-.23.02-.46.05-.68l-1.48-1.16c-.13-.11-.17-.3-.08-.45l1.4-2.42c.09-.15.27-.21.43-.15l1.74.7c.36-.28.76-.51 1.18-.69l.26-1.85c.03-.17.18-.3.35-.3h2.8c.17 0 .32.13.35.29l.26 1.85c.43.18.82.41 1.18.69l1.74-.7c.16-.06.34 0 .43.15l1.4 2.42c.09.15.05.34-.08.45l-1.48 1.16c.03.23.05.46.05.69z" />
    </SvgIcon>
  );
}
function MenuIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
    </SvgIcon>
  );
}
function RightIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
    </SvgIcon>
  );
}
function LeftIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
    </SvgIcon>
  );
} 
function ExpandMore(props) {
  return (
    <SvgIcon {...props}>
      <path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z" />
    </SvgIcon>
  );
}
function ExpandLess(props) {
  return (
    <SvgIcon {...props}>
      <path d="M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z" />
    </SvgIcon>
  );
} 

const styles = theme => ({
  root: {
    flexGrow: 1,
    height: 750,
    zIndex: 1,
    overflow: 'hidden',
    position: 'relative',
    display: 'flex',
  },
  icon: {
    margin: '0px',//theme.spacing.unit * 2,
  },
  iconHover: {
    margin: theme.spacing.unit * 2,
    '&:hover': {
      color: red[800],
    },
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    backgroundColor:'#8c51ff',
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 36,
  },
  hide: {
    display: 'none',
  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }, 
  navTab: {
    display: 'flex',
    flexWrap: 'wrap',
    paddingLeft: '0',
    listStyle: 'none',
    margin: '0px',  
  },
  navLink:{
    cursor: 'pointer',
    display: 'block',
    fontSize: '1.077rem',
    padding: '15px 26px',
    textDecoration: 'none',
  },
  activeNav:{
    borderBottom: '2px solid #a66fff',
    color: '#9646ff',
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing.unit * 7,
    [theme.breakpoints.down('sm')]: {
      width: '0px',
    },
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing.unit * 3,
  },
  nested: {
    paddingLeft: theme.spacing.unit * 4,
  },
});

class sideDrawer extends React.Component {
  state = {
    open: false,
    listopen:false,
  };

  handleDrawerOpen = () => {
    this.setState({ open: true });
  };

  handleDrawerClose = () => {
    this.setState({ open: false });
  };

  handleClick = () => {
    this.setState(state => ({ listopen: !state.listopen }));
  };

  render() {
    const { classes, theme } = this.props;

    return (
      <div className={classes.root}>
        <AppBar
          position="absolute"
          className={classNames(classes.appBar, this.state.open && classes.appBarShift)}
        >
          <Toolbar disableGutters={!this.state.open}>
            <IconButton
              color="inherit"
              aria-label="Open drawer"
              onClick={this.handleDrawerOpen}
              className={classNames(classes.menuButton, this.state.open && classes.hide)}
            >
              <MenuIcon className={classes.icon} fontSize="small" />
            </IconButton>
            <Typography variant="h6" color="inherit" noWrap>
              FoodInHurry
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer
          variant="permanent"
          classes={{
            paper: classNames(classes.drawerPaper, !this.state.open && classes.drawerPaperClose),
          }}
          open={this.state.open}
        >
          <div className={classes.toolbar}>
            <IconButton onClick={this.handleDrawerClose}>
              {theme.direction === 'rtl' ? <LeftIcon fontSize="small" /> : <RightIcon fontSize="small" />}
            </IconButton>
          </div>
          <Divider />
          <List component="nav" >
              <ListItem button onClick={this.handleClick}>
                <ListItemIcon>
                  <HomeIcon className={classes.icon} color="primary" />
                </ListItemIcon> 
                <ListItemText inset primary="Menu Settings" />
                {this.state.listopen ? <ExpandLess /> : <ExpandMore />}
              </ListItem>
              <Collapse in={this.state.listopen} timeout="auto" unmountOnExit>
                <List component="div">
                  <ListItem button className={classes.nested}>
                    <ListItemIcon>
                      <HomeIcon className={classes.icon} color="primary" />
                    </ListItemIcon> 
                    <ListItemText inset primary="Store Settings" /> 
                  </ListItem>
                  <ListItem button className={classes.nested}>
                    <ListItemIcon>
                      <HomeIcon className={classes.icon} color="primary" />
                    </ListItemIcon> 
                    <ListItemText inset primary="Address Settings" /> 
                  </ListItem>
                  <ListItem button className={classes.nested}>
                    <ListItemIcon>
                      <HomeIcon className={classes.icon} color="primary" />
                    </ListItemIcon> 
                    <ListItemText inset primary="Takeout Settings" /> 
                  </ListItem>
                  <ListItem button className={classes.nested}>
                    <ListItemIcon>
                      <HomeIcon className={classes.icon} color="primary" />
                    </ListItemIcon> 
                    <ListItemText inset primary="Delivery Settings" /> 
                  </ListItem>
                  <ListItem button className={classes.nested}>
                    <ListItemIcon>
                      <HomeIcon className={classes.icon} color="primary" />
                    </ListItemIcon> 
                    <ListItemText inset primary="Coupon Codes" /> 
                  </ListItem>
                </List>
              </Collapse>
              <ListItem button> 
                <ListItemIcon>
                  <HomeIcon className={classes.icon} color="primary" />
                </ListItemIcon>
                <ListItemText inset primary="Settings" />
              </ListItem>
              <ListItem button>
                <ListItemIcon>
                  <HomeIcon className={classes.icon} color="primary" />
                </ListItemIcon>
                <ListItemText inset primary="Notification" /> 
              </ListItem> 
              <ListItem button> 
                <ListItemIcon>
                  <HomeIcon className={classes.icon} color="primary" />
                </ListItemIcon>
                <ListItemText inset primary="Configuration" />
              </ListItem>
            </List> 
        </Drawer> 
      </div>
    );
  }
}

sideDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};
 
export default withStyles(styles, { withTheme: true })(sideDrawer); 
