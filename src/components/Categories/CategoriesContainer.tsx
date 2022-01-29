import {AppStateType} from '../../store/store'
import {connect} from 'react-redux'
import {Categories} from './Categories'
import {stateTypeCategories} from '../../store/Categories/categoriesReducer'
import {addCategory, changeCategoryColor, changeCategoryName} from '../../store/Categories/actions'

type mapStateToPropsType = {
   state: stateTypeCategories
}

type mapDispatchToPropsType = {
   addCategory: (category: string, add: boolean, color: string) => void
   changeCategoryName: (id: number, name: string, add: boolean) => void
   changeCategoryColor: (id: number, color: string, add: boolean) => void
}

export type CategoriesPropsType = mapStateToPropsType & mapDispatchToPropsType

const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
   return {
      state: state.categories,
   }
}

export const CategoriesContainer = connect(mapStateToProps, {addCategory, changeCategoryName, changeCategoryColor})(Categories)