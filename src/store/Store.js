import { configureStore } from '@reduxjs/toolkit';
import Cartslice from './Cartslice';
import Productslice from './Productslice';

const store=configureStore({
    reducer:{
        cart:Cartslice,
        products:Productslice,
    }
})
export default store