import {IGlobalState} from "../../redux/state";

//     currencies,
//     currentCurrency,
//     isBuying,
//     amountOfBYN,
//     amountOfCurrency,

// export const selectCurrencies=(state:IGlobalState)=>state.currency.currencies  => ...filter(c=>c.id...)
// can  modify selected values before passing (filtering buttons etc) => "reselect" library

//callbacks for useSelector
export const selectCurrencies = (state: IGlobalState) => state.currency.currencies
export const selectCurrentCurrency = (state: IGlobalState) => state.currency.currentCurrency
export const selectIsBuying = (state: IGlobalState) => state.currency.isBuying
export const selectAmountOfBYN = (state: IGlobalState) => state.currency.amountOfBYN
export const selectAmountOfCurrency = (state: IGlobalState) => state.currency.amountOfCurrency

export const selectAllCurrencyState = (state: IGlobalState) => state.currency