import {addCategory, changeCategoryColor, changeCategoryName} from './actions'

export type category = {
   id: number
   name: string
   color: string
}

export type stateTypeCategories = {
   categoryIncome: category[]
   categoryExpenses: category[]
}

const initialState: stateTypeCategories = {
   categoryIncome: [
      {id: 1, name: 'Зарплата', color: '#7b1fa2'},
      {id: 2, name: 'Сбережения', color: '#0097a7'},
   ],
   categoryExpenses: [
      {id: 3, name: 'Дом', color: '#7986cb'},
      {id: 4, name: 'Машина', color: '#ff9800'},
      {id: 5, name: 'Развлечения', color: '#8bc34a'},
      {id: 6, name: 'Здоровье', color: '#5d4037'},
   ],
}

export const categoriesReducer = (state: stateTypeCategories = initialState, action: actionType): stateTypeCategories => {
   switch (action.type) {
      case 'ADD-CATEGORY':
         const amountCategories = [...state.categoryExpenses, ...state.categoryIncome].length
         if (action.add) {
            return {
               ...state,
               categoryIncome: [...state.categoryIncome, {id: amountCategories + 1, name: action.category, color: action.color}],
            }
         } else {
            return {
               ...state,
               categoryExpenses: [...state.categoryExpenses, {id: amountCategories + 1, name: action.category, color: action.color}],
            }
         }
      case 'CHANGE-CATEGORY-NAME':
         if (action.add) {
            return {
               ...state,
               categoryIncome: state.categoryIncome.map(c => c.id === action.id ? {
                  ...c,
                  name: action.category
               } : c),
            }
         } else {
            return {
               ...state,
               categoryExpenses: state.categoryExpenses.map(c => c.id === action.id ? {
                  ...c,
                  name: action.category
               } : c),
            }
         }
      case 'CHANGE-CATEGORY-COLOR':
         if (action.add) {
            return {
               ...state,
               categoryIncome: state.categoryIncome.map(c => c.id === action.id ? {
                  ...c,
                  color: action.color
               } : c),
            }
         } else {
            return {
               ...state,
               categoryExpenses: state.categoryExpenses.map(c => c.id === action.id ? {
                  ...c,
                  color: action.color
               } : c),
            }
         }
      default:
         return state
   }
}

type actionType = ReturnType<typeof addCategory> | ReturnType<typeof changeCategoryName> | ReturnType<typeof changeCategoryColor>