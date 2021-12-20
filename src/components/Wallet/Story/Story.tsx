import React from 'react'
import {story} from '../Wallet'
import './Story.scss'
import {Table} from 'antd'
import {MinusCircleTwoTone, PlusCircleTwoTone} from '@ant-design/icons'
import Text from 'antd/lib/typography/Text'

type PropsType = {
   story: story[],
}

export const Story = ({story}: PropsType) => {

   const columns = [
      {
         title: 'Type',
         dataIndex: 'type',
         key: 'type',
         render: (type: '+' | '-') => type === '+' ? <PlusCircleTwoTone/> :
            <MinusCircleTwoTone twoToneColor="#eb2f96"/>,
         filters: [
            {
               text: 'Income',
               value: '+',
            },
            {
               text: 'Expenses',
               value: '-',
            },
         ],
         onFilter: (value: any, item: story) => item.type.includes(value),
      },
      {
         title: 'Old Value',
         dataIndex: 'oldValue',
         key: 'oldValue',
      },
      {
         title: 'Change',
         dataIndex: 'change',
         key: 'change',
         sorter: (a: story, b: story) => a.change - b.change,
      },
      {
         title: 'Actual Value',
         dataIndex: 'actualValue',
         key: 'actualValue',
         render: (value: number) => {
            const typeText = value < 0 ? 'danger' : 'success'
            return <Text strong type={typeText}>{value}</Text>
         },
      },
      {
         title: 'Comment',
         dataIndex: 'operationComment',
         key: 'operationComment',
      },
      {
         title: 'Date',
         dataIndex: 'date',
         key: 'date',
      },
   ]

   const dataSource = story.map(s => ({...s, key: s.id}))

   return (
      <Table
         dataSource={dataSource}
         columns={columns}
      />
   )
}
