import React from 'react'
import {Select} from 'antd'
import {stateTypeCategories} from '../../../store/Categories/categoriesReducer'

type CategorySelectProps = {
   value: string
   onChange: (value: string) => void
   categories: stateTypeCategories
   add: boolean
}

export const CategorySelect = (props: CategorySelectProps) => {
   return (
      <Select value={props.value} onChange={props.onChange}>
         {
            props.add
               ? props.categories.categoryNameIncome.map(cn => <Select.Option key={cn} value={cn}>{cn}</Select.Option>)
               : props.categories.categoryNameExpenses.map(cn => <Select.Option key={cn} value={cn}>{cn}</Select.Option>)
         }
      </Select>
   )
}
