import {addCategory} from './actions'

export type stateTypeCategories = {
   categoryNameExpenses: string[]
   categoryNameIncome: string[]
}

const initialState: stateTypeCategories = {
   categoryNameExpenses: ['Дом', 'Машина', 'Развлечения', 'Здоровье'],
   categoryNameIncome: ['Зарплата', 'Сбережения'],
}

export const categoriesReducer = (state: stateTypeCategories = initialState, action: actionType): stateTypeCategories => {
   switch (action.type) {
      case 'ADD-CATEGORY':
         if (action.add) {
            return {
               ...state,
               categoryNameIncome: [...state.categoryNameIncome, action.category],
            }
         } else {
            return {
               ...state,
               categoryNameExpenses: [...state.categoryNameExpenses, action.category],
            }
         }
      default:
         return state
   }
}

type actionType = ReturnType<typeof addCategory>