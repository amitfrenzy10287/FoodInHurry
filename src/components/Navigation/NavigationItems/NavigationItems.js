import React,{Component} from 'react';

import classes from './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';
import SubNavItem from './NavigationItem/SubNavItem/SubNavItem';

class navigationItems extends Component{

	constructor(props){
		super(props);
		this.state={
			activeTab : 'Menu Settings',
			activeSubNav: 'Store Settings',	
		}
	}

	setActiveTab = ( selectedTab ) => {
		
	    this.setState({ activeTab : selectedTab });
	}

	setActiveSubNav = ( selectedSubNav ) => {
		
	    this.setState({ activeSubNav : selectedSubNav });
	}

	render(){

		return(
			
			<div>
				<ul className={classes.NavigationItems}>
			        <NavigationItem activeClass={this.state.activeTab} click={this.setActiveTab} >Menu Settings</NavigationItem>
			        <NavigationItem activeClass={this.state.activeTab} click={this.setActiveTab} >Settings</NavigationItem> 
			        <NavigationItem activeClass={this.state.activeTab} click={this.setActiveTab} >Notification</NavigationItem>
			        <NavigationItem activeClass={this.state.activeTab} click={this.setActiveTab} >Configuration</NavigationItem>
			    </ul>
			    	<div className={[classes.selectedTabPanel,this.state.activeTab === 'Settings' ? 'd-block' : 'd-none'].join(' ')}>
					  <div className={this.state.activeTab === 'Menu Settings' ? 'd-block' : 'd-none' } role="tabpanel" aria-labelledby="home-tab">
					  </div>
					  <div className={this.state.activeTab === 'Settings' ? 'd-block' : 'd-none'} role="tabpanel" aria-labelledby="profile-tab">
					  		<SubNavItem link="/" activeClass={this.state.activeSubNav} click={this.setActiveSubNav} >Store Settings</SubNavItem>
					  		<SubNavItem link="/AddressSettings" activeClass={this.state.activeSubNav} click={this.setActiveSubNav}>Address Settings</SubNavItem>
					  		<SubNavItem link="/asdas" activeClass={this.state.activeSubNav} click={this.setActiveSubNav}>Takeout Settings</SubNavItem>
					  		<SubNavItem link="/asdas" activeClass={this.state.activeSubNav} click={this.setActiveSubNav}>Delivery Settings</SubNavItem>
					  		<SubNavItem link="/asdas" activeClass={this.state.activeSubNav} click={this.setActiveSubNav}>Coupon Codes</SubNavItem>
					  </div>
					  <div className={this.state.activeTab === 'Notification' ? 'd-block' : 'd-none'} role="tabpanel" aria-labelledby="contact-tab">
					  </div>
					  <div className={this.state.activeTab === 'Configuration' ? 'd-block' : 'd-none'} role="tabpanel" aria-labelledby="contact-tab">
					  </div>
					</div>
			</div>

		);
	}
    
}

export default navigationItems;