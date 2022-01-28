import React, {ChangeEvent, useState} from 'react'
import {Button, Form, Input, message, Modal} from 'antd'
import {BookTwoTone} from '@ant-design/icons'
import {category} from '../../../store/Categories/categoriesReducer'
import { SwatchesPicker } from 'react-color'

type CategoryInputProps = {
   setVisible: (visible: boolean) => void
   addCategory: (categoryName: string, color: string) => void
   visible: boolean
}

export const CategoryInput = (props: CategoryInputProps) => {
   const [inputValueCategoryName, setInputValueCategoryName] = useState<string>('')
   const [inputColor, setInputColor] = useState<string>('')
   const onChangeInputValueCategoryName = (e: ChangeEvent<HTMLInputElement>) => {
      setInputValueCategoryName(e.currentTarget.value)
   }

   const onChangeInputColor = (color: any) => {
      setInputColor(color.hex)
   }

   const handleCancel = () => {
      setInputValueCategoryName('')
      props.setVisible(false)
   }

   const onFinish = () => {
      props.addCategory(inputValueCategoryName, inputColor)
      message.success('Категория добавлена').then(r => r)
      props.setVisible(false)
   }

   const colorPikerStyle = {
      paddingTop: '20px',
      display: 'flex',
      justifyContent: 'center',
   }

   return (
      <Modal title={'Добавить категорию'} visible={props.visible} footer={false} closable={false} destroyOnClose={true}>
         <Form name={'category'} onFinish={onFinish} preserve={false}>

            <Input autoFocus={true} size={'middle'} placeholder={'Введите имя категории'}
                   value={inputValueCategoryName}
                   onChange={onChangeInputValueCategoryName} addonBefore={<BookTwoTone/>}/>

            <Form.Item name={'categoryColor'}>
               <div style={colorPikerStyle}>
                  <SwatchesPicker color={inputColor} onChangeComplete={onChangeInputColor} width={500}/>
               </div>
            </Form.Item>

            <Form.Item>
               <div style={{display: 'flex', justifyContent: 'right'}}>
                  <Button onClick={handleCancel} style={{marginRight: '20px'}}>
                     Отмена
                  </Button>
                  <Button type={'primary'} htmlType={'submit'}>
                     Добавить
                  </Button>
               </div>
            </Form.Item>

         </Form>
      </Modal>
   )
}
