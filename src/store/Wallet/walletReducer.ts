import {saveStory} from './actions'
import {v1} from 'uuid'

type operationItemType = {
   id: string
   category: string
   prevValue: number
   change: number
   presentValue: number
   operationComment?: string
   date: string
}

export type stateTypeWallet = {
   story: operationItemType[]
   cash: number
   allIncome: number
   allExpenses: number
}

const initialState: stateTypeWallet = {
   story: [
      // {
      //    category: 'Зарплата',
      //    change: 10000,
      //    date: '2.1.2022',
      //    id: '111d2440-6bc3-11ec-a0f1-d7844936f00d',
      //    operationComment: 'Коммент 1',
      //    presentValue: 10000,
      //    prevValue: 0,
      // },
      // {
      //    category: 'Развлечения',
      //    change: -1200,
      //    date: '2.1.2022',
      //    id: '1a9f6050-6bc3-11ec-a0f1-d7844936f00d',
      //    operationComment: undefined,
      //    presentValue: 8800,
      //    prevValue: 10000,
      // },
      // {
      //    category: 'Здоровье',
      //    change: -3500,
      //    date: '2.1.2022',
      //    id: '1e6c6de0-6bc3-11ec-a0f1-d7844936f00d',
      //    operationComment: undefined,
      //    presentValue: 5300,
      //    prevValue: 8800,
      // },
      // {
      //    category: 'Дом',
      //    change: -350,
      //    date: '2.1.2022',
      //    id: '287c6b00-6bc3-11ec-a0f1-d7844936f00d',
      //    operationComment: undefined,
      //    presentValue: 4950,
      //    prevValue: 5300,
      // },
      // {
      //    category: 'Развлечения',
      //    change: -956,
      //    date: '2.1.2022',
      //    id: '2d1ca710-6bc3-11ec-a0f1-d7844936f00d',
      //    operationComment: undefined,
      //    presentValue: 3994,
      //    prevValue: 4950,
      // },
      // {
      //    category: 'Здоровье',
      //    change: -983,
      //    date: '2.1.2022',
      //    id: '30a2c090-6bc3-11ec-a0f1-d7844936f00d',
      //    operationComment: undefined,
      //    presentValue: 3011,
      //    prevValue: 3994,
      // },
      // {
      //    category: 'Машина',
      //    change: -1500,
      //    date: '2.1.2022',
      //    id: '3650ea30-6bc3-11ec-a0f1-d7844936f00d',
      //    operationComment: undefined,
      //    presentValue: 1511,
      //    prevValue: 3011,
      // },
      // {
      //    category: 'Дом',
      //    change: -6500,
      //    date: '2.1.2022',
      //    id: '3c707340-6bc3-11ec-a0f1-d7844936f00d',
      //    operationComment: undefined,
      //    presentValue: -4989,
      //    prevValue: 1511,
      // },
      // {
      //    category: 'Сбережения',
      //    change: 1500,
      //    date: '2.1.2022',
      //    id: '44bb8ee0-6bc3-11ec-a0f1-d7844936f00d',
      //    operationComment: undefined,
      //    presentValue: -3489,
      //    prevValue: -4989,
      // },
      // {
      //    category: 'Развлечения',
      //    change: -3200,
      //    date: '2.1.2022',
      //    id: '4966c770-6bc3-11ec-a0f1-d7844936f00d',
      //    operationComment: undefined,
      //    presentValue: -6689,
      //    prevValue: -3489,
      // },
   ],
   cash: 0, //-6689,
   allIncome: 0, //11500,
   allExpenses: 0, //18189,
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
                  date: action.date.format('DD/MM/YYYY'),
               },
            ],
            cash: action.change + state.cash,
            allIncome: action.change > 0 ? state.allIncome + action.change : state.allIncome,
            allExpenses: action.change < 0 ? state.allExpenses + (-action.change) : state.allExpenses,
         }
      default:
         return state
   }
}

type actionType = ReturnType<typeof saveStory>