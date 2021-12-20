import React, {useState} from 'react'
import {Story} from './Story/Story'
import {ChangeCashForm} from './ChangeCashForm/ChangeCashForm'
import './Wallet.scss'
import Title from 'antd/lib/typography/Title'
import {Button} from 'antd'
import {MinusCircleTwoTone, PlusCircleTwoTone} from '@ant-design/icons'
import {v1} from 'uuid'

export type story = {
   id: string
   oldValue: number
   change: number
   actualValue: number
   operationComment: string
   type: '+' | '-'
   date: string
}

export const Wallet = () => {

   const [cash, setCash] = useState<number>(0)
   const [story, setStory] = useState<story[]>([])
   const [add, setAdd] = useState<boolean>(false)
   const [changeFormVisible, setChangeFormVisible] = useState<boolean>(false)

   const saveStory = (change: number, operationComment: string) => {
      setStory([...story, {
         id: v1(),
         oldValue: cash,
         actualValue: change + cash,
         change,
         type: change < 0 ? '-' : '+',
         operationComment,
         date: `${new Date().getDate().toString()}.${new Date().getMonth().toString()}.${new Date().getFullYear().toString()}`,
      }])
      setCash(change + cash)
   }

   const addCash = () => {
      setChangeFormVisible(prev => !prev)
      setAdd(true)
   }
   const deductCash = () => {
      setChangeFormVisible(prev => !prev)
      setAdd(false)
   }

   return (
      <div className={'wrapper'}>
         <Title type={cash <= 0 ? 'danger' : 'success'}>{cash}</Title>
         <div className={'btn'}>
            {!changeFormVisible &&
              <Button type={'primary'} onClick={addCash} icon={<PlusCircleTwoTone/>} shape="circle" size={'large'}/>}
            {!changeFormVisible &&
              <Button type={'primary'} danger onClick={deductCash} icon={<MinusCircleTwoTone twoToneColor="#eb2f96"/>}
                      shape="circle"
                      size={'large'}/>}
         </div>
         {changeFormVisible &&
           <ChangeCashForm add={add} cash={cash} changeCash={saveStory} setVisible={setChangeFormVisible}/>}
         <div className={'table'}>
            <Story story={story}/>
         </div>
      </div>
   )
}