import React, {ChangeEvent, KeyboardEvent, useState} from 'react'
import {Input, message} from 'antd'

type propsType = {
   id: number
   title: string
   setNewTitle: (id: number, name: string, add: boolean) => void
   add: boolean
   color: string
   disable?: boolean
}
export const EditableSpan = React.memo((props: propsType) => {
   const [editMode, setEditMode] = useState<boolean>(false)
   const [title, setTitle] = useState<string>('')

   const onEditMode = () => {
      if (!props.disable) {
         setEditMode(true)
         setTitle(props.title)
      }
   }

   const offEditMode = () => {
      props.setNewTitle(props.id, title, props.add)
      setEditMode(false)
      if (title !== props.title) {
         message.success('Имя категории изменено').then(r => r)
      }
   }

   const onChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
      setTitle(event.currentTarget.value)
   }

   const onKeyPressInput = (event: KeyboardEvent<HTMLInputElement>) => event.key === 'Enter' && offEditMode()

   return (
      editMode
         ? <Input
            value={title}
            autoFocus
            onBlur={offEditMode}
            onChange={onChangeInput}
            onKeyPress={onKeyPressInput}
            style={{width: '150px'}}
         />
         : <span onDoubleClick={onEditMode} style={{fontWeight: 'bold', color: props.color}}>{props.title}</span>
   )
})