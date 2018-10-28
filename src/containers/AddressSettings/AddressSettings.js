import React,{Component} from 'react'; 
import AddressSetting from '../../components/AddressSetting/AddressSetting'; 
// import MapContainer from '../../components/AddressSetting/AddressSetting'; 
import classes from './AddressSettings.css';
 

class AddressSettings extends Component{
  
	render(){ 

		return( 
			<div className="col-md-12"> 
				 
					<AddressSetting/>
				 
			</div>
		);
	}	
}

export default AddressSettings;