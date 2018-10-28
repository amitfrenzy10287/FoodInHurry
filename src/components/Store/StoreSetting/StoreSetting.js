import React from 'react';
import classes from './StoreSetting.css';
 
const StoreSetting = ( props ) =>{
	return(
		<div>
			<div className="row">
				<div className="col-3 text-left">
					<h4> Find Food Quick Fee </h4>
				</div>
				<div className="col-9 ml-0 pl-0">
				 	<div className="custom-control custom-radio">
					  <input type="radio" id="customRadio1" name="customRadio" className="custom-control-input" checked/>
					  <label className="custom-control-label" for="customRadio1">Customer Pays Online Order Fees </label>
					</div>
					<div className="custom-control custom-radio">
					  <input type="radio" id="customRadio2" name="customRadio" className="custom-control-input" />
					  <label className="custom-control-label" for="customRadio2">Merchant Pays Online Order Fees </label>
					</div>  
				</div>  
			</div>	
			<div className="form-row mt-4">				     
			    <div className="col-md-6"> 
			      <label for="validationCustomUsername">Business Name</label>
			      <div className="input-group">
			        <input type="text" className="form-control col-md-6" placeholder="Business Name" required/>
			      </div>
			    </div> 
			    <div className="col-md-6"> 
			      <label className="mt-2 mb-0">Store Url</label>
			      <div className="input-group mb-3 mt-3"> 
					  <span>http://</span> 
					  <input type="text" className={[classes.storeUrlTextField,"form-control col-md-6"].join(' ')} /> 
					  <span>.quickfoodfast.com</span> 
					</div> 
			    </div> 
			  </div>
			</div>
	);
}

export default StoreSetting;