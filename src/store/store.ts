import {combineReducers, createStore} from 'redux'
import {walletReducer} from './Wallet/walletReducer'

export const rootReducer = combineReducers({
   wallet: walletReducer,
})

export type AppStateType = ReturnType<typeof rootReducer>
export const store = createStore(rootReducer)

// @ts-ignore
window.store = store