import React from 'react'
import {Select} from 'antd'
import {stateTypeCategories} from '../../../store/Categories/categoriesReducer'

type CategorySelectProps = {
   value?: string
   onChange?: (value: string) => void
   categories: stateTypeCategories
   add: boolean
}

export const CategorySelect = ({value, onChange, categories, add}: CategorySelectProps) => {
   return (
      <Select value={value} onChange={onChange}>
         {
            add
               ? categories.categoryIncome.map(cn => <Select.Option key={cn.name} value={cn.name} style={{color: cn.color, fontWeight: 'bold'}}>{cn.name}</Select.Option>)
               : categories.categoryExpenses.map(cn => <Select.Option key={cn.name} value={cn.name} style={{color: cn.color, fontWeight: 'bold'}}>{cn.name}</Select.Option>)
         }
      </Select>
   )
}
