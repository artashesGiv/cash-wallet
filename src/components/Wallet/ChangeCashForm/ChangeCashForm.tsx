import React, {useState} from 'react'
import {Button, DatePicker, Form, Input, InputNumber, message} from 'antd'
import {EditTwoTone, LeftCircleTwoTone, MinusCircleTwoTone, PlusCircleTwoTone} from '@ant-design/icons'
import {AppStateType} from '../../../store/store'
import {CategorySelect} from '../../Categories/CategorySelect/CategorySelect'
import moment, {Moment} from 'moment'

type PropsType = {
   add: boolean
   changeCash: (category: string, difference: number, operationComment: string, date: Moment) => void
   setVisible: (visible: boolean) => void
   state: AppStateType
}

export const ChangeCashForm = (props: PropsType) => {

   const [date, setDate] = useState<Moment>(moment().subtract())
   const onChangeDate = (value: any) => {
      setDate(value)
   }

   const IconButton = props.add ? <PlusCircleTwoTone/> : <MinusCircleTwoTone twoToneColor={'#eb2f96'}/>

   const onFinish = (values: any) => {
      props.changeCash(values.category, props.add ? +values.sum : +(-values.sum), values.comment, date)
      props.setVisible(false)
      message.success('Операция добавлена').then(r => r)
   }

   return (
      <Form name="wallet" onFinish={onFinish} autoComplete="off">

         <Form.Item name={'date'}>
            <DatePicker defaultValue={date} onChange={onChangeDate} format={'DD/MM/YYYY'} style={{width: '100%'}}/>
         </Form.Item>

         <Form.Item name={'sum'} rules={[{required: true, message: 'Введите сумму!'}]}>
            <InputNumber placeholder={'Введите сумму'} autoFocus min={1} type={'number'}
               // value={inputValueCash === 0 ? undefined : inputValueCash}
                         addonBefore={IconButton} controls={false}/>
         </Form.Item>

         <Form.Item name={'comment'}>
            <Input placeholder={'Введите комментарий'} addonBefore={<EditTwoTone/>}/>
         </Form.Item>

         <Form.Item name={'category'} rules={[{required: true, message: 'Выберите категорию!'}]}>
            <CategorySelect categories={props.state.categories} add={props.add}/>
         </Form.Item>

         <Form.Item>
            <div style={{display: 'flex', justifyContent: 'space-evenly'}}>
               <Button type={'primary'} danger={!props.add} icon={IconButton} shape={'circle'}
                       size={'large'} htmlType={'submit'}/>
               <Button type={'primary'} onClick={() => props.setVisible(false)} icon={<LeftCircleTwoTone/>}
                       size={'large'}
                       shape={'circle'}/>
            </div>
         </Form.Item>
      </Form>
   )
}
