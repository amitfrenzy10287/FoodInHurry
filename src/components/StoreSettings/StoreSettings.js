import React,{Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import FormGroup from '@material-ui/core/FormGroup';
import Typography from '@material-ui/core/Typography';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import TextField from '@material-ui/core/TextField'; 
import InputAdornment from '@material-ui/core/InputAdornment';
import Switch from '@material-ui/core/Switch';
import purple from '@material-ui/core/colors/purple';
import classNames from 'classnames';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
 
 
const styles = theme => ({
  root: {
    flexGrow: 1,
    margin:'15px',
    padding:'0px'
  },
  heading:{
    flex:'1',
  },
  formControl: {
    // margin: theme.spacing.unit * 3,
    marginTop: '-23px',
  },
  group: {
    margin: `${theme.spacing.unit}px 0`,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  checked: {},
  margin: {
    margin: theme.spacing.unit,
  },
  bootstrapRoot: {
    'label + &': {
      marginTop: theme.spacing.unit * 3,
    },
  },
  bootstrapInput: {
    borderRadius: 4,
    backgroundColor: theme.palette.common.white,
    border: '1px solid #ced4da',
    fontSize: 16,
    padding: '10px 12px',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:focus': {
      borderColor: '#80bdff',
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
    },
  },
  bootstrapFormLabel: {
    fontSize: 18,
  },
  storeHeading: {
    [theme.breakpoints.down('sm')]: {
      padding: '2%',
      marginBottom: '5%',
    }
  },
  row:{
    display: 'flex',
    flexDirection: 'row wrap',
    padding: 20,
    width: '50%'
  },
  paperLeft:{
    flex: 1,
    height: '100%',
    margin: 10,
    textAlign: 'center',
    padding: 10
  },
  right:{ 
    float: 'right',
    [theme.breakpoints.down('sm')]: {
      float: 'none',  
    } 
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  storeurl:{
      marginLeft:'26%',
      [theme.breakpoints.down('sm')]: {
        margin:'3%',
      },
  },
  btnPurple: {
    color: theme.palette.getContrastText(purple[500]),
    backgroundColor: purple[500],
    '&:hover': {
      backgroundColor: purple[700],
    },
  }, 
});

const ranges = [
  {
    value: '0-20',
    label: '0 to 20',
  },
  {
    value: '21-50',
    label: '21 to 50',
  },
  {
    value: '51-100',
    label: '51 to 100',
  },
];

class StoreSettings extends Component {
  state = {
    value: 'customer',
    gilad: true,
    jason: false,
    antoine: true,
    takeout_tips:false,
    delivery_tips:false,
    mandatory_tips:false,
    amount: '',
    password: '',
    weight: '',
    weightRange: '',
    showPassword: false,
    age: '',
    open: false,
  };

  handleChange = event => {
    this.setState({ value: event.target.value });
  };

  handleSwitch = name => event => {
    this.setState({ [name]: event.target.checked });
  };

  handleCheckbox = name => event => {
    this.setState({ [name]: event.target.checked });
  };
  handleRange = prop => event => {
    this.setState({ [prop]: event.target.value });
  };

  handleSelect = event => { 
    this.setState({ [event.target.name]: event.target.value });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleOpen = () => { 
    this.setState({ open: true });
  };
  render(){

  const { classes } = this.props;
  const { takeout_tips, delivery_tips, mandatory_tips } = this.state;
  const error = Object.values(this.state).filter(v => v).length !== 2;

  return (
   
    <div className={classes.root}>
      <Grid container spacing={24}>
        <Grid item xs={12}>
            <Paper className={classes.paper}> 
                  <Button
                    variant="contained"
                    color="primary"
                    className={classNames(classes.margin, classes.btnPurple,classes.right)}
                  >
                    Save Store Settings
                  </Button>
                  <Typography component="h2" className={classes.storeHeading} align='left'>
                    Find Food Quick Fee
                  </Typography> 
                  <FormControl className={classes.formControl}> 
                      <RadioGroup
                        aria-label="Usertype"
                        name="usertype"
                        className={classes.group}
                        value={this.state.value}
                        onChange={this.handleChange}
                      >
                        <FormControlLabel value="customer" control={<Radio color="primary" />} label="Customer Pays Online Order Fees" />
                        <FormControlLabel value="merchant" control={<Radio color="primary" />} label="Merchant Pays Online Order Fees" />
                      </RadioGroup>
                  </FormControl> 
                  <div className={classes.container}>
                    <FormControl align="left" className={classes.margin}>
                      <InputLabel shrink htmlFor="Business" className={classes.bootstrapFormLabel}>
                        Business Name
                      </InputLabel>
                      <Input classes={{
                            root: classes.bootstrapRoot,
                            input: classes.bootstrapInput,
                          }} id="component-simple" onChange={this.handleChange} />
                    </FormControl> 
                    <FormControl align="right" className={[classes.storeurl,classes.margin].join(' ')}>
                      <TextField
                        id="standard-name"
                        label="Store URL"
                        className={classes.textField}
                        margin="normal"
                        InputProps={{
                          startAdornment: <InputAdornment position="start">http://</InputAdornment>,
                          endAdornment: <InputAdornment position="end">.quickfoodfast.com</InputAdornment>,
                        }}
                      />
                    </FormControl>    
                  </div>
                  <Grid item xs={12}>
                    <Paper className={[classes.paper,classes.margin].join(' ')}> 
                        <Typography component="h2" className={classes.storeHeading} variant="headline" align='left'>
                          Payment types accepted
                        </Typography>
                        <div className={classes.container}>
                        <Grid item xs={6}>
                        <FormControl component="fieldset" align="left" >
                            
                            <FormGroup> 
                              <FormControlLabel
                                control={
                                  <Switch color="primary"
                                    checked={this.state.gilad}
                                    onChange={this.handleSwitch('gilad')}
                                    value="gilad"
                                  />
                                }
                                label="Cash Payment"
                              />
                            
                          <FormControlLabel
                              control={
                                <Switch color="primary"
                                  checked={this.state.jason}
                                  onChange={this.handleSwitch('jason')}
                                  value="jason"
                                />
                              }
                              label="Tips"
                            /> 
                            </FormGroup> 
                            
                            </FormControl>
                            </Grid>
                            <Grid item xs={6}>
                            <FormControl component="fieldset" > 
                            <FormGroup> 
                              <FormControlLabel
                                control={
                                  <Switch color="primary"
                                    checked={this.state.gilad}
                                    onChange={this.handleSwitch('gilad')}
                                    value="gilad"
                                  />
                                }
                                label="Credit / Debit Card Payment"
                              />  
                            </FormGroup> 
                            
                            </FormControl>  
                           </Grid>
                        </div>
                    </Paper>
                  </Grid>
                  <Grid item xs={12}>
                    <Paper className={[classes.paper,classes.container,classes.margin].join(' ')}> 
                        
                        <div className={classNames(classes.container,classes.margin)}>
                          <FormControl component="fieldset" align="left"> 
                            <FormGroup>
                              <Typography component="h2" className={classes.storeHeading} variant="headline" align='left'>
                                Tips and Gratuity
                              </Typography>
                              <FormControlLabel
                                control={
                                  <Checkbox color="primary" checked={takeout_tips} onChange={this.handleCheckbox('takeout_tips')} value="takeout_tips" />
                                }
                                label="Accept Tips for Takout Orders"
                              />
                              <FormControlLabel
                                control={
                                  <Checkbox color="primary" checked={delivery_tips} onChange={this.handleCheckbox('delivery_tips')} value="delivery_tips" />
                                }
                                label="Accept Tips for Delivery Orders"
                              />
                              <FormControlLabel
                                control={
                                  <Checkbox color="primary"
                                    checked={mandatory_tips}
                                    onChange={this.handleCheckbox('mandatory_tips')}
                                    value="mandatory_tips"
                                  />
                                }
                                label="Mandatory Gratuity"
                              />  
                                  <TextField
                                    label="Applied to orders over"
                                    id="simple-start-adornment"
                                    className={classNames(classes.margin, classes.textField)}
                                    InputProps={{
                                      startAdornment: <InputAdornment position="start">$</InputAdornment>,
                                    }}
                                  /> 
                            </FormGroup>
                                <TextField
                                    label="In the amount of" 
                                    className={classNames(classes.margin, classes.textField)}
                                    InputProps={{
                                      startAdornment: <InputAdornment position="start">$</InputAdornment>,
                                    }}
                                  />
                                  <Select
                                      native
                                      open={this.state.open}
                                      onClose={this.handleClose}
                                      onOpen={this.handleOpen}
                                      value={this.state.age}
                                      onChange={this.handleSelect}
                                      inputProps={{
                                        name: 'age',
                                        id: 'demo-controlled-open-select',
                                      }}
                                    >
                                      <option value="" />
                                      <option value={10}>Ten</option>
                                      <option value={20}>Twenty</option>
                                      <option value={30}>Thirty</option>
                                    </Select>     
                            <FormHelperText>Be careful</FormHelperText>
                          </FormControl> 
                        </div>
                    </Paper>
                  </Grid>
                                    
            </Paper> 
             
        </Grid>

      </Grid>
    </div>
  );

  }
}

StoreSettings.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(StoreSettings);