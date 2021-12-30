import React, {useState} from 'react'
import {Story} from './Story/Story'
import {ChangeCashForm} from './ChangeCashForm/ChangeCashForm'
import './Wallet.scss'
import Title from 'antd/lib/typography/Title'
import {Button} from 'antd'
import {MinusCircleTwoTone, PlusCircleTwoTone} from '@ant-design/icons'
import {WalletPropsType} from './WalletContainer'

export const Wallet = ({saveStory, state, addCategory, ...props}: WalletPropsType) => {
   const [add, setAdd] = useState<boolean>(false)
   const [changeFormVisible, setChangeFormVisible] = useState<boolean>(false)

   const addStory = (category: string, change: number, operationComment: string) => {
      saveStory(category, change, operationComment)
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
         <Title type={state.cash <= 0 ? 'danger' : 'success'}>{state.cash}</Title>
         <div className={'btn'}>
            {!changeFormVisible &&
              <Button type={'primary'} onClick={addCash} icon={<PlusCircleTwoTone/>} shape="circle" size={'large'}/>}
            {!changeFormVisible &&
              <Button type={'primary'} danger onClick={deductCash} icon={<MinusCircleTwoTone twoToneColor="#eb2f96"/>}
                      shape="circle"
                      size={'large'}/>}
         </div>
         {changeFormVisible &&
           <ChangeCashForm add={add} changeCash={addStory} setVisible={setChangeFormVisible} state={state}
                           addCategory={addCategory}/>}
         <Story state={state}/>
      </div>
   )
}