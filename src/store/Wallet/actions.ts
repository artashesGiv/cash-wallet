import {Moment} from 'moment'

export const saveStory = (category: string, change: number, operationComment: string, date: Moment) => {
   return {
      type: 'SAVE-STORY',
      category,
      change,
      operationComment,
      date
   } as const
}


