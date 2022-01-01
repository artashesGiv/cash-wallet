import {saveStory} from './actions'
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

export type stateTypeWallet = {
   story: operationItemType[]
   cash: number
}

const initialState: stateTypeWallet = {
   story: [],
   cash: 0,
}

export const walletReducer = (state: stateTypeWallet = initialState, action: actionType): stateTypeWallet => {
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
      default:
         return state
   }
}

type actionType = ReturnType<typeof saveStory>