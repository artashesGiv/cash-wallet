import {Moment} from 'moment'
import {category} from '../Categories/categoriesReducer'

export const saveStory = (category: category, change: number, operationComment: string, date: Moment) => {
   return {
      type: 'SAVE-STORY',
      category,
      change,
      operationComment,
      date
   } as const
}


