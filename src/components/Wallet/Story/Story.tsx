import React from 'react'
import {Table} from 'antd'
import Text from 'antd/lib/typography/Text'
import {stateType} from '../../../store/Wallet/walletReducer'

type PropsType = {
   state: stateType,
}

export const Story = ({state}: PropsType) => {

   const columns = [
      {
         title: 'Категория',
         dataIndex: 'category',
         key: 'category',
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

   const dataSource = state.story.map((s, id) => ({...s, key: id}))

   return (
      <Table
         dataSource={dataSource}
         // @ts-ignore
         columns={columns}
      />
   )
}
