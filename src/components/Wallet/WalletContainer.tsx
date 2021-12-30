import {AppStateType} from '../../store/store'
import {connect} from 'react-redux'
import {stateType} from '../../store/Wallet/walletReducer'
import {Wallet} from './Wallet'
import {addCategory, saveStory} from '../../store/Wallet/actions'

type mapStateToPropsType = {
   state: stateType
}

type mapDispatchToPropsType = {
   saveStory: (category: string, change: number, operationComment: string) => void
   addCategory: (category: string, add: boolean) => void
}

export type WalletPropsType = mapStateToPropsType & mapDispatchToPropsType

const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
   return {
      state: state.wallet,
   }
}

export const WalletContainer = connect(mapStateToProps, {saveStory, addCategory})(Wallet)