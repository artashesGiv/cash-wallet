export const saveStory = (category: string, change: number, operationComment: string) => {
   return {
      type: 'SAVE-STORY',
      category,
      change,
      operationComment,
   } as const
}

export const addCategory = (category: string, add: boolean) => {
   return {
      type: 'ADD-CATEGORY',
      add,
      category,
   } as const
}
