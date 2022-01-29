import React, {useState} from 'react'
import s from '../../Categories/Categories.module.scss'
import {ColorResult, SwatchesPicker} from 'react-color'
import {message, Modal} from 'antd'

type propsType = {
   id: number
   setNewColor: (id: number, color: string, add: boolean) => void
   name: string
   add: boolean
   color: string
   disable?: boolean
}
export const EditableColor = React.memo((props: propsType) => {
   const [editMode, setEditMode] = useState<boolean>(false)

   const onEditMode = () => {
      if (!props.disable) {
         setEditMode(true)
      }
   }

   const onChangeColor = (color: ColorResult) => {
      props.setNewColor(props.id, color.hex, props.add)
      setEditMode(false)
      if (color.hex !== props.color) {
         message.success('Цвет категории изменен').then(r => r)
      }
   }

   const offEditMode = () => {
      setEditMode(false)
   }

   const colorPikerStyle = {
      paddingTop: '20px',
      display: 'flex',
      justifyContent: 'center',
   }

   return (
      !editMode
         ? <div onDoubleClick={onEditMode} className={s.colorBlock} style={{backgroundColor: props.color}}/>
         : <Modal title={props.name} visible={true} footer={false} onCancel={offEditMode}>
            <div style={colorPikerStyle}>
               <SwatchesPicker onChange={onChangeColor} width={500} color={props.color}/>
            </div>
         </Modal>
   )
})