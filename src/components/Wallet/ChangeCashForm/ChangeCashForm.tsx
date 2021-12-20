import React, {ChangeEvent, KeyboardEvent, useState} from 'react'
import {Button, Input} from 'antd'
import './ChangeCashForm.scss'
import {EditTwoTone, LeftCircleTwoTone, MinusCircleTwoTone, PlusCircleTwoTone} from '@ant-design/icons'

type PropsType = {
   add: boolean
   cash: number
   changeCash: (difference: number, operationComment: string) => void
   setVisible: (visible: boolean) => void
}

export const ChangeCashForm = (props: PropsType) => {

   const [inputValueCash, setInputValueCash] = useState<number>(0)
   const [inputValueComment, setInputValueComment] = useState<string>('')

   const onChangeInputCash = (e: ChangeEvent<HTMLInputElement>) => {
      setInputValueCash(+e.currentTarget.value)
   }

   const onChangeInputComment = (e: ChangeEvent<HTMLInputElement>) => {
      setInputValueComment(e.currentTarget.value)
   }

   const onKeyPressInputComment = (e: KeyboardEvent<HTMLInputElement>) => e.key === 'Enter' && changeCash()

   const changeCash = () => {
      props.changeCash(props.add ? inputValueCash : -inputValueCash, inputValueComment)
      props.setVisible(false)
   }

   function handleEnter(e: KeyboardEvent<HTMLInputElement>) {
      if (e.key === 'Enter') {
         const form = e.currentTarget.form
         const index = Array.prototype.indexOf.call(form, e.currentTarget)
         // @ts-ignore
         form?.elements[index + 1].focus()
         e.preventDefault()
      }
   }

   const IconButton = props.add ? <PlusCircleTwoTone/> : <MinusCircleTwoTone twoToneColor="#eb2f96"/>

   return (
      <div className={'form'}>
         <form>
            <Input size={'middle'} placeholder={'enter the amount'} autoFocus min={'0'} type="number"
                   value={inputValueCash === 0 ? '' : Number(inputValueCash).toString()}
                   onChange={onChangeInputCash} onKeyPress={handleEnter} prefix={IconButton}/>
            <Input size={'middle'} placeholder={'enter the comment'} value={inputValueComment}
                   onChange={onChangeInputComment}
                   onKeyPress={onKeyPressInputComment} prefix={<EditTwoTone/>}/>
         </form>
         <div className="btn">
            <Button type={'primary'} danger={!props.add} onClick={changeCash} icon={IconButton} shape={'circle'}
                    size={'large'}/>
            <Button type={'primary'} onClick={() => props.setVisible(false)} icon={<LeftCircleTwoTone/>} size={'large'}
                    shape={'circle'}/>
         </div>
      </div>
   )
}