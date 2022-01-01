export const addCategory = (category: string, add: boolean) => {
    return {
        type: 'ADD-CATEGORY',
        add,
        category,
    } as const
}