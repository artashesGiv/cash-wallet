import React, {useState} from 'react'
import s from './Categories.module.scss'
import {CategoryInput} from './CategoryInput/CategoryInput'
import {CategoriesPropsType} from './CategoriesContainer'
import {PlusOutlined} from '@ant-design/icons'
import {Button} from 'antd'
import {CategoryItem} from './CategoryItem/CategoryItem'
export const Categories = ({addCategory, changeCategoryName, changeCategoryColor, state}: CategoriesPropsType) => {

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

   const editingCategoryName = (id: number, name: string, add: boolean) => {
      changeCategoryName(id, name, add)
   }

   const editingCategoryColor = (id: number, color: string, add: boolean) => {
      changeCategoryColor(id, color, add)
   }

   return (
      <div className={s.wrapper}>

         <div className={s.income}>
            <h2 style={{fontWeight: 'bold'}}>Доходы</h2>
            {state.categoryIncome
               .map(c =>
                  <CategoryItem
                     key={c.name}
                     id={c.id}
                     name={c.name}
                     color={c.color}
                     add={true}
                     editingName={editingCategoryName}
                     editingColor={editingCategoryColor}
                  />,
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
                  <CategoryItem
                     key={c.name}
                     id={c.id}
                     name={c.name}
                     color={c.color}
                     add={false}
                     editingName={editingCategoryName}
                     editingColor={editingCategoryColor}
                  />,
               )}
            <Button onClick={showModalExpenses} icon={<PlusOutlined/>} type={'primary'}/>
         </div>

      </div>
   )
}
