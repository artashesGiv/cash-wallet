import {AppStateType} from '../../store/store'
import {connect} from 'react-redux'
import {Wallet} from './Wallet'
import {saveStory} from '../../store/Wallet/actions'

type mapStateToPropsType = {
   state: AppStateType
}

type mapDispatchToPropsType = {
   saveStory: (category: string, change: number, operationComment: string) => void
}

export type WalletPropsType = mapStateToPropsType & mapDispatchToPropsType

const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
   return {
      state: state,
   }
}

export const WalletContainer = connect(mapStateToProps, {saveStory})(Wallet)