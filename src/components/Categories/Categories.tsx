import React, {useState} from 'react'
import s from './Categories.module.scss'
import {CategoryInput} from './CategoryInput/CategoryInput'
import {CategoriesPropsType} from './CategoriesContainer'

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

   const changeCategory = (categoryName: string) => {
      addCategory(categoryName, add)
   }

   return (
      <div className={s.wrapper}>
         <div className={s.expenses}>
            <h2>Расходы</h2>
            {state.categoryNameExpenses.map((c, i) => <span key={i}>{c} </span>)}
            <button onClick={showModalExpenses}>+</button>
         </div>
         <div className={s.income}>
            <h2>Доходы</h2>
            {state.categoryNameIncome.map((c, i) => <span key={i}>{c} </span>)}
            <button onClick={showModalIncome}>+</button>
            <CategoryInput visible={isModalVisible} setVisible={setIsModalVisible} addCategory={changeCategory}/>
         </div>
      </div>
   )
}
