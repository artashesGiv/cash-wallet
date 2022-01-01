import React, {ChangeEvent, KeyboardEvent, useState} from 'react'
import {Input, Modal} from 'antd'
import {EditTwoTone} from '@ant-design/icons'

type CategoryInputProps = {
   setVisible: (visible: boolean) => void
   addCategory: (categoryName: string) => void
   visible: boolean
}

export const CategoryInput = (props: CategoryInputProps) => {

   const [inputValueCategoryName, setInputValueCategoryName] = useState('')
   const onChangeInputValueCategoryName = (e: ChangeEvent<HTMLInputElement>) => {
      setInputValueCategoryName(e.currentTarget.value)
   }

   const handleOk = () => {
      props.addCategory(inputValueCategoryName)
      props.setVisible(false)
      setInputValueCategoryName('')
   }

   const onEnter = (e: KeyboardEvent) => e.key === 'Enter' && handleOk()

   const handleCancel = () => {
      props.setVisible(false)
      setInputValueCategoryName('')
   }

   return (
      <Modal title={'Добавить категорию'} visible={props.visible} onOk={handleOk} onCancel={handleCancel}>
         <Input autoFocus={true} size={'middle'} placeholder={'Введите имя категории'} value={inputValueCategoryName}
         onChange={onChangeInputValueCategoryName} addonBefore={<EditTwoTone/>} onKeyPress={onEnter}/>
      </Modal>
   )
}
