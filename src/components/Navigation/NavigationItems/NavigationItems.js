import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import {Link} from 'react-router-dom'; 

function TabContainer(props) {
  return (
    <Typography component="div" className={props.classes}>
      {props.children}
    </Typography>
  );
}

const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    width: '100%',
  },
  tabContainer:{ 
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
  tabsRoot: {
    borderBottom: '1px solid #e8e8e8',
    backgroundColor: '#8c51ff',
  },
  tabsIndicator: {
    backgroundColor: '#fff',
  },
  tabWrap: {
  	backgroundColor: '#fff',
  },
  tabRoot: {
  	[theme.breakpoints.up('md')]: {
      fontSize: '18px',
    },
    textTransform: 'initial',
    minWidth: 72,
    fontWeight: theme.typography.fontWeightRegular,
	fontSize: '18px',
	padding: '0 17px',
	borderRadius: '3px 3px 0 0',
	color: '#fff', 
	transition: 'color .12s ease-in-out',
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:hover': {
      color: '#fff',
      opacity: '1',
    },
    '&$tabSelected': {
      backgroundColor: '#fff',
      fontSize: '18px',
      fontWeight: '500',
      padding: '0 17px',
      borderRadius: '3px 3px 0 0',
	  color: '#8c51ff', 
	  transition: 'color .12s ease-in-out',
      // fontWeight: theme.typography.fontWeightMedium, 
    },
    '&:focus': {
      color: '#8c51ff',
      textDecoration: 'none'
    },
  },
  tabSelected: {},
  typography: {
    padding: theme.spacing.unit * 3,
  },
});

class NavigationItems extends React.Component {
  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <div className={classes.root}> 
        <Tabs
          value={value}
          onChange={this.handleChange}
          classes={{ root: classes.tabsRoot, indicator: classes.tabsIndicator }}
        >
          <Tab
            disableRipple
            classes={{ root: classes.tabRoot, selected: classes.tabSelected }}
            label="Menu Settings"
          />
          <Tab
            disableRipple
            classes={{ root: classes.tabRoot, selected: classes.tabSelected }}
            label="Settings"
          />
          <Tab
            disableRipple
            classes={{ root: classes.tabRoot, selected: classes.tabSelected }}
            label="Notification"
          />
          <Tab
            disableRipple
            classes={{ root: classes.tabRoot, selected: classes.tabSelected }}
            label="Configuration"
          />
        </Tabs> 
        <AppBar position="static" className={classes.tabWrap}>
        {value === 0 && <TabContainer>
        	<ul className={classes.navTab}>
        		<li><Link className={[classes.navLink,classes.activeNav].join(' ')} to="/sdfsdf">Store Settings</Link></li>
        		<li><Link className={classes.navLink} to="/sdfsdf">Address Settings</Link></li>
        		<li><Link className={classes.navLink} to="/sdfsdf">Takout Settings</Link></li>
        		<li><Link className={classes.navLink} to="/sdfsdf">Delivery Settings</Link></li>
        		<li><Link className={classes.navLink} to="/sdfsdf">Coupon Codes</Link></li>
        	</ul>
        </TabContainer>}
        {value === 1 && <TabContainer classes={classes.tabContainer}>
        	<ul className={classes.navTab}>
        		<li><Link className={classes.navLink} to="/sdfsdf">Store Settings</Link></li>
        		<li><Link className={classes.navLink} to="/sdfsdf">Address Settings</Link></li>
        		<li><Link className={classes.navLink} to="/sdfsdf">Takout Settings</Link></li>
        		<li><Link className={classes.navLink} to="/sdfsdf">Delivery Settings</Link></li>
        		<li><Link className={classes.navLink} to="/sdfsdf">Coupon Codes</Link></li>
        	</ul>
        </TabContainer>}
        {value === 2 && <TabContainer classes={classes.tabContainer}>
        	<ul className={classes.navTab}>
        		<li><Link className={classes.navLink} to="/sdfsdf">Store Settings</Link></li>
        		<li><Link className={classes.navLink} to="/sdfsdf">Address Settings</Link></li>
        		<li><Link className={classes.navLink} to="/sdfsdf">Takout Settings</Link></li>
        		<li><Link className={classes.navLink} to="/sdfsdf">Delivery Settings</Link></li>
        		<li><Link className={classes.navLink} to="/sdfsdf">Coupon Codes</Link></li>
        	</ul>
        </TabContainer>}
        {value === 3 && <TabContainer classes={classes.tabContainer}>
        	<ul className={classes.navTab}>
        		<li><Link className={classes.navLink} to="/sdfsdf">Store Settings</Link></li>
        		<li><Link className={classes.navLink} to="/sdfsdf">Address Settings</Link></li>
        		<li><Link className={classes.navLink} to="/sdfsdf">Takout Settings</Link></li>
        		<li><Link className={classes.navLink} to="/sdfsdf">Delivery Settings</Link></li>
        		<li><Link className={classes.navLink} to="/sdfsdf">Coupon Codes</Link></li>
        	</ul>
        </TabContainer>}
        </AppBar>
      </div>
    );
  }
}

NavigationItems.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NavigationItems);