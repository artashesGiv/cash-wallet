import React, {useState} from 'react'
import s from './Categories.module.scss'
import {CategoryInput} from './CategoryInput/CategoryInput'
import {CategoriesPropsType} from './CategoriesContainer'
import {PlusOutlined} from '@ant-design/icons'
import {Button} from 'antd'

export const Categories = ({addCategory, state}: CategoriesPropsType) => {

   const [isModalVisible, setIsModalVisible] = useState(false)
   const [add, setAdd] = useState(false)

   const showModalExpenses = () => {
      setAdd(false)
      setIsModalVisible(true)
   }

   const showModalIncome = () => {
      setAdd(true)
      setIsModalVisible(true)
   }

   const addCategoryHandler = (categoryName: string, color: string) => {
      addCategory(categoryName, add, color)
   }

   return (
      <div className={s.wrapper}>

         <div className={s.income}>
            <h2 style={{fontWeight: 'bold'}}>Доходы</h2>
            {state.categoryIncome
               .map(c =>
                  <div className={s.categoryItem} key={c.name}>
                     <span style={{fontWeight: 'bold', color: c.color}}>{c.name} </span>
                     <div className={s.colorBlock} style={{backgroundColor: c.color}}/>
                  </div>,
               )}
            <Button onClick={showModalIncome} icon={<PlusOutlined/>} type={'primary'}/>
         </div>

         <CategoryInput
            visible={isModalVisible}
            setVisible={setIsModalVisible}
            addCategory={addCategoryHandler}
         />

         <div className={s.expenses}>
            <h2 style={{fontWeight: 'bold'}}>Расходы</h2>
            {state.categoryExpenses
               .map(c =>
                  <div className={s.categoryItem} key={c.name}>
                     <span style={{fontWeight: 'bold', color: c.color}}>{c.name} </span>
                     <div className={s.colorBlock} style={{backgroundColor: c.color}}/>
                  </div>,
               )}
            <Button onClick={showModalExpenses} icon={<PlusOutlined/>} type={'primary'}/>
         </div>

      </div>
   )
}
