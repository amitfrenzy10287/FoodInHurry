import React, { Component } from 'react';
// import { connect } from 'react-redux';

import Aux from '../../hoc/Auxiliary/Auxiliary';
// import MovieLists from '../../components/Movies/MovieLists';
// import MovieList from '../../components/Movies/MoviesList/MovieList'; 
// import MovieCarousel from '../../components/UI/MovieCarousel/MovieCarousel';
import Spinner from '../../components/UI/Spinner/Spinner';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import * as actions from '../../store/actions/index';
import axios from '../../axios-orders';
import StoreSettings from '../../components/StoreSettings/StoreSettings';


export class FoodStore extends Component {
   
    render () {  
        return (
            <Aux>
                 <StoreSettings/>   
            </Aux>
        );
    }
} 
 
export default (withErrorHandler( FoodStore, axios ));