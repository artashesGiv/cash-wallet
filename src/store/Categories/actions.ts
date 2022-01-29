export const addCategory = (category: string, add: boolean, color: string) => {
   return {
      type: 'ADD-CATEGORY',
      add,
      category,
      color,
   } as const
}

export const changeCategoryName = (id: number, category: string, add: boolean) => {
   return {
      type: 'CHANGE-CATEGORY-NAME',
      id,
      add,
      category,
   } as const
}
export const changeCategoryColor = (id: number, color: string, add: boolean) => {
    return {
        type: 'CHANGE-CATEGORY-COLOR',
       id,
       add,
       color,
    } as const
}