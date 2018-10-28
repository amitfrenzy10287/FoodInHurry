import React, {Component} from 'react';
import { NavLink,Link } from 'react-router-dom'; 
import classes from './SubNavItem.css';

const SubNavItem = (props) => { 

		return( 
				<li onClick={(e)=>props.click(props.children)} className={classes.SubNavItem}>
			        <NavLink to={props.link} className={props.activeClass === props.children ?
			         	[classes.active,classes.openSubNav].join(' ') : classes.closeSubNav}>
			        	{props.children}
			        </NavLink> 
			    </li> 
		);

} 

export default SubNavItem;