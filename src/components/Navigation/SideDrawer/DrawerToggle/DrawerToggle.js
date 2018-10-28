import React from 'react'; 
import classes from './DrawerToggle.css'; 

const drawerToggle = (props) => (
    <div className={classes.DrawerToggle} onClick={props.clicked}>
        <i className={[classes.DrawerToggleIcon,"fa fa-bars fa-1x text-white"].join(' ')}></i>
    </div>
);

export default drawerToggle;