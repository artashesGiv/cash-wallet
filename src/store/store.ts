import {combineReducers, createStore} from 'redux'
import {walletReducer} from './Wallet/walletReducer'
import {categoriesReducer} from './Categories/categoriesReducer'

export const rootReducer = combineReducers({
   wallet: walletReducer,
   categories: categoriesReducer,
})

export type AppStateType = ReturnType<typeof rootReducer>
export const store = createStore(rootReducer)