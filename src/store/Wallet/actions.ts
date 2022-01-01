export const saveStory = (category: string, change: number, operationComment: string) => {
   return {
      type: 'SAVE-STORY',
      category,
      change,
      operationComment,
   } as const
}


