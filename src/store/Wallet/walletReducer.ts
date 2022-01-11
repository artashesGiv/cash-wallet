import {saveStory} from './actions'

export type operationItemType = {
   id: number
   category: string
   prevValue: number
   change: number
   presentValue: number
   operationComment?: string
   date: string
}

export type story = {
   expenses: operationItemType[],
   income: operationItemType[],
}

export type stateTypeWallet = {
   story: story
   cash: number
   allIncome: number
   allExpenses: number
}

const initialState: stateTypeWallet = {
   story: {
      expenses: [
         {
            category: 'Развлечения',
            change: -1200,
            date: '02.01.2022',
            id: 2,
            operationComment: 'Коммент 2',
            presentValue: 8800,
            prevValue: 10000,
         },
         {
            category: 'Здоровье',
            change: -3500,
            date: '02.01.2022',
            id: 3,
            operationComment: 'Коммент 3',
            presentValue: 5300,
            prevValue: 8800,
         },
         {
            category: 'Дом',
            change: -350,
            date: '02.01.2022',
            id: 4,
            operationComment: 'Коммент 4',
            presentValue: 4950,
            prevValue: 5300,
         },
         {
            category: 'Развлечения',
            change: -956,
            date: '02.01.2022',
            id: 5,
            operationComment: 'Коммент 5',
            presentValue: 3994,
            prevValue: 4950,
         },
         {
            category: 'Здоровье',
            change: -983,
            date: '02.01.2022',
            id: 6,
            operationComment: 'Коммент 6',
            presentValue: 3011,
            prevValue: 3994,
         },
         {
            category: 'Машина',
            change: -1500,
            date: '02.01.2022',
            id: 7,
            operationComment: 'Коммент 7',
            presentValue: 1511,
            prevValue: 3011,
         },
         {
            category: 'Дом',
            change: -6500,
            date: '02.01.2022',
            id: 8,
            operationComment: 'Коммент 8',
            presentValue: -4989,
            prevValue: 1511,
         },
         {
            category: 'Развлечения',
            change: -3200,
            date: '02.01.2022',
            id: 10,
            operationComment: 'Коммент 10',
            presentValue: -6689,
            prevValue: -3489,
         },
         {
            category: 'Развлечения',
            change: -1,
            date: '02.01.2022',
            id: 11,
            operationComment: 'Коммент 11',
            presentValue: -6690,
            prevValue: -6689,
         },
      ],
      income: [
         {
            category: 'Зарплата',
            change: 10000,
            date: '02.01.2022',
            id: 1,
            operationComment: 'Коммент 1',
            presentValue: 10000,
            prevValue: 0,
         },
         {
            category: 'Сбережения',
            change: 1500,
            date: '02.01.2022',
            id: 9,
            operationComment: 'Коммент 9',
            presentValue: -3489,
            prevValue: -4989,
         },
      ],
   },
   cash: -6690,
   allIncome: 11500,
   allExpenses: 18190,
}

export const walletReducer = (state: stateTypeWallet = initialState, action: actionType): stateTypeWallet => {
   switch (action.type) {
      case 'SAVE-STORY':

         const newOperation = {
            id: state.story.income.length + state.story.expenses.length + 1,
            category: action.category,
            prevValue: state.cash,
            change: action.change,
            presentValue: action.change + state.cash,
            operationComment: action.operationComment,
            date: action.date.format('DD.MM.YYYY'),
         }

         return {
            ...state,
            story: {
               expenses: action.change < 0 ? [newOperation, ...state.story.expenses] : [...state.story.expenses],
               income: action.change > 0 ? [newOperation, ...state.story.income] : [...state.story.income],
            },
            cash: action.change + state.cash,
            allIncome: action.change > 0 ? state.allIncome + action.change : state.allIncome,
            allExpenses: action.change < 0 ? state.allExpenses + (-action.change) : state.allExpenses,
         }
      default:
         return state
   }
}

type actionType = ReturnType<typeof saveStory>