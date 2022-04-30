import { Currency } from "../models/currency";
import * as currency from '../actions/currency'

export function reducer(state=[],action:currency.CurrencyUptadetAction){
    switch(action.type){
        case currency.CURRENCIESUPDATED:
            return action.payload;
        default:
            return state;
    }
}


