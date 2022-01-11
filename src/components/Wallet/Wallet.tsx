import React, {useState} from 'react'
import {Story} from './Story/Story'
import {ChangeCashForm} from './ChangeCashForm/ChangeCashForm'
import s from './Wallet.module.scss'
import {Button} from 'antd'
import {MinusCircleTwoTone, PlusCircleTwoTone} from '@ant-design/icons'
import {WalletPropsType} from './WalletContainer'
import {HeaderPage} from './HeaderPage/HeaderPage'
import {Moment} from 'moment'
import {MainPieChart} from './charts/MainPieChart/MainPieChart'

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
   console.log('wallet')
   return (
      <>
         <HeaderPage state={state.wallet} categoriesExpenses={state.categories.categoryNameExpenses}/>
         <div className={s.wrapper}>
            <div className={s.col}>

               <div className={s.chart}>
                  <MainPieChart
                     story={state.wallet.story.expenses}
                     categories={state.categories.categoryNameExpenses}
                     total={state.wallet.allExpenses}
                  />
               </div>

               {changeFormVisible &&
                 <div className={s.form} style={{border: `3px solid ${borderColor}`}}>
                   <ChangeCashForm add={add} changeCash={addStory} setVisible={setChangeFormVisible}
                                   categories={state.categories}/>
                 </div>
               }

               {!changeFormVisible &&
                 <div className={s.btn}>
                   <div className={s.btnContainer}>
                     <Button type={'primary'} onClick={addCash} icon={<PlusCircleTwoTone/>} shape={'circle'}
                             size={'large'}/>
                     <Button type={'primary'} danger onClick={deductCash}
                             icon={<MinusCircleTwoTone twoToneColor={'#eb2f96'}/>}
                             shape="circle"
                             size={'large'}/>
                   </div>
                 </div>
               }

            </div>
            <div className={s.table}>
               <Story state={state.wallet}/>
            </div>
         </div>
      </>
   )
}