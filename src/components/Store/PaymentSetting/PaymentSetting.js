import React from 'react';
import classes from './PaymentSetting.css';

const PaymentSetting = (props) =>{
	return(
		<div className="form-row p-3">
			<div className="col-12">
				<h4>Payment types accepted</h4>
			</div>
			<div className="col-6"> 
				<div className="form-group mb-0">  
					<input type="checkbox" id="id-name--1" name="set-name" className={classes.switchInput} />
					<label for="id-name--1" className={classes.switchLabel}>Cash Payment </label>
				</div> 
				<div className="form-group mb-0">  
					<input type="checkbox" id="id-name--3" name="set-name" className={classes.switchInput} />
					<label for="id-name--3" className={classes.switchLabel}>Tips </label>
				</div>
			</div>
			<div className="col-6">   
				<input type="checkbox" id="id-name--2" name="set-name" className={classes.switchInput} />
				<label for="id-name--2" className={classes.switchLabel}>Credit / Debit Card Payment </label> 				
			</div>
		</div>
	);
}

export default PaymentSetting;