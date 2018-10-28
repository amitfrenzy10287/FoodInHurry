import React,{Component} from 'react';
import StoreSetting from '../../components/Store/StoreSetting/StoreSetting';
import PaymentSetting from '../../components/Store/PaymentSetting/PaymentSetting';
import Tips from '../../components/Store/Tips/Tips';
import classes from './StoreSettings.css';

class Storeettings extends Component{
	
	render(){

		return(
			
			<div>
				<StoreSetting/>
				<div className={[classes.paper,'p-2 mt-4'].join(' ')}>
					<PaymentSetting/>
				</div>
				<div className={[classes.paper,'p-2 mt-4'].join(' ')}>
					<Tips/>
				</div>
			</div>
		);
	}	
}

export default Storeettings;