import React,{Component} from 'react'; 
import { GoogleApiWrapper, InfoWindow, Map, Marker } from 'google-maps-react'; 
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete'; 
import pinMarker from '../../assets/images/pin.png'; 
  
class AddressSetting extends Component{

	constructor(props) {
	    
	    super(props);
	    
	    this.state = { 
	    	address: '',
	    	center:{
	    		lat: 13.7261601,
				lng: 100.52493979999997,
			},
	    	zoom: 11,
	    	showingInfoWindow: true,
			activeMarker: {},
			selectedPlace: {},
			address1:'',
			address2:'',
			city:'',
			State:'',
			success:false,  
	    };
	  }

	  handleChange = address => {
	    this.setState({ address });
	  };
	 
	  handleSelect = address => { 
	  	const arrAddress = address.split(','); 
		arrAddress.reverse();
		const city = arrAddress[2]?arrAddress[2]:'';
		const State = arrAddress[1]?arrAddress[1]:''; 
	 
	    geocodeByAddress(address)
	      .then(results => getLatLng(results[0]))
	      .then( 
	      		(center) => {   
	      			this.setState(
	      				{ 
	      					center,
	      					address,
	      					address1:address,
	      					city:city,
	      					State:State,
	      					success:true,
	      					showingInfoWindow:true,
	      				}
	      			);
	      		}
	      ) 
	      .catch(error => console.error('Error', error)); 
	  }; 

	  onMarkerClick = (props, marker, e) => {
	    this.setState({
	      selectedPlace: props,
	      activeMarker: marker,
	      showingInfoWindow: true
	    });
	  }
	  
	  onMapClick = (props) => {
	    if (this.state.showingInfoWindow) {
	      this.setState({
	        showingInfoWindow: false,
	        activeMarker: null
	      });
	    }
	  }

	  onMarkerDragEnd = ( coord ) => {
	  	debugger;
	    const { latLng } = coord;
	    const lat = latLng.lat();
	    const lng = latLng.lng(); 
	    console.log("latlng",{lat:lat,lng:lng})
	    // this.setState({ center:{lat:lat,lng:lng}});
	  };

	render(){ 

		const {center,zoom,address}= this.state;
		 
		return( 
			
		<div className="row" style={{minHeight:'800px'}}>
				 <div className="col-md-3">
					<form>
					  <div className="form-group">
					    <label for="formGroupExampleInput">Address</label>
					    <input name="address" value={this.state.address} type="text" className="form-control"/>
					  </div>
					  <div className="form-group">
					    <label for="formGroupExampleInput">Address2</label>
					    <input name="address2" type="text" className="form-control"/>
					  </div> 
					  <div className="form-group">
					    <label for="formGroupExampleInput">City</label>
					    <input name="city" value={this.state.city} type="text" className="form-control"/>
					  </div>
					  <div className="form-group">
					    <label for="formGroupExampleInput">State</label>
					    <input name="state" value={this.state.State} type="text" className="form-control"/>
					  </div>
					  <div className="form-group">
					    <label for="formGroupExampleInput">Zip Code</label>
					    <input name="zipcode" type="text" className="form-control"/>
					  </div>
					  <div className="form-group">
					    <label for="formGroupExampleInput">Phone Number</label>
					    <input name="phone_number" type="text" className="form-control"/>
					  </div>
					</form>
			     </div>
			     <div className="col-md-9"> 
				 	<div style={{height:'500px'}}>
					 {this.state.success?<div class="alert alert-primary" role="alert">
						  Your Address has been set!
					 </div>:''}
					 <PlacesAutocomplete
					        value={this.state.address}
					        onChange={this.handleChange}
					        onSelect={this.handleSelect}
					      >
					        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
					          <div>
					            <input
					              {...getInputProps({
					                placeholder: 'Search Places ...',
					                className: 'location-search-input form-control',
					              })}
					            />
					            <div className="autocomplete-dropdown-container">
					              {loading && <div>Loading...</div>}
					              {suggestions.map(suggestion => {
					                const className = suggestion.active
					                  ? 'suggestion-item--active'
					                  : 'suggestion-item';
					                // inline style for demonstration purpose
					                const style = suggestion.active
					                  ? { backgroundColor: '#fafafa', cursor: 'pointer' }
					                  : { backgroundColor: '#ffffff', cursor: 'pointer' };
					                return (
					                  <div
					                    {...getSuggestionItemProps(suggestion, {
					                      className,
					                      style,
					                    })}
					                  >
					                    <span>{suggestion.description}</span>
					                  </div>
					                );
					              })}
					            </div>
					   		</div>
				        )}
				      </PlacesAutocomplete>
			         <Map
				        item
				        xs = { 12 } 
				        google = {window.google}
				        onClick = { this.onMapClick }
				        zoom = { zoom }
				        style={{height:'80vh'}}
				        initialCenter = {center}
				      >
				        <Marker
				          onClick = { this.onMarkerClick }
				          title = { 'Address' }
				          position = {center}
				          name = { address }
				          options={{icon:`${pinMarker}`}}
				          draggable = {true}
				          onDragend={(t, map, coord) => this.onMarkerDragEnd(coord)}
				        />
				          <InfoWindow
				            marker = { this.state.activeMarker }
				            visible = { this.state.showingInfoWindow }
				          > 
				            <h4>
				              Address
				            </h4>
				            <p>
				              {address}
				            </p>
				        </InfoWindow>
				      </Map>
			     </div>  
			</div>		
			</div>
		);
	}	
}

export default AddressSetting;