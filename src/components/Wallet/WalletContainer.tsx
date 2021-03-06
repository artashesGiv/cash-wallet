import {AppStateType} from '../../store/store'
import {connect} from 'react-redux'
import {Wallet} from './Wallet'
import {saveStory} from '../../store/Wallet/actions'
import {Moment} from 'moment'
import {category} from '../../store/Categories/categoriesReducer'

type mapStateToPropsType = {
   state: AppStateType
}

type mapDispatchToPropsType = {
   saveStory: (category: category, change: number, operationComment: string, date: Moment) => void
}

export type WalletPropsType = mapStateToPropsType & mapDispatchToPropsType

const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
   return {
      state: state,
   }
}

export const WalletContainer = connect(mapStateToProps, {saveStory})(Wallet)