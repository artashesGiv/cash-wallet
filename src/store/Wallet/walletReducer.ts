import {addCategory, saveStory} from './actions'
import {v1} from 'uuid'

type operationItemType = {
   id: string
   category: string
   prevValue: number
   change: number
   presentValue: number
   operationComment: string
   date: string
}

export type stateType = {
   story: operationItemType[]
   categoryNameExpenses: string[]
   categoryNameIncome: string[]
   cash: number
}

const initialState: stateType = {
   story: [],
   categoryNameExpenses: ['Дом', 'Машина', 'Развлечения', 'Здоровье'],
   categoryNameIncome: ['Зарплата', 'Сбережения'],
   cash: 0,
}

export const walletReducer = (state: stateType = initialState, action: actionType): stateType => {
   switch (action.type) {
      case 'SAVE-STORY':
         return {
            ...state,
            story: [
               ...state.story,
               {
                  id: v1(),
                  category: action.category,
                  prevValue: state.cash,
                  change: action.change,
                  presentValue: action.change + state.cash,
                  operationComment: action.operationComment,
                  date: `${new Date().getDate().toString()}.${(new Date().getMonth() + 1).toString()}.${new Date().getFullYear().toString()}`,
               },
            ],
            cash: action.change + state.cash,
         }
      case 'ADD-CATEGORY':
         if (action.add) {
            return {
               ...state,
               categoryNameIncome: [...state.categoryNameIncome, action.category]
            }
         } else {
            return {
               ...state,
               categoryNameExpenses: [...state.categoryNameExpenses, action.category]
            }
         }

      default:
         return state
   }
}

type actionType = ReturnType<typeof saveStory>
   | ReturnType<typeof addCategory>