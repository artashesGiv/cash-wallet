import React from 'react'
import {Table} from 'antd'
import Text from 'antd/lib/typography/Text'
import {stateTypeWallet} from '../../../store/Wallet/walletReducer'
import {category} from '../../../store/Categories/categoriesReducer'

type PropsType = {
   state: stateTypeWallet,
}

const StoryMemo = ({state}: PropsType) => {
   const columns = [
      {
         title: 'Категория',
         dataIndex: 'category',
         key: 'category',
         render: (value: category) => <div style={{backgroundColor: value.color}}>{value.name}</div>

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
      ...state.story.expenses,
      ...state.story.income,
   ]
      .sort((a, b) => a.id > b.id ? 1 : -1)
      .map((s, id) => ({...s, key: id}))
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
}


export const Story = React.memo(StoryMemo)