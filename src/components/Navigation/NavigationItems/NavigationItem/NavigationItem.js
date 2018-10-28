import React, {Component} from 'react';
import { NavLink,Link } from 'react-router-dom'; 
import classes from './NavigationItem.css';

const navigationItem = (props) => { 

		return(

			<li onClick={(e)=>props.click(props.children)} className={classes.NavigationItem}>
		        <a className={props.activeClass === props.children ? classes.active : ''}>{props.children}</a> 
		    </li>	
		);

} 

export default navigationItem;