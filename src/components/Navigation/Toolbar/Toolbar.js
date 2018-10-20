import React,{Component} from 'react'; 
import NavigationItems from '../NavigationItems/NavigationItems';
import SideDrawer from '../SideDrawer/SideDrawer'; 
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography'; 
 
const styles = theme => ({
  drawerStyle: { 
    display:'none',
    [theme.breakpoints.down('sm')]: { // eslint-disable-line no-useless-computed-key
      display:'flex',
    }
  },
  navStyle: { 
    display:'none',
    [theme.breakpoints.up('md')]: { // eslint-disable-line no-useless-computed-key
      display:'flex'
    }
  },
});

function toolbar(props) {
  const { classes } = props; 
  return (
    <div>
      <div className={classes.navStyle}>
          <NavigationItems />
      </div>
      <div className={classes.drawerStyle}>
          <SideDrawer />
      </div>
    </div>
  );
}

toolbar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(toolbar); 