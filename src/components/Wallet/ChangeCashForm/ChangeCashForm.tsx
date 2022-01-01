import React, {ChangeEvent, useState} from 'react'
import {Button, Form, Input, InputNumber, message, Select} from 'antd'
import {EditTwoTone, LeftCircleTwoTone, MinusCircleTwoTone, PlusCircleTwoTone} from '@ant-design/icons'
import {stateType} from '../../../store/Wallet/walletReducer'

type PropsType = {
   add: boolean
   changeCash: (category: string, difference: number, operationComment: string) => void
   setVisible: (visible: boolean) => void
   state: stateType
   addCategory: (category: string, add: boolean) => void
}

export const ChangeCashForm = (props: PropsType) => {

   const [inputValueCash, setInputValueCash] = useState<number>(0)
   const [inputValueComment, setInputValueComment] = useState<string>('')
   const [selectCategory, setSelectCategory] = useState<string>('')

   const onChangeInputCash = (value: number) => {
      setInputValueCash(value)
   }

   const onChangeInputComment = (e: ChangeEvent<HTMLInputElement>) => {
      setInputValueComment(e.currentTarget.value)
   }

   const IconButton = props.add ? <PlusCircleTwoTone/> : <MinusCircleTwoTone twoToneColor="#eb2f96"/>

   const handleChange = (value: string) => {
      setSelectCategory(value)
   }

   const onFinish = (values: any) => {
      props.changeCash(values.category, props.add ? +values.sum : +(-values.sum), values.comment)
      props.setVisible(false)
      message.success('Операция добавлена').then(r => r)
   }

   return (
      <Form name="wallet" onFinish={onFinish} autoComplete="off">
         <Form.Item name={'sum'} rules={[{required: true, message: 'Введите сумму!'}]}>
            <InputNumber size={'middle'} placeholder={'Введите сумму'} autoFocus min={1} type="number"
                         value={inputValueCash === 0 ? undefined : inputValueCash}
                         onChange={onChangeInputCash} addonBefore={IconButton} controls={false}/>
         </Form.Item>

         <Form.Item name={'comment'}>
            <Input size={'middle'} placeholder={'Введите комментарий'} value={inputValueComment}
                   onChange={onChangeInputComment} addonBefore={<EditTwoTone/>}/>
         </Form.Item>

         <Form.Item name={'category'} rules={[{required: true, message: 'Выберите категорию!'}]}>
            <Select value={selectCategory} onChange={handleChange}>
               {
                  props.add
                     ? props.state.categoryNameIncome.map(cn => <Select.Option key={cn}
                                                                               value={cn}>{cn}</Select.Option>)
                     : props.state.categoryNameExpenses.map(cn => <Select.Option key={cn}
                                                                                 value={cn}>{cn}</Select.Option>)
               }
            </Select>
         </Form.Item>

         <Form.Item>
            <div style={{display: 'flex', justifyContent: 'space-evenly'}}>
               <Button type={'primary'} danger={!props.add} icon={IconButton} shape={'circle'}
                       size={'large'} htmlType="submit"/>
               <Button type={'primary'} onClick={() => props.setVisible(false)} icon={<LeftCircleTwoTone/>}
                       size={'large'}
                       shape={'circle'}/>
            </div>
         </Form.Item>
      </Form>
   )
}
