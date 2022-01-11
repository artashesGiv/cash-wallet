import React from 'react'
import s from './HeaderPage.module.scss'
import {Descriptions, PageHeader, Statistic} from 'antd'
import {WalletOutlined} from '@ant-design/icons'
import {stateTypeWallet} from '../../../store/Wallet/walletReducer'

type HeaderPagePropsType = {
   state: stateTypeWallet
   categoriesExpenses: string[]
}

export const HeaderPage = (props: HeaderPagePropsType) => {

   let costlyCategory = ''
   let sumCostlyCategory = 0
   const expensesOperations = props.state.story.expenses
   const expensesCategories = props.categoriesExpenses

   if (expensesOperations.length > 0) {
      for (let i = 0; i < expensesCategories.length; i++) {
         let sum = 0
         for (let j = 0; j < expensesOperations.length; j++) {
            let arr = expensesOperations.filter(o => o.category === expensesCategories[i]).map(o => o.change)
            if (arr.length > 1) {
               sum += -arr.reduce((a, b) => a + b)
            } else {
               sum += -arr[0]
            }
         }
         if (sum > sumCostlyCategory) {
            costlyCategory = expensesCategories[i]
            sumCostlyCategory = sum
         }
      }
   }

   return (
      <PageHeader className={s.pageHeader} title={'Дживанян Арташес'}>
         <div>
            {/*<Divider/>*/}
            <div className={s.content}>
               <div className={s.statistic}>
                  <Statistic
                     title={'Счет'}
                     value={'Наличные'}
                     style={{
                        marginRight: 32,
                     }}
                     prefix={<WalletOutlined/>}
                  />
                  <Statistic title={'Баланс'} prefix={'₽'} value={props.state.cash}/>
               </div>
               <Descriptions size={'small'} column={3} className={s.descriptions}>
                  <Descriptions.Item label={'Всего заработано'}>{props.state.allIncome}₽</Descriptions.Item>
                  <Descriptions.Item label={'Всего потрачено'}>{props.state.allExpenses}₽</Descriptions.Item>
                  <Descriptions.Item label={'Затратная категория'}>{costlyCategory}</Descriptions.Item>
               </Descriptions>
            </div>
         </div>
      </PageHeader>
   )
}
