import React from 'react'
import {Table} from 'antd'
import Text from 'antd/lib/typography/Text'
import {category} from '../../../store/Categories/categoriesReducer'
import {AppStateType} from '../../../store/store'

type StoryPropsType = {
   state: AppStateType,
}

export const Story = React.memo(({state}: StoryPropsType) => {

   const columns = [
      {
         title: 'Категория',
         dataIndex: 'category',
         key: 'category',
         render: (value: category) => {
            const color = value.type ? 'rgba(49,127,67,0.65)' : 'rgba(227,38,54,0.65)'

            return <div style={{backgroundColor: color, fontWeight: 'bold'}}>{value.name}</div>
         },
      },
      {
         title: 'Операция',
         dataIndex: 'change',
         key: 'change',
         render: (value: number) => {
            const typeText = value < 0 ? 'danger' : 'success'
            return <Text strong type={typeText}>{value}</Text>
         },
      },
      {
         title: 'Комментарий',
         dataIndex: 'operationComment',
         key: 'operationComment',
      },
      {
         title: 'Дата',
         dataIndex: 'date',
         key: 'date',
         responsive: ['sm'],
      },
   ]

   const dataSource = [
      ...state.wallet.story.expenses,
      ...state.wallet.story.income,
   ]
      .sort((a, b) => a.id > b.id ? 1 : -1)
      .map((s, id) => ({...s, key: id}))

   console.log(dataSource)

   return (
      <Table
         dataSource={dataSource}
         // @ts-ignore
         columns={columns}
         bordered={true}
         size={'small'}
         pagination={{
            pageSize: 13,
            size: 'small',
            position: ['topCenter'],
         }}
      />
   )
})