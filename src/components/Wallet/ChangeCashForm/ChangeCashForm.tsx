import React, {useState} from 'react'
import {Button, DatePicker, Form, Input, InputNumber, message} from 'antd'
import {EditTwoTone, LeftCircleTwoTone, MinusCircleTwoTone, PlusCircleTwoTone} from '@ant-design/icons'
import {CategorySelect} from '../../Categories/CategorySelect/CategorySelect'
import moment, {Moment} from 'moment'
import {category, stateTypeCategories} from '../../../store/Categories/categoriesReducer'

type PropsType = {
   add: boolean
   changeCash: (category: category, difference: number, operationComment: string, date: Moment) => void
   setVisible: (visible: boolean) => void
   categories: stateTypeCategories
}

const ChangeCashFormMemo = (props: PropsType) => {
   const [date, setDate] = useState<Moment>(moment().subtract())
   const onChangeDate = (value: any) => {
      setDate(value)
   }

   const IconButton = props.add ? <PlusCircleTwoTone/> : <MinusCircleTwoTone twoToneColor={'#ff4d4f'}/>

   const onFinish = (values: any) => {

      const category = props.categories.categoryExpenses.concat(props.categories.categoryIncome).filter(c => c.name === values.category)

      props.changeCash(category[0], props.add ? +values.sum : +(-values.sum), values.comment, date)
      props.setVisible(false)
      message.success('Операция добавлена').then(r => r)
   }
   return (
      <Form name="wallet" onFinish={onFinish} autoComplete="off">
         <Form.Item name={'date'}>
            <DatePicker defaultValue={moment().subtract()} onChange={onChangeDate} format={'DD/MM/YYYY'} style={{width: '100%'}}/>
         </Form.Item>

         <Form.Item name={'sum'} rules={[{required: true, message: 'Введите сумму!'}]}>
            <InputNumber placeholder={'Введите сумму'} autoFocus min={1} type={'number'}
                         addonBefore={IconButton} controls={false}/>
         </Form.Item>

         <Form.Item name={'comment'}>
            <Input placeholder={'Введите комментарий'} addonBefore={<EditTwoTone/>}/>
         </Form.Item>

         <Form.Item name={'category'} rules={[{required: true, message: 'Выберите категорию!'}]}>
            <CategorySelect categories={props.categories} add={props.add}/>
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

export const ChangeCashForm = React.memo(ChangeCashFormMemo)