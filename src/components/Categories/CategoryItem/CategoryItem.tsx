import React from 'react'
import s from '../Categories.module.scss'
import {EditableSpan} from '../../UI/EditableSpan/EditableSpan'
import {EditableColor} from '../../UI/EditableColor/EditableColor'

type CategoryItemProps = {
   id: number
   name:string
   add: boolean
   color: string
   editingName: (id: number, name: string, add: boolean) => void
   editingColor: (id: number, color: string, add: boolean) => void
}

export const CategoryItem = (props: CategoryItemProps) => {

   const {
      id,
      name,
      add,
      color,
      editingName,
      editingColor
   } = props

   return (
      <div className={s.categoryItem} key={name}>
         <EditableSpan id={id} title={name} setNewTitle={editingName} add={add} color={color}/>
         <EditableColor id={id} setNewColor={editingColor} name={name} add={add} color={color}/>
      </div>
   )
}
