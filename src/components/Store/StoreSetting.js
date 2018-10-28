import React from 'react';
import classes from './StoreSetting.css';
 
const StoreSetting = ( props ) =>{
	return(
		<div>
			<div className="row">
				<div className="col-6 text-left">
					<h4> Find Food Quick Fee </h4>
				</div>
				<div className="col-6 ml-0 pl-0">
				 	<div className="form-check">
					  <input className="form-check-input" type="radio" 
					  name="exampleRadios" id="exampleRadios1" value="option1" checked/>
					  <label className="form-check-label" for="exampleRadios1">
					    Customer Pays Online Order Fees
					  </label>
					</div>
					<div className="form-check">
					  <input className="form-check-input" type="radio" name="exampleRadios"
					   id="exampleRadios2" value="option2"/>
					  <label className="form-check-label" for="exampleRadios2">
					    Merchant Pays Online Order Fees
					  </label>
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