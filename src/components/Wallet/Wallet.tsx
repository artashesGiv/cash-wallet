import React, {useState} from 'react'
import {Story} from './Story/Story'
import {ChangeCashForm} from './ChangeCashForm/ChangeCashForm'
import s from './Wallet.module.scss'
import {Button} from 'antd'
import {MinusCircleTwoTone, PlusCircleTwoTone} from '@ant-design/icons'
import {WalletPropsType} from './WalletContainer'
import {HeaderPage} from './HeaderPage/HeaderPage'
import {Moment} from 'moment'

export const Wallet = ({saveStory, state}: WalletPropsType) => {
   const [add, setAdd] = useState<boolean>(false)
   const [changeFormVisible, setChangeFormVisible] = useState<boolean>(false)

   const addStory = (category: string, change: number, operationComment: string, date: Moment) => {
      saveStory(category, change, operationComment, date)
   }

   const addCash = () => {
      setChangeFormVisible(prev => !prev)
      setAdd(true)
   }

   const deductCash = () => {
      setChangeFormVisible(prev => !prev)
      setAdd(false)
   }

   const borderColor = !changeFormVisible ? 'rgba(86,86,86,0.5)' : add ? '#1890ff' : '#ff4d4f'

   return (
      <>
         <HeaderPage state={state}/>
         <div className={s.wrapper} style={{border: `3px solid ${borderColor}`}}>
            {/*<Title type={state.wallet.cash <= 0 ? 'danger' : 'success'}>{state.wallet.cash}</Title>*/}
            <div className={s.btn}>
               {!changeFormVisible &&
                 <Button type={'primary'} onClick={addCash} icon={<PlusCircleTwoTone/>} shape={'circle'}
                         size={'large'}/>}
               {!changeFormVisible &&
                 <Button type={'primary'} danger onClick={deductCash}
                         icon={<MinusCircleTwoTone twoToneColor={'#eb2f96'}/>}
                         shape="circle"
                         size={'large'}/>}
            </div>
            {
               changeFormVisible &&
              <ChangeCashForm add={add} changeCash={addStory} setVisible={setChangeFormVisible} state={state}/>
            }
            {!changeFormVisible && <Story state={state.wallet}/>}
         </div>
      </>
   )
}