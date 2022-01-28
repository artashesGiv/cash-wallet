export const addCategory = (category: string, add: boolean, color: string) => {
   return {
      type: 'ADD-CATEGORY',
      add,
      category,
      color,
   } as const
}

export const changeCategory = (id: number, category: string, add: boolean, color: string) => {
   return {
      type: 'CHANGE-CATEGORY',
      id,
      add,
      color,
      category,
   } as const
}