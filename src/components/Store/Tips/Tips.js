import React from 'react';
import classes from './Tips.css';

const Tips = (props) =>{
	return(
		<div className="form-row p-3">
			<div className="col-12">
				<h4>Tips and Gratuity</h4>
			</div>
			<div className="col-12 p-3"> 
				<div className="custom-control custom-checkbox p-2">
				  <input type="checkbox" className="custom-control-input" id="takeout" />
				  <label className="custom-control-label" for="takeout">Accept Tips for Takout Orders</label>
				</div> 
				<div className="custom-control custom-checkbox p-2">
				  <input type="checkbox" className="custom-control-input" id="delivery" />
				  <label className="custom-control-label" for="delivery">Accept Tips for Delivery Orders</label>
				</div>
				<div className="custom-control custom-checkbox p-2">
				  <input type="checkbox" className="custom-control-input" id="gratuity" />
				  <label className="custom-control-label" for="gratuity">Mandatory Gratuity</label> 
				</div>
				<label className="control-label">Applied to orders over : &nbsp; $ &nbsp;</label>
				<input className="form-control d-inline col-md-1" type="text" />
				
				<div className="form-group">
				<label className="control-label">In the amount of : &nbsp;</label>
				<input className="form-control d-inline col-md-1" type="text" />&nbsp;
				<select className="form-control d-inline col-md-1">
					<option>$</option>
					<option>%</option>
				</select>
				</div>
			</div> 
		</div>
	);
}

export default Tips;